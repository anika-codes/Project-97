which_item = localStorage.getItem("selected_item");
if (which_item == "dress"){
    pictures = "<img src = 'workout_dress.JPG'>";
    document.getElementById("pictures").innerHTML = pictures;
    info = "<h3>Workout Dress</h3> <br> <br> <h4>Sizes: xxs, xs, s, m, l, xl, xxl </h4> <h4>Colors, green, blue, bink, white, black</h4> <h4> $45.00</h4>";
    document.getElementById("info").innerHTML = info;
}
else if(which_item == "jeans"){
    pictures = "<img src = 'cargo_jeans.JPG'>";
    document.getElementById("pictures").innerHTML = pictures;
    info = "<h3>Cargo Jeans</h3> <br> <br><h4>Sizes: 25, 26, 28, 30, 32, 34, 36 </h4> <h4> $25.00</h4>";
    document.getElementById("info").innerHTML = info;
}
else if(which_item == "tee"){
    pictures = "<img src = 'cute_tee.JPG'>";
    document.getElementById("pictures").innerHTML = pictures;
    info = "<h3>Cute Tee</h3> <br> <br> <h4>Sizes: xxs, xs, s, m, l, xl, xxl </h4> <h4>Colors, green, blue, bink, white, black</h4> <h4> $20.00</h4>";
    document.getElementById("info").innerHTML = info;
}