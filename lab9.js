function clickMe(button){
    if(button.innerHTML=='ТЫК')
    button.innerHTML='Спасибоньки';
    else
    button.innerHTML='ТЫК'
}
let name=document.getElementsByClassName('Ivan').value;
function changeI(button){
    if(button.innerHTML=='Мальков')
    button.innerHTML='Иван';
    else
    button.innerHTML='Мальков'
}
function changeA(button){
    if(button.innerHTML=='Макурова')
    button.innerHTML='Анастасия';
    else
    button.innerHTML='Макурова'
}
function Tik(button){
    if(button.innerHTML=='Нажми меня')
    button.innerHTML='Ещё раз нажми';
    else if (button.innerHTML=='Ещё раз нажми')
    button.innerHTML='Я СКАЗАЛ ЕЩЁ';
    else if (button.innerHTML=='Я СКАЗАЛ ЕЩЁ')
    button.innerHTML='Начать сначала';
    else
    button.innerHTML='Нажми меня'
}

function showCoords(event){
    event.target.innerHTML='x= ' + event.offsetX+', y= '+event.offsetY+', Ctrl='+event.ctrlKey+', shift= '+event.shiftKey+', Alt= '+event.altKey;
}

window.addEventListener('DOMContentLoaded',function(){
    let coords = this.document.querySelector('#coords');
    coords.addEventListener('mousemove',showCoords);
    let inputs = this.document.querySelectorAll('input[type="text"]')
    for (let i=0;i<inputs.length;i++){
        inputs[i].addEventListener("focus", () => inputs[i].classList.add('focused'), true);
        inputs[i].addEventListener("blur", () => inputs[i].classList.remove('focused'), true);
    
    }
    
});

function colooor(event){

}

