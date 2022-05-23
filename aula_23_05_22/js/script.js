var botao = document.getElementById('botao')
var lamp = document.getElementById('lampada')
//console.log(botao)

botao.onclick = function(){
    //alert('funfo')
    if(botao.value == 'acender'){
        lamp.src = './img/acesa.jpg'
        botao.src = './img/off.png'
 
    }else{
        lamp.src = './img/apagada.jpg'
        botao.src = './img/on.png'
    }
}