// let a = +prompt("Введите 1 число: ", 5);
// let b = +prompt("Введите 2 число: ", 6);
// let c = +prompt("Введите 3 число: ", 7);
// let sum = a + b + c;
// alert("Сумма чисел: " + sum)
// let sum = +prompt("Введите 1 число: ", 5);
// sum += +prompt("Введите 2 число: ", 6);
// sum += +prompt("Введите 3 число: ", 7);
// // let sum = a + b + c;
// alert("Сумма чисел: " + sum)

// console.log(5 > 3)
// console.log(7 > 7)
// console.log(7 <= 7)
// console.log(7 >= 7)
// console.log(7 == 6)
// console.log(7 != 6)
// console.log(7 == '7')
// console.log(7 === '7')
// console.log(7 !== '7')
// 
// let ch = prompt("Угадай число от 1 до 10");
// let num = 7;
// ch == num ? alert("Угадали!"): alert("Не угадали")

// let ch = prompt("Угадай число от 1 до 10");
// let num = 7;
// ch == num ? alert("Угадали!"): ch < num ? alert ("Число больше"): alert("Число меньше");

// if (Условие){
//     Блок истины
// }
// else{
//     Блок ложь



// false - 0, false, "", null

// res = "hello";
// console.log(Boolean(res));
// if(res){
//     alert("TRUE")
// }
// else{
//     alert("false")
// }

// let a = 16;
// let b = 120;
// if(a>b){
//     alert(a + ">" + b)
// }
// else if(a<b){
//     alert(a + "<" + b)
// }
// else{
//     alert( a + "=" + b)
// }

// let a = prompt("Введите номер дня недели")
// if (a == 1){alert ("Понедельник")
    
// }
// else if (a == 2){alert("Вторник")

// }
// else if (a == 3){alert ("Среда") 

// }
// else if (a == 4){alert("Четверг") 

// }
// else if (a == 5){alert("Пятница") 

// }
// else if (a == 6){alert("Суббота") 

// }
// else if (a == 7){alert("Воскресенье") 

// }
// else {
//     alert("Такого дня нет")
// }



// if (5==6 || 1 > 2){
//     console.log("True");
// }
// else{
//     console.log("False");
// }

// console.log(!7);



// let age = prompt("Введите возраст: ");
// if(age < 18 || age >= 70){
//     alert("Нельзя")
// }
// else{
//     alert("Вы можете получить права")
// }


// switch(Условие){
//     case значение:
//         код;
//         break;
//         default:
//             код
// }


let a = +prompt("Введите число: ")
switch(a){
    case 1:
        alert ("Код 1");
        break;
    case 2:
        alert ("Код 2")
        break;
        default:
            alert ("хз")
            break;
}