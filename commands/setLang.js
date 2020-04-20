/*CMD
  command: setLang
  help:
  need_reply:
  auto_retry_time:
  folder:
  answer:
  keyboard: Установить язык, \nСоздать организацию, \nСтатистика, Главное меню
  aliases: Установить язык
CMD*/

let uzLang = {
   buttons: {
      back: "Назад",
      menu: "Главное меню",
      vacancy: "Вакансия",
      resume: "Резюме"
   },
   info_accepted: "Ваши данные получены: `{}`",
   where: "В каком канале вы собираетесь опубликовать пост?",
   which_category: "Выберите какой тип поста вы хотите оставить",
   req_confirmed: "Ваша заявка была одобрена и опубликована! Спасибо!",
   req_denied: "Ваша заявка была откланена из-за несоответствия! Спасибо!",
   vacancy: {
      template: "#Вакансия\n🎯*Срочно требуется* ${post}\n💼*Требования:* ${gender} | ${requirements}\n💼*Рабочее место:* ${placement}\n💰*Зарплата:* ${salary}\n☎️*Контакты:* ${contacts}\n\n#АНГРЕН\n*Angren_jobs  'Буш иш уринлари'*\n | [Ангрен янгиликлари](https://t.me/AngrendaNimaGap) | [Иш уринлари](https://t.me/Angren_jobs) | [Уй жой](https://t.me/Angren_house) | [Автомобил](https://t.me/Angren_cars) | ",
      questions: {
         post: "[01/06]\nНапишите должность на которую требуется работник.\nНапример: `Продавец`",
         gender: "[02/06]\nРаботник какого пола вам нужен?\nНапример: `Женщина`",
         requirements: "[03/06]\nНапишите ваши требования на должность.\nНапример: `Требуется опыт работы. Возраст до 30 лет.`",
         placement: "[04/06]\nГде находится рабочее место?\nНапример: `Магазин Весна`",
         salary: "[05/06]\nКакую зарплату предлагаете?\nНапример: `от 1 млн сум`",
         contacts: "[06/06]\nНапишите ваше имя и номер телефона.\nНапример: `Иван +99812 345 67 89`"
      }
   },
   resume: {
      template: "#Резюме\n📝*Кандидат:* ${details} \n🚻*Пол:* ${gender} \n💼*Желаемая работа:* ${job} \n💼*Опыт работы:* ${experience} \n💰*Желаемая зарплата:* ${salary} \n☎️*Контакты:* ${contacts} \n#АНГРЕН\n\n* Angren_jobs  'Буш иш уринлари'*\n| [Ангрен янгиликлари](https://t.me/AngrendaNimaGap) | [Иш уринлари](https://t.me/Angren_jobs) | [Уй жой](https://t.me/Angren_house) | [Автомобил](https://t.me/Angren_cars) |",
      questions: {
         details: "[01/06]\nНапишите ваше имя и возраст.\nНапример: `Сарвар 19 лет`",
         gender: "[02/06]\nВаш пол?\nНапример: `Женщина`",
         job: "[03/06]\nКакую работу вы ищите.\nНапример: `Сварщик`",
         experience: "[04/06]\nВаш опыт работы.\nНапример: `Евроремонт 2года\nПродавец 3года\nНе работал и т.д.`",
         salary: "[05/06]\nЖелаемая зарплата.\nНапример: `от 1 млн сум`",
         contacts: "[06/06]\nНапишите ваше имя и номер телефона.\nНапример: `Иван +99812 345 67 89`",
      }
   }
};

let ruLang = {
   buttons: {
      back: "Назад",
      menu: "Главное меню",
      vacancy: "Вакансия",
      resume: "Резюме"
   },
   chooseChannel: "Выберите канал куда собираетесь сделать пост",
   greet: `Добро пожаловать ${user.first_name}!`,
   mainMenuButtons: ["Разместить пост", "Помощь"],
   info_accepted: `Ваши данные получены: *${message}*`,
   where: "В каком канале вы собираетесь опубликовать пост?",
   which_category: "Выберите какой тип поста вы хотите оставить",
   req_confirmed: "Ваша заявка была одобрена и опубликована! Спасибо!",
   req_denied: "Ваша заявка была откланена из-за несоответствия! Спасибо!",
   questionaryCompleted: "Данные приняты! Пожалуйста ждите ответа, спасибо за ответы!"
};

let level = User.getGroup();

if(true  /*level == "Boss"*/){
   Libs.Lang.setup("uz", uzLang);
   Libs.Lang.setup("ru", ruLang);

   Bot.sendMessage("Languages are successfully set!");
   Bot.runCommand("reset");
}
