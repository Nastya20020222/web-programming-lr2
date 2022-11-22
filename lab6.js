function setRussian(){
    let name =document.getElementById('student');
    name.innerHTML='Мальков Иван';

    let footer =document.getElementById('footer');
    footer.innerHTML='Факультет бизнеса, фби-02, 3 курс, 2022'

    document.getElementById('your-name').innerHTML='Ваше имя';
    document.getElementById('input-name').placeholder='введите имя';

    document.getElementById('your-surname').innerHTML='Вашe фамилию';
    document.getElementById('input-surname').placeholder='введите фамилию';

    document.getElementById('your-age').innerHTML='Ваш возраст';
    document.getElementById('input-age').placeholder='введите возраст';

    document.getElementById('ok-button').value='Ок';
    document.getElementById('reset-button').value='Отмена';
}

function setEnglish(){
    let name =document.getElementById('student');
    name.innerHTML='Malkov Ivan';

    let footer =document.getElementById('footer');
    footer.innerHTML='Faculty of Business, FBI-02, 3rd year, 2022';

    document.getElementById('your-name').innerHTML='Your name';
    document.getElementById('input-name').placeholder='enter tour name';

    document.getElementById('your-surname').innerHTML='Your surname';
    document.getElementById('input-surname').placeholder='enter tour surname';
    
    document.getElementById('your-age').innerHTML='Your age';
    document.getElementById('input-age').placeholder='enter tour age';

    document.getElementById('ok-button').value='Ok';
    document.getElementById('reset-button').value='Reset';
}

function showAlert(){
    let userName=document.getElementById('input-name').value;
    let userSurname=document.getElementById('input-surname').value;
    let userAge=document.getElementById('input-age').value;
    alert('О, а я тебя знаю ты ' + userName+' '+userSurname+ '\n'+ 'Тебе '+userAge+' годиков');
    let r =Math.round(Math.random()*255);
    let g =Math.round(Math.random()*255);
    let b =Math.round(Math.random()*255);
    let color ='rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor=color;
}
function party1(){
    let r =Math.round(Math.random()*255);
    let g =Math.round(Math.random()*255);
    let b =Math.round(Math.random()*255);
    let color ='rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('header').style.backgroundColor=color;
}
function party2(){
    let r =Math.round(Math.random()*255);
    let g =Math.round(Math.random()*255);
    let b =Math.round(Math.random()*255);
    let color ='rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('student').style.backgroundColor=color;
}
function party3(){
    let r =Math.round(Math.random()*255);
    let g =Math.round(Math.random()*255);
    let b =Math.round(Math.random()*255);
    let color ='rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('footer').style.backgroundColor=color;
}
function error(){
    document.getElementById('vred1').innerHTML='Неверно';
    document.getElementsByClassName('check')[0].style.display='block';
}
function error2(){
    document.getElementById('vred3').innerHTML='Неверно';
    document.getElementsByClassName('check')[1].style.display='block';

}
function check(){
    document.getElementById('vred2').innerHTML="Верно";
    document.getElementsByClassName('check')[2].style.display='block';
}