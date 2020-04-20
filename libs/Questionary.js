function setup() {
   currentQuestionary = getQuestionary();

   if (currentQuestionary) { return }

   currentQuestionary = new Object();
   User.setProperty('currentQuestionary', currentQuestionary, 'JSON');
}

function getQuestionary() {
   return User.getProperty('currentQuestionary');
}

function getAnwers() {
   return getQuestionary()['answers'];
}

function addCurrentQuestionaryProperty(propertyName, value) {
   let curQuiz = User.getProperty('currentQuestionary');
   curQuiz[propertyName] = value;
   User.setProperty('currentQuestionary', curQuiz, 'JSON');
}

function getCurrentQuestionaryProperty(propertyName) {
   return User.getProperty('currentQuestionary')['propertyName'];
}

function getQuestion() {
   let answers = getAnwers();
   if (answers) { return answers.length; }
   addCurrentQuestionaryProperty('answers', new Array());
   return 0;
}

function saveAnswer(answerName, answerMessage) {
   answerObj = {`${answerName}`: answerMessage}
   addCurrentQuestionaryProperty('answers', getAnwers().push(answer));
}

function sendResult() {
   let type = curQuiz['type'];
   let curChannel = getQuestionary()['channel'];
   let curChannelQuiz = curChannel['questionary'];
   let quizQuestions = curChannelQuiz[type]['questions'];
   let curQuizLength = Object.keys(quizQuestions).length;
   let answers = getAnwers();

   if (!answers.length == curQuizLength) { return Bot.sendMessage('Ooops...'); }

   let answer = new Object();
   answers.map((item) => {
      Object.entries(item).forEach(([key, value]) => {
         answer[key] = value;
      });
   });

   let template = curChannelQuiz[type]['template'];
   Bot.sendMessage(template);
   saveUserRequest(user.id, {req: template, channel: curChannel['id']});

   Bot.sendInlineKeyboardToChatWithId(
      curChannel['admin'],
      [
         [
            {text: 'Accept', command: 'request 1|' + curChannel['id'] + '|' + user.id},
            {text: 'Deny', command: 'request 0|' + curChannel['id'] + '|' + user.id}
         ]
      ],
      'Request from ' + utils.getLinkFor(user) + ':\n' + template
   );
}

function clearAnsewrs() {
   addCurrentQuestionaryProperty('answers', new Array());
}

function getRequests() {
   let requests = Bot.getProperty('requests');
   return requests ? requests : {};
}

function saveUserRequest(userId, req) {
   clearAnswers();
   let requests = getRequests();
   let requests = utils.obj.setDefault(requests, userId, new Array());
   if (!req) { return }
   Bot.setProperty('requests', requests[userId].push(req), 'JSON');
}

function getRequest(userId) {
   let requests = getRequests()
   return requests[userId];
}

publish({
   user: {
      setup: setup,
      addCurQuizProp: addCurrentQuestionaryProperty,
      getCurQuizProp: getCurrentQuestionaryProperty,
      getQuestionary: getQuestionary,
      saveAnswer: saveAnswer,
   },
   getRequest: getRequest,
   sendResult: sendResult,
   getQuestion: getQuestion,
})
