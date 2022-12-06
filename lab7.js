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