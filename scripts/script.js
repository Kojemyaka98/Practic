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
    savings : true
};

function chooseExpenses() {
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
}
chooseExpenses();

    appData.moneyPerDay = (appData.budget / 30).toFixed(); //toFixed - возвращает строковое значение и округляет.

    alert("Ежедневный бюджет:" + appData.moneyPerDay);

    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if ( appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка, попробуйте еще раз.')
    }

    //расчет накопление депозита, если он есть

    function checkSavings() {
        if (appData.savings == true) {
            let save = +prompt('Какова сумма накоплений?'),
                percent = +prompt('Под какой процент?'); // + обозначает числовое значение

                appData.monthIncome = save/100/12*percent;
                alert('Доход в месяц с вашего депозита :' + appData.monthIncome);
        }

    }
    checkSavings();
    
    



/*
    1) Создать HTML страницу и подключить к ней файл скрипта

2) В файле скрипта создать 2 переменные (money и time), которые будут получать данные от пользователя:

·      Первая будет спрашивать "Ваш бюджет на месяц?"

·      Вторая "Введите дату в формате YYYY-MM-DD"

3) Создать объект appData, который будет содержать такие данные:

·      бюджет (передаем сюда переменную из п.2)

·      данные времени - timeData (передаем сюда переменную из п.2)

·      объект с обязательными расходами - expenses (смотри пункт 4)

·      объект с необязательными расходами - optionalExpenses (оставляем пока пустым)

·      массив данных с доп. доходом - income (оставляем пока пустым)

·      свойство savings (выставляем его как false)

4) Задать пользователю по 2 раза вопросы:

    “Введите обязательную статью расходов в этом месяце”

    “Во сколько обойдется?”

    Записать ответы в объект expenses в формате: 

    expenses: {
    “ответ на первый вопрос” : “ответ на второй вопрос”
    }
5) Вывести на экран пользователя бюджет на 1 день (брать месяц за 30 дней, использовать alert)

6) Проверить, чтобы все работало без ошибок в консоли

7) Создать свой репозиторий на GitHub и поместить туда папку с первым заданием

Вопросы к этому заданию
Сколько типов данных существует в JS?

Как вывести информацию в консоль?

Какая функция операторов || и &&?
*/