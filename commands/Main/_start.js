/*CMD
  command: /start
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Main
  answer: 🇷🇺Выберите язык | 🇺🇿Til tanlang
  keyboard: 🇷🇺Русский, 🇺🇿O'zbekcha
  aliases: 
CMD*/

questionary.user.setup();

switch(message){
   case "🇷🇺Русский":
      setLangAndRunMenu('ru');
      break;
   case "🇺🇿O'zbekcha":
      setLangAndRunMenu('uz');
      break;
   default:
      utils.onWrongInput('/start')
}

function setLangAndRunMenu(code){
   Libs.Lang.user.setLang(code);
   let msg = utils.stringTemplateParser(lang.greet, user)
   Bot.sendMessage(msg);
   Bot.runCommand("/menu");
}
