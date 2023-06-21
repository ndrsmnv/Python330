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


let q = document.getElementsByClassName('a');
console.log(q);
q[1].style.color = "red"