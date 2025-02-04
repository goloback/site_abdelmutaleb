var engineer = 'engineer';
var engineer_img = 'files/th.jpg';
var engineer_price = '15$/1h';
var pass_rus_exams = 'student'
var pass_rus_exams_img = 'files/hat.png';
var pass_rus_exams_price = '10$/exam';
var translator = 'translator';
var translator_img = 'files/translate.png';
var translator_price = '5$/1list';
var translator_price2 = '15$/1h';
var name_page = 'products';

var job = [engineer, pass_rus_exams, translator];

var job_img = [engineer_img, pass_rus_exams_img, translator_img];

var job_price = [engineer_price, pass_rus_exams_price, [translator_price, translator_price2]];

var current_job = 0;

/*
do function of price from html
make 2 or 3 jobs what you can make and add it up

*/

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
    var luanguage = document.getElementsByClassName('luanguage');
    if (luanguage.length == 1){
        mainpart.removeChild(luanguage[0]);
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
        var price2 = document.createElement('div');
        price.appendChild(price2);
        price2.textContent = job_price[current_job][1];
        price2.style.position = 'absolute';
        price2.style.right = '15vw';
        price2.style.bottom = '-5vh';
        var discription = document.createElement('div');
        discription.textContent = 'Arabic-English, Arabic-Russian, English-Russian';
        discription.classList.add('luanguage');
        mainpart.appendChild(discription);
 
    }
    else{
        price.textContent = job_price[current_job];
    }
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
    var active_menu = document.getElementById(id);
    active_menu.classList.add("active");
    if (id == 'products'){
        create_content_products();
        name_page = 'products';
    }
    else if(id == 'main'){
        name_page = 'main';
    }
    else if(id == 'order'){
        name_page = 'order';
    }

}