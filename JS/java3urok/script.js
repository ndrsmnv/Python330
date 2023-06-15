
// Циклы - конструкция повторения


// do{
// тело цикла
// }while(условие);

// let i=0; // переменная-счетчик

// do {
//     document.write("Это номер:" + i + "<br>");
//     i=i+2; // шаг цикла - итерация
// } while (i<=20); // условие выхода из цикла


// let i=1;
// do {
//     document.write("Квадрат числа " + i + " равен: " + i ** 2 +"<br>")
//     i++;
// } while (i<=7);


// Цикл while
// while (condition) {
//     тело цикла
// }

// let i=0
// while(i<5){
//     document.write("Это номер: " + i + "<br>");
//     i++;
// }


// let i=0
// while(i<=20){
//     document.write("Это номер: " + i + "<br>");
//     i=i+2;
// }

// let i=1
// while(i<=20){
//     if (i%2!=0){ // 0==0
//         document.write("Это номер: " + i + "<br>")
// }
//     i++
// }

// let i = 1
// while (i<=30){
//     if(i%3){
//         document.write( i + " ")
//     }
//     i++    
// }


// let start = 5;
// let end = 10;
// let sum = 0;
// while (start<=end) {
//     document.write(start + " ");
//     sum += start    
//     start++;
// }
// document.write("<br>Сумма: "+sum);




// let i=3
// while(i){ // i>0 // i!=0
//     document.write("Это номер: " + i + "<br>");
//     i--;
// }

// let a, sum=0;
// do{
//     a = +prompt("Введите число", 10)
//     if(a < 0){
//         break;
//     }
//     sum += a;
// }while(true);

// alert(sum);

// let i = 0;
// do{
//     if(i==3){
//         i++
//         continue
//     }
//     if(i==6){
//         break
//     }
//     document.write(i + " ");

//     i++

// }while(i<10);
// document.write("<br> Цикл окончен")


// ЦИКЛ СО СЧЕТЧИКОМ 
// for (цикл с заданным кол-вом итераций)

// for (инициализация_переменной; условие; изменение_переменной_счетчика){
//     тело цикла
// }

// for(let i = 0; i<5; i++){
//     if(i==2){
//         continue
//     }
//     if(i==4){
//         break
//     }
//     document.write(i)
// }



// let sum = 0;
// let mul = 1;
// for(let i = 5; i<=10; i++){
// sum += i;
// mul *= i;

// }document.write("Сумма чисел: " + sum + "<br>" + "Произведение чисел: " + mul + "<br>");


// let sum1 = 0;

// let sum2 = 1;




// for (let i = 0; i <= 10; i++) {

//     if (i % 2 == 0) {

//         sum1 = sum1 + i;

//         continue;

//     }

//     if (i % 2 !=0) {

//         sum2= sum2 * i

//     }




// }

// document.write(sum1 + "<br>" +sum2);

// for(let i = 0; i<5; i++){
//     // if(i==2){
//     //     continue
//     // }
//     // if(i==4){
//     //     break
//     // }
//     document.write(i)
// }


// for (let i=0; i < 4; i++){
//     document.write("+++" + i + "<br>");
//     for(let j=0; j<2; j++){
//         document.write("--" + j + "<br>")
//     }
// }



document.write ("<table border = '1'>")
for(let i = 0; i<11; i++){
    document.write("<tr>")
    for(let j = 0; j<11; j++){
        document.write("<td>*</td>")
    }
    document.write("</tr>")
}
document.write ("</table>")
