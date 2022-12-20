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