'use strict' // эта директива обозначает что мы работаем с ES6





// let arr = ['plum.png', 'growfood.jpg'];
// console.log(arr[1]);

// //alert('GrowFood');

// // let answer = confirm('Здесь будет вопрос?');
// // console.log(answer);
//  let answer = prompt ("Do you are 18 years old?", "Yes");
//  console.log(typeof(arr));

// let num = 50;

// if (num < 49) {
//     console.log('Неверно!')
// } else if (num > 100){
//     console.log('Много!')
// } else {
//     console.log('Верно!')
// };

// //тернарный оператор - 3 элемента учавствуют в работе
// //бинарный - 2 элемента
// //унарный - один элемент


// (num == 50) ? console.log('Верно!') : console.log('Неверно!'); //сокращение кода выше


// //switch
// //альтернатифа верхней операции с if-ми
// switch(num) {
//         case num < 49:
//             console.log('Неверно!');
//             break;

//         case num < 100:
//             console.log('Много!');
//             break;

//         case num > 80:
//             console.log('Все еще Много!');
//             break;

//         case 50: // при свиче прописываем данное значение вместе 'num == 50'
//             console.log('Верно!');
//             break;

//             default: // команда выполнится в люьом случае, даже если все значение неверны.
//                 console.log('Что-то пошло не так :(')
//                 break;
// }

///////////Циклы

/*while (num < 55) {
    console.log(num);
    num++;
}
*/ //  цикл нужен для того, чтобы что-то сделать, а потом проверить
// let num = 50;
// do {
//     console.log(num);
//     num++;
// }

// while (num < 55)

// ///цикл for

// for(let i = 0; i < 8; i++) {
//     if (i == 6) {
//         continue;
        
//     } 
//     console.log(i);
// }

// let x = [] + false - null + true ;
// console.log("1"[0]);

//  let num = 20;
// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
// }

// showFirstMessage("Hello,World!");
// console.log(num);

function calc(a,b) {
    return (a + b);
}

console.log(calc(1,5))

function retVar() {

    let num = 20;
    return num;
}

let anotherNum = retVar();
console.log(anotherNum);


//Стрелочная функция по стандартам  ES6
// let calc = function(a,b) {
//     return (a + b);
// }

let calc = (a,b) => a+b;