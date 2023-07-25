var which_item = ""

function jean_click(){
    which_item = "jeans";
    localStorage.setItem("selected_item", which_item);
    window.location = "product.html";
}

function dress_click(){
    which_item = "dress";
    localStorage.setItem("selected_item", which_item);
    window.location = "product.html";
}

function tee_click(){
    which_item = "tee";
    localStorage.setItem("selected_item", which_item);
    window.location = "product.html";
}