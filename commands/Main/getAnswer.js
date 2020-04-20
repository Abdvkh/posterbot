/*CMD
  command: getAnswer
  help:
  need_reply: true
  auto_retry_time:
  folder: Main
  answer:
  keyboard:
  aliases:
CMD*/

questionary.user.saveAnswer(message);
let msg = utils.stringTemplateParser(lang['info_accepted'], {message: message});
Bot.sendMessage(msg);

askQuestion();

if(questionary.completed()){
   questionary.sendResult();
   Bot.sendMessage(lang['questionaryCompleted']);
   Bot.runCommand('/menu');
}

function askQuestion(){
   utils.runCommandWithKeyboard({
      btns: utils.makeKeyboard([], 'bm'),
      txt: questionary.getQuestion(),
      cmd: 'getAnswer'
   });
}
