/* // let message;
message="Hello, World"

console.log(message);
 */
/* let a = 10;
console.log(a)

let c = 2, b = 3;

let camelCase = "";
let snake_case = '';

const week = 7;
week = 9
console.log(week) */

/* let a = 10;
console.log(a)
a = 11;
console.log(a)
a = "Hello"
console.log(a)
let str1 = "Двойные кавычки ${3+2}"
let str2 = 'Одинарные кавычки ${3+2}'
let str3 = `Обратные кавычки.
 ${3+2}.
 ${3+2}.`
console.log(str1)
console.log(str2)
console.log(str3) */
/* 
let firstName = "Sergey";

alert(`Hello, ${firstName}`);
 */
/* let days = 365
let planet = "Земля"
let peoples = "7 млрд."
let sun = "Солнца"

alert(`Мы живем на планете ${planet}, она делает один оборот вокруг ${sun} за ${days} дней. Население нашей планеты составляет примерно ${peoples} человек.`) */

/* let questions = confirm("Знаете ли вы HTML?");
console.log(questions);

if(questions){
    alert("Пора учить JS")
}
else{
    alert("Нужно выучить!")
} */
// confirm true/false
// prompt значение по умолчанию/введенное значение/null

// let res = prompt("Ваше имя?", "Алексей")
// console.log(res)

/* Типы данных:
number - любое число (целое или вещественное)
string - строка
boolean - булево (логическое значение)
undefined - неопознанное значение
null

object
*/

/* let res = null;
console.log(typeof(res)); */
// let a='4'
// let b='3'
// a = parseInt(a);
// a = parseInt(b);
// console.log('+', a+b);
// console.log('+', a+b);
// console.log('-', a-b);
// console.log('*', a*b);
// console.log('/', a/b);
// console.log('/', a/b);
// console.log('%', a%b); 
// console.log('**', a**b);

// let a = parseInt(prompt("Введите первое число:"))
// let b = +prompt("Введите второе число:")
// // a=parseInt(a)
// // b=+b
// console.log(typeof a);
// console.log(typeof b);
// let res = a + b
// console.log(res);
// console.log(typeof res);

// console.log("21.84");
// console.log(Number("21.84"));
// console.log(parseInt("21.84"));
// console.log(parseFloat("21.844564546").toFixed(3));
// console.log(+"21.84");
// console.log(+false);

// let login = prompt("Введите логин", "admin")
// let password = prompt("Введите пароль", '123456')
// alert("***Данные для входа***\nВаш логин:" + login + "\nВаш пароль:" + password);


// let str = "\t\tИнструкция:\nДокумент \"script.js\" файлы лежат в папке D:\\projects\\script.js";
// alert(str);
// a = prompt('Введите число:')

// b = a**2

// c = a**3

// d = a**4

// alert('Квадрат числа: '+b+'\nКуб числа: '+c+'\n4я степень: '+d)
// let a=0, b=0;
// ++a;
// console.log(a);
// b--;
// console.log(b);
// let a=0, b=0;
// let c= a++ + 2;
// let d=++b +2
// console.log("a:", a);
// console.log("b:", b);
// console.log("c:", c);
// console.log("d:", d);

let a = 1;
let b = a++;
let c = b + 5 + a;
alert(c);