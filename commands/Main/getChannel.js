/*CMD
  command: getChannel
  help:
  need_reply: true
  auto_retry_time:
  folder: Main
  answer:
  keyboard:
  aliases:
CMD*/

let channels = Bot.getProperty('channels');
var questionaryTypes = Object.keys(value['questionaries']);

Object.entries(channels).forEach(([key, value]) => {
   if (message == key) {
      value['name'] = key;
      questionary.user.addCurQuizProp('channel', value);
      setRestartingQuestionary();
      return utils.runCommandWithKeyboard({
         btns: utils.makeKeyboard(questionaryTypes, 'm'),
         txt: key,
         cmd: 'getType'
      });
   }
});

utils.onWrongInput('getChannel');

function setRestartingQuestionary() {
   utils.savePreviousCommand({
      btns: utils.makeKeyboard(questionaryTypes, 'm'),
      txt: message,
      cmd: 'getType'
   })
}
