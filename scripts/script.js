let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');

    }
}
start();



let appData = {
    budget : money,
    expenses : {},
    optionalExpenses: {},
    income: [],
    timeData : time,
    savings : true,
    chooseExpenses : function() {
        for (let i=0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a !='' && b != '' && a.length < 50) {
            console.log("done");
        appData.expenses[a] = b; // обязательная строка расходов
                } else {
                    i = i - 1;
                }
                
            
        }

    } ,
    detectDayBudget : function () {

    appData.moneyPerDay = (appData.budget / 30).toFixed(); //toFixed - возвращает строковое значение и округляет.
    alert("Ежедневный бюджет:" + appData.moneyPerDay);

    },

    detectLevel : function() {

        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log('Средний уровень достатка');
        } else if ( appData.moneyPerDay > 2000) {
            console.log('Высокий уровень достатка');
        } else {
            console.log('Произошла ошибка, попробуйте еще раз.')
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?'); // + обозначает числовое значение

                appData.monthIncome = save/100/12*percent;
                alert('Доход в месяц с вашего депозита :' + appData.monthIncome);
        }

    },

    chooseOptExpenses : function() {
        for (let i=1; i<3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i] = opt;
        }
    },

    chooseIncome : function () {
        
        for (let i = 0; i < 1; i++) {
            let items = prompt('Что принесет дополнительный доход (Пенечисли через запятую)', '');
      
            if ((typeof (items)) === 'string' && items != '' && (typeof (items)) != null) {
              appData.income = items.split(', ');
              appData.income.push(prompt('Что может что-то еще?'));
              appData.income.sort();
              appData.income.forEach(function (item, i, income) {
                let n = i + 1;
                console.log(n + ' - Способ доп. заработка: ' + item);
              });
            } else {
              i--;
            }
          }
        }
    

};
for (let key in appData) {
    console.log('Наша программа включает в себя данные:' + key + ': ' + appData[key]);
  }


//Lesson 4 
// 1) Написать проверку, что пользователь может:

// ·        Ввести в дополнительных доходах (chooseIncome) только строку

// ·        Не может оставить строку пустой

// ·        Не может отменить вопрос

// 2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: " и полученные способы (внутри chooseIncome)

// ·        Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.

// 3) Используя цикл for in для объекта (appData) вывести в консоль сообщение "Наша программа включает в себя данные: " (вывести весь appData)

// 4) Проверить, чтобы все работало и не было ошибок в консоли

// 5) Добавить папку с уроком на свой GitHub
// Вопросы к этому заданию