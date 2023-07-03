let month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", ];

for(let i=0; i<month.length; i++){
    document.write("<div>" + month [i] + "</div>");
    let m = document.querySelectorAll("div")[i];
    m.style.textAlign='center';
    m.style.background='rgb('+randomBg()+','+randomBg()+','+randomBg()+')';
}

function randomBg(){
    return Math.floor(Math.random()*256);
}