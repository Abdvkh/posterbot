let channels = {
   "Angren jobs": {
      id: -1001469848975,
      admin: 469750202,
      questionary: {
         vacancy: {
            template: "#Вакансия\n🎯*Срочно требуется* {{answer['post']}}\n💼*Требования:* {{answer['gender']}} | {{answer['equirements']}}\n💼*Рабочее место:* {{answer['placement']}}\n💰*Зарплата:* {{answer['salary']}}\n☎️*Контакты:* {{answer['contacts']}}\n\n#АНГРЕН\n*Angren_jobs  'Буш иш уринлари'*\n | [Ангрен янгиликлари](https://t.me/AngrendaNimaGap) | [Иш уринлари](https://t.me/Angren_jobs) | [Уй жой](https://t.me/Angren_house) | [Автомобил](https://t.me/Angren_cars) | ",
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
            template: "#Резюме\n📝*Кандидат:* {{answer['details']}} \n🚻*Пол:* {{answer['gender']}} \n💼*Желаемая работа:* {{answer['job']}} \n💼*Опыт работы:* {{answer['experience']}} \n💰*Желаемая зарплата:* {{answer['salary']}} \n☎️*Контакты:* {{answer['contacts']}} \n#АНГРЕН\n\n* Angren_jobs  'Буш иш уринлари'*\n| [Ангрен янгиликлари](https://t.me/AngrendaNimaGap) | [Иш уринлари](https://t.me/Angren_jobs) | [Уй жой](https://t.me/Angren_house) | [Автомобил](https://t.me/Angren_cars) |",
            questions: {
               details: "[01/06]\nНапишите ваше имя и возраст.\nНапример: `Сарвар 19 лет`",
               gender: "[02/06]\nВаш пол?\nНапример: `Женщина`",
               job: "[03/06]\nКакую работу вы ищите.\nНапример: `Сварщик`",
               experience: "[04/06]\nВаш опыт работы.\nНапример: `Евроремонт 2года\nПродавец 3года\nНе работал и т.д.`",
               salary: "[05/06]\nЖелаемая зарплата.\nНапример: `от 1 млн сум`",
               contacts: "[06/06]\nНапишите ваше имя и номер телефона.\nНапример: `Иван +99812 345 67 89`",
            }
         }
      }
   }
}
Bot.setProperty('channels', channels, 'JSON');
Bot.sendMessage('Questions are set!');
