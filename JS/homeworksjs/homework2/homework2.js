// // Домашнее задание №1


// const price = prompt("Введите сумму покупки: ")
// if (price >= 500 && price <=1000) {
//     document.write("Стоимость покупки без скидки: " + price + "<br> Скидка: 3% <br> Итоговая стоимость: " + price * 0.97);
// }
// else if (price > 1000){
//     document.write("Стоимость покупки без скидки: " + price + "<br> Скидка: 5% <br> Итоговая стоимость: " + price * 0.95);
// }
// else if(price < 500 && price >=0){
//     document.write("Стоимость покупки без скидки: " + price + "<br> Скидка не предоставляется на суммы меньше 500 рублей");
// }
// else if (price < 0){
//    document.write ("Отрицательные значения не принимаются (или вы должны нам денег ^_^)")
// }



// Домашнее задание №2

let num1 = +prompt("Введите первое число: ");
let num2 = +prompt("Введите второе число: ");
let operator = prompt("Введите желаемое действие (+, -, /, *, %): ");
switch (operator) {
    case "+":
        let sum = num1 + num2
        document.write(num1 + " + " + num2 + " = " + sum)
        
        break;
    case "-":
        let minus = num1 - num2
        document.write(num1 + " - " + num2 + " = " + minus)
    
        break;
    case "/":
        let deg = num1 / num2
        document.write(num1 + " / " + num2 + " = " + deg)

        break;
    case "*":
        let multi = num1 * num2;
        document.write(num1 + " * " + num2 + " = " + multi)

        break;
    case "%":
        let rem = num1 % num2;
        document.write(num1 + " % " + num2 + " = " + rem)
        
        break;
      

    default:
        alert("Введите действие из перечисленных!")

        break;
}