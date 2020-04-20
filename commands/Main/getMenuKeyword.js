/*CMD
  command: getMenuKeyword
  help:
  need_reply: true
  auto_retry_time:
  folder: Main
  answer:
  keyboard:
  aliases:
CMD*/

let passedMenuKeyword = message;

switch (passedMenuKeyword) {
   case lang.mainMenuButtons[0]://Разместить пост
      chooseChannel();
      break;
   case lang.mainMenuButtons[1]://Помощь
      Bot.runCommand('/help');
      break;
   default:
      utils.onWrongInput('/menu');
}

function chooseChannel(){
   let channels = Bot.getProperty('channels');
   let channelsArr = Object.keys(channels);
   utils.runCommandWithKeyboard({
      btns: utils.makeKeyboard(channelsArr, 'm'),
      txt: lang['chooseChannel'],
      cmd: 'getChannel'
   });
}
