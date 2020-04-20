/*CMD
  command: getType
  help:
  need_reply: true
  auto_retry_time:
  folder: Main
  answer:
  keyboard:
  aliases:
CMD*/


chooseTypeOfQuestionary();
utils.onWrongInputRun('getType');

function chooseTypeOfQuestionary() {
   let channels = Bot.getProperty('channels');
   let channel = questionary.user.getCurQuizProp('channel');
   Object.entries(channels[channel['name']]['questionary']).forEach(([key, value]) => {
      if (message == key) {
         questionary.user.addCurQuizProp('type', key);
         return utils.runCommandWithKeyboard({
            btns: utils.makeKeyboard([], 'bm'),
            txt: questionary.getQuestion(),
            cmd: 'getAnswer'
         });
      }
   });
}
