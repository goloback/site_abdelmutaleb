var engineer = 'engineer';
var engineer_img = 'files/th.jpg';
var engineer_price = '15$/1h';

/*
do function of price from html
make 2 or 3 jobs what you can make and add it up

*/

function create_content_products(){
    var name_product = document.getElementsByClassName("name_product")[0];
    name_product.textContent = engineer;
    var img_product = document.getElementsByClassName("img_product")[0];
    img_product.src = engineer_img;
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
    }

}