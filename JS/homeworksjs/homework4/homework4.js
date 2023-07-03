document.write("<div id='demonstration' class = 'resetfont'></div>");
let div = document.getElementById ('demonstration');
let font = document.getElementsByClassName ('resetfont')
div.innerHTML = "Термоста́т — прибор для поддержания постоянной температуры. Поддержание температуры обеспечивается либо за счёт использования терморегуляторов, либо осуществлением фазового перехода (например, таяние льда). Для уменьшения потерь тепла или холода термостаты, как правило, теплоизолируют. Но не всегда. Широко известны автомобильные моторы, где летом нет никакой теплоизоляции и за счёт действия восковых термостатов поддерживается постоянная температура. Другим примером термостата, широко используемого в быту, является холодильник."
div.style.backgroundColor = 'yellow'
div.style.color = 'black'
div.style.width = '256px'
div.style.height = '256px'
div.style.overflow = 'scroll'
div.style.outline = '1px dashed red'


for(let i = 0; i < font.length; i++){
    let font1 = font[i]
    font1.style.fontSize = '20pt'
    font1.style.fontWeight = '400'
    font1.style.textDecoration = 'underline'
}

