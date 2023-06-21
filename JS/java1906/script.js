// Массивы

// let arr1 = [2, 6, 8];
// console.log(arr1);
// console.log(arr1[2]);


// let arr2 = new Array(2, 6, 8);
// console.log(arr2);
// console.log((arr1[0]));


// let arr3 = new Array (5); // массив на 5 элементов, но пустьой

// let arr4 = [5] // массив на 1 элемент со значением 5 (все дело в скобках!!!)


// console.log(arr3);
// console.log(arr4.length);
// let arr1 = [2, 6, 8]
// console.log(arr1);
// console.log(arr1.length);

// length = последний индекс массива + 1

// let f = [1,2,3,4,5,6,]
// document.write(f + "<br>");
// document.write(f.length + "<br>")
// f.length = 3;
// document.write(f + "<br>");
// f.length = 6;
// document.write(f + "<br>");
// f.length = 0;
// document.write("Пустой список:" + f + "<br>");

// let arr = [5, 9, -3, -1, 4, -8, 7, 2, -6, 2, 7, 8]
// let sum = 0;
// for(let i = 0; i < arr.length; i++){
//     if (arr[i] < 0){    
//         sum += arr[i];
//     }
    
// }
// document.write (sum)

// console.log(arr)
// console.table(arr)

// // 
// console.log((-3)*(-1))

// let myArray = new Array ()
// myArray[0]=15
// myArray[1]=13
// myArray[2]=16
// myArray[10]=5
// myArray[12]=7
// console.log(myArray);
// document.write(myArray);

// let myArray = new Array(5);
// for (let i = 0; i < myArray.length; i++){
// myArray[i] = prompt("Введите " + (i+1) + " значение: ")}
// document.write(myArray + "<br>")
// for(let i = myArray.length - 1; i >=0; i--){
//     document.write(myArray[i] + " ")
// }

// let arr = [2, 6, 7, "Игорь", 1.5];

// console.log(arr);
// let sum = 0;
// for(let i = 0; i < arr.length; i++){       
//     sum *= arr[i];
//     }
//     document.write(sum)

// let arr = [[2,1,1],[6,3,7],[8,5,6]]
// console.log(arr[0])
// // console.log(arr.length)
// // console.table(arr)
// document.write(arr[1][2])

// let q=["На ноль делить можно?", "Волга впадает в Каспийское море?", "Атмосферное давление увеличивается с высотой?", "2х2 будет 8?", "Дельфины - это рыбы?", " Мадонна - настоящее имя певицы?", "Первая мировая война началась 1 сентября 1939 года?"]

// let ra= [false, true, false, false, false, false, false];
// let sum = 0;
// let ua = new Array()

// for(let i=0; i<q.length; i++){
//     let ans = confirm(q[i])
//     if(ans == ra[i]){
//         ua[i] = 10;    sum += ua[i]

//     } 
//     else{
//         ua[i] = 0
//     }
// }
// // console.log(ua);
// // document.write(sum)

// document.write("<table border='1' width='500>");
// document.write("<tr>")
//     document.write("<th>Вопрос</th>")
//     document.write("<th>Баллы</th>")
// document.write("</tr>")
// for(let i=0; i<q.length; i++){
//     document.write("<table border='1' width='500>");
// document.write("<tr>")
//     document.write("<th>"+q[i]+"</th>")
//     document.write("<th>"+ua[i]+"</th>")
// document.write("</tr>")
// }


// document.write("<tr>")
//     document.write("<th>Итого</th>")
//     document.write("<th>" + sum + "</th>")
// document.write("</tr>")
// document.write("</table>");


// let text1 = document.getElementById("text_1");
// // console.log(text1);
// console.log(text1.textContent);
// text1.textContent = "Новое содержимое"

// let text2 = document.getElementById("text_2");
// text2.innerHTML = "Новое содержимое с <b> html разметка </b>"

// let res = +prompt ("Выберите изображение: ", "1 - собака, 2 - кот, 3 - птица, 4 - рыба");
// document.write ("<div id='image'></div>");
// let img = document.getElementById("image"); 

// // img.innerHTML = "<img src = 'img/dog.jpg'>"
// switch (res) {
//     case 1:
//        img.innerHTML = "<img src = 'img/dog.jpg'>"
//         break
//     case 2:
//         img.innerHTML = "<img src = 'img/cat.jpg'>"
//         break
//     case 3:
//         img.innerHTML = "<img src = 'img/bird.jpeg'>"
//         break;
//     case 4:
//         img.innerHTML = "<img src = 'img/fish.jpeg'>"
//         break;

//     default:
//         alert("Але")
//         break;
// }



// let tag = document.getElementsByTagName("p")[2]
// console.log(tag);
// tag.innerHTML = "Hello tag"
// tag.style.color = "blue";
// tag.style.border = "1px solid red"
// tag.style.padding = "100px"
// tag.style.textAlign = "center"
// tag.style.fontWeight = "bold"

// tag.id = 'test'
// tag.className = 'x'


// let q = document.getElementsByClassName('a');
// console.log(q);
// q[1].style.color = "red"


// document.querySelectorAll(css)
// document.querySelector(css)

// let el = document.querySelectorAll("h2");
// console.log(el[1]);

// let lists = document.querySelectorAll('li');
// // console.log(lists.length); // 6

// for (let i = 0; i < lists.length; i++){
//     lists[i].innerHTML += "!!!"
// }

// let purple = document.querySelectorAll('.purple li');

// for (let i = 0; i < purple.length; i++){
//    purple[i].style.color = "purple";
// }

// let h2 = document.querySelector("ul + h2")
// h2.style.color = "purple";

// let red = document.querySelector("#one");
// red.style.color = "red"

// let js = ['Нужно', 'учить', 'JavaScript'];
// document.write(js.pop() + "<br>") // pop = удаляет последний элемент из маасива и возвращает удаляемый элемент

// js.push("JavaScript","!"); // push = добавляет элемент в конец массива
// document.write(js + '<br>');
// document.write(js.shift() + '<br>'); // shift = удаляет первый элемент из массива
// document.write(js + '<br>');
// js.unshift("Почему", "Нужно") // добавляет элемент в начало массива
// document.write(js + '<br>');


// let arr = js.slice(1,3); // slice = копирует участок массива от первого заданного значения до второго (не включая его) (либо если указать один индекс - то копирование до конца массива!)
// document.write("<br>" +arr + "<br>")

// document.write("<br>" + js + "<br>")
// // js.splice(2, 2) // удаляет из массива элементы, начиная с заданного индекса ( первый - начала, второй - кол-во)
// js.splice(0, 2, "Мы", "изучаем"); // третье и т.д значение -добавление новых элементов в массив, заменяя удаленные
// document.write("<br>" + js + "<br>");

// js.splice(-3, 1, "но", "очень", "интересный") // поддерживаются отрицательные индексы
// document.write("<br>" + js + "<br>");


// console.log(js);
// let str = js.join(" ") // join = объединяет элементы массива в строку
// console.log(str);


// let FIO = new Array(3);
// let st = ["Фамилия", "Имя", "Отчество"]
// for(let i = 0; i<FIO.length; i++){
// FIO[i] = prompt ("Введите данные по очереди:\n" + st[i])
// }
// alert(FIO.join(" "))


// Функции
// 4 способа записи функции

// Function declaration

// function Имя(аргументы){
    // тело функции;  
// }

// function hello(name){
//     document.write("Hello", name, "<br>")
// }

// hello("Irina");
// hello("Igor");

// function test(a, b, c){
//     let res = a+b+c;
//     return res;

// }
// let n1 = 1, n2 = 2, n3 = 3, m1 = 3, m2 = 5, m3 = 7;
// // test(10, 20, 30)
// // test(n1, n2, n3)
// alert("Возвращаемое значение: " + test(m1, m2, m3))

// function test2(n, m){
//     if(m==0){
//             alert("Hello")
//         return "На ноль делить нельзя"
//     }
//     else{
//             return n/m
//     }
// }

// let a1 = test2(10, 0)
// alert(a1)

// function showArrayContent(arrayToShow) {
// if(arrayToShow.length==1){
//     return arrayToShow
// }
// else{
//     let last = arrayToShow.pop()
//     let str = arrayToShow.join(", ")
//     let res = str + " и " + last
//     return res
// }
//     }
//     // Определяем массивы.
//     let a = new Array('Текст');
//     let b = new Array('день', 'ночь');
//     let c = new Array('зима', 'весна', 'лето', 'осень');
//     alert(showArrayContent(a)); // Выводим содержимое массивов,
//     alert(showArrayContent(b)); // используя созданную выше функцию.
//     alert(showArrayContent(c))


// Function Expression

// let func = function (аргументы){
//     тело функции
// }
// function test(a, b) {
//     return a+b
// }
// alert(test(2,3))

// let test2 = function (a, b){
//     return a+b;
// }
// alert (test2(2,4))


// immediately invoked funtion expression (IIFE) - анонимная (самовызывающаяся функция)

// (function (){
//     alert ("Hello")
// }());

// (function (n){
//     alert (n*n)
// }(4))


// arrow function - стрелочная функция

// function test (a, b) {
//     return a+b;
// }
// alert (test(2,3));
// let test2 = (a, b) => a+b;
// alert (test2(2,4));

// let hello = (n) => alert ("Hello " + n);

// hello("Irina")

// let test2 = (a, b) => {
//     let res = a+b
//     return res
// }

// alert(test2 (2,4));


// Объект Math 
// 
// document.write(Math.floor(7.9) + "<br>"); // округление в нижнюю сторону
// document.write(Math.ceil(7.2) + "<br>"); // округление в верхнюю сторону
// document.write(Math.round(7.5) + "<br>"); // округление по зщаконам математики

// (function()
// {
//     document.write(Math.random()+ "<br>") // от 0 до 1
// }());

// (function(min, max){
//     document.write(Math.floor(Math.random()*(max-min) +min) + "<br>") // от 0 до 1
// }(2,9));

// document.write (Math.floor(Math.random()*7+2)+"<br>")
// document.write (Math.floor(Math.random()*9+7)+"<br>")

let func = function(arr){
    return arr [Math.floor(Math.random()*arr.length)]

}
let rand = ["Цикл", "Массив", "Условие", "Функция"];

let word = func(rand);
document.write(word);
