var engineer = 'Engineer';
var engineer_img = 'files/th.jpg';
var engineer_price = '15$/1h';
var pass_rus_exams = 'Student'
var pass_rus_exams_img = 'files/hat.png';
var pass_rus_exams_price = '10$/exam';
var translator = 'Translator';
var translator_img = 'files/translate.png';
var translator_price = '5$/1list';
var translator_price2 = '15$/1h';
var name_page = 'reviews';
var dictionary = {
    'title':['My promotions', 'Мои услуги'], 
    'reviews':['reviews', 'Отзывы'],
    'products':['products', 'Услуги'],
    'contacts':['contacts', 'контакты'],

};
var dictionary_work = {
    0: ['Engineer', 'Инженер'], 
    1: ['Student', 'Студент'],
    2: ['Translator', 'Переводчик']
};


var translate_dictionary = {
    0:[translator_price, '5$/страница'],
    1: [translator_price2, '15$/1ч'], 
    2:['Arabic-English, Arabic-Russian, English-Russian', 'Арабский-Английский, Арабский-Русский, Английский-Русский']
};
var price_engineer_translate = [engineer_price, '15$/1ч'];

var price_exam_translate = [pass_rus_exams_price, '10$/экзамен'];

var job = [engineer, pass_rus_exams, translator];

var job_img = [engineer_img, pass_rus_exams_img, translator_img];

var job_price = [engineer_price, pass_rus_exams_price, [translator_price, translator_price2]];

var current_job = 0;

var lan = ['en', 'ru'];

var select = document.getElementsByTagName('select')[0];
select.addEventListener('change', changeLanguageUrl);

function changeLanguageUrl(){
    var value = select.value;
    location.href = window.location.pathname + '#' + value;
    location.reload();
}


function next_page(){
    if (name_page == 'products'){
        if(current_job == job.length-1){
            current_job = 0;
        }
        else{
            current_job++;
        }
        show_current_job();
    }

}

function prev_page(){
    if (name_page == 'products'){
        if(current_job == 0){
            current_job = job.length-1;
        }
        else{
            current_job--;
        }
        show_current_job();
    }

}
function show_current_job(){
    var mainpart = document.getElementsByClassName('main-part')[0];
    var language = document.getElementsByClassName('language');
    console.log(language.length);
    if (language.length == 1){
        mainpart.removeChild(language[0]);
    }
    var name_product = document.getElementsByClassName("name_product")[0];
    name_product.textContent = job[current_job];
    var img_product = document.getElementsByClassName("img_product")[0];
    img_product.src = job_img[current_job];
    var price = document.getElementsByClassName("price")[0];

    if(job[current_job] == translator){
        var price1 = document.createElement('div');       
        price.textContent = '';
        price.appendChild(price1);
        price1.textContent = job_price[current_job][0];
        price1.style.position = 'absolute';
        price1.style.left = '15vw';
        price1.style.bottom = '-5vh';
        price1.classList.add('list_price');
        var price2 = document.createElement('div');
        price.appendChild(price2);
        price2.textContent = job_price[current_job][1];
        price2.style.position = 'absolute';
        price2.style.right = '15vw';
        price2.style.bottom = '-5vh';
        var discription = document.createElement('div');
        discription.textContent = 'Arabic-English, Arabic-Russian, English-Russian';
        discription.classList.add('language');
        mainpart.appendChild(discription);
 
    }
    else{
        price.textContent = job_price[current_job];
    }
    applyLan();
}
        
function create_content_products(){
    var name_product = document.getElementsByClassName("name_product")[0];
    name_product.textContent = engineer;
    var img_product = document.getElementsByClassName("img_product")[0];
    img_product.src = engineer_img;
    var price = document.getElementsByClassName("price")[0];
    price.textContent = engineer_price;
}

function click_item(id){
    var items = document.getElementsByClassName("item-menu");
    for(var index = 0; index < items.length; index++){
        items[index].classList.remove('active');

    }
    var mainpart = document.getElementsByClassName('main-part')[0];
    var language = document.getElementsByClassName('language');
    console.log(language.length);
    if (language.length == 1){
        mainpart.removeChild(language[0]);
    }
    var active_menu = document.getElementById(id);
    active_menu.classList.add("active");
    if (id == 'products'){
        current_job = 0;
        document.getElementsByClassName('main-part')[0].style.display = 'block';
        document.getElementsByClassName('general-part')[0].style.display = 'none';
        create_content_products();
        document.getElementsByClassName('main-contacts')[0].style.display = 'none';
        name_page = 'products';
        applyLan();
    }
    else if(id == 'reviews'){
        name_page = 'reviews';
        document.getElementsByClassName('main-part')[0].style.display = 'none';
        document.getElementsByClassName('general-part')[0].style.display = 'flex';
        document.getElementsByClassName('main-contacts')[0].style.display = 'none';
    }
    else if(id == 'contacts'){
        name_page = 'contacts';
        document.getElementsByClassName('main-part')[0].style.display = 'none';
        document.getElementsByClassName('general-part')[0].style.display = 'none';
        document.getElementsByClassName('main-contacts')[0].style.display = 'flex';
    }


}

function changeLanguage(){
    var hash = window.location.hash;
    hash = hash.substr(1);    
    console.log(hash);

  for (var i = 0; i < lan.length; i++){
    console.log(lan[i]);
    if (lan[i] == hash){
        select.value = hash;
        applyLan();
        return;
    }
  }
    location.href = window.location.pathname + '#en';

    applyLan();
    location.reload();

}

function applyLan(){
    var index = 0;
    if (select.value == 'en'){
        index = 0;
    }
    else if(select.value == 'ru'){
        index = 1;
    }

    var keys = Object.keys(dictionary);
    console.log(dictionary);
    for (var i = 0; i < keys.length; i++){
        var object = document.getElementById(keys[i]);
        object.textContent = dictionary[keys[i]][index];
    }
    if (name_page == 'products'){
        document.getElementById('name_work').textContent = dictionary_work[current_job][index];
        if (current_job == 0){
            document.getElementsByClassName('price')[0].textContent = price_engineer_translate[index];
        }
        else if (current_job == 1){
            document.getElementsByClassName('price')[0].textContent = price_exam_translate[index];
        }  
        else if (current_job == 2){
            var container_price = document.getElementsByClassName('price')[0];
            container_price.children[0].textContent = translate_dictionary[0][index];
            if(index == 1){
            container_price.children[0].classList.add ('change_margin');
        }
        else{
           for (var i = 0; i < container_price.children[0].classList.length; i++)
           {
            if (container_price.children[0].classList[i] == 'change_margin')
            {
            container_price.children[0].classList.remove('change_margin');
            break;
            }
           }

        }
            container_price.children[1].textContent = 
            translate_dictionary[1][index];

        }
        if (document.getElementsByClassName('language').length > 0)
        {
        document.getElementsByClassName('language')[0].textContent = translate_dictionary[2][index];
        if(index == 0){
            document.getElementsByClassName('language')[0].classList.remove('language_rus');
        }
        else if (index == 1){
            document.getElementsByClassName('language')[0].classList.add('language_rus');
        }
        }

    }
    
}

changeLanguage();

