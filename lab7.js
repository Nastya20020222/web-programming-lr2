function showAlert(){
    let userName=document.getElementById('input-name').value;
    let userSurname=document.getElementById('input-surname').value;
    let userAge=document.getElementById('input-age').value;
    let userSex=document.getElementById('sex').value;
    let greeting;
    if(userAge<=17){
       greeting = 'О, а ятебя знаю ты ';
       if(userSex=='female'){
        greeting+='юная леди '
       }
       else{
        greeting+='парнишка '
       }
    }
    else {
        greeting = 'О, а я  Вас знаю вы ';
        if(userSex=='female'){
            greeting+='леди '
           }
           else{
            greeting+='мусье '
           }
    }
    alert(greeting + userName+' '+userSurname+ '\n'+ 'Вам '+userAge+' годиков');
    let r =Math.round(Math.random()*255);
    let g =Math.round(Math.random()*255);
    let b =Math.round(Math.random()*255);
    let color ='rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor=color;
}

function makeStairs(){
    let stairs=document.querySelector('#stairs');
    let stepCount=20;
    for (let i=0; i<stepCount; i++){
        stairs.innerHTML +='<div class="step"></div>'
    }
    let steps=document.querySelectorAll('.step');
    for(let i=0; i<steps.length; i++){
        steps[i].style.left=(400+10*i)+'px';
        steps[i].style.top=(80+80*i)+'px';
        steps[i].innerHTML='Блок номер '+(i+1);
    }
}

function Snow(){
    let snezki = document.querySelector(' #snezki');
    let stepCount = 40;
    for (let i = 0; i<stepCount; i++){
    snezki.innerHTML += '<img class="snow" src="sneg84-KOPIY2dbbc-d258b739.png">';
    }
    let snezhinkis = document.querySelectorAll('.snow');
    let screenWidth = window.screen.width;
    let screenHeight = window.screen.height;

    for (let i = 0; i<snezhinkis.length; i++)
    {
    snezhinkis[i].style.left = Math.random() * (screenWidth-100) + 'px';
    snezhinkis[i].style.top = Math.random() *(screenHeight-100) + 'px';
    snezhinkis[i].style.width= Math.random() * 45 + 'px';
    }
}

function tableT(){
    let stairs=document.querySelector('#table');
    let stepCount=10;
    for (let i=1; i<stepCount; i++){
        stairs.innerHTML +='<div class="table"></div>'
    }
    let steps=document.querySelectorAll('.table');
    for(let i=1; i<steps.length; i++){
        steps[i].innerHTML=i+'*28='+(i*28);
    }
}

function load (){
    makeStairs();
    Snow();
    tableT();
}