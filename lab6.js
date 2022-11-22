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