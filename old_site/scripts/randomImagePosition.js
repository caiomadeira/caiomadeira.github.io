window.onLoad = Prep();
            
function Prep(){
    // window_Height = window.innerHeight;
    // window_Width = window.innerWidth;
    
    big_star1 = document.getElementById("big-star1");
    big_star2 = document.getElementById("big-star2");
    big_star3 = document.getElementById("big-star3");
    moveImage()

    // image_Height = image_Element.clientHeight;
    // image_Width = image_Element.clientWidth;
    // availSpace_V = window_Height - image_Height;
    // availSpace_H = window_Width - image_Width;
    //var changeInterval = 0; // Time has to be in miliseconds. So, 3000 is 3 seconds
    //setInterval(moveImage, changeInterval);
}

function moveImage(){
    var randNum_V = Math.round(Math.random() * 100);
    var randNum_H = Math.round(Math.random() * 90) + 5;
    
    big_star1.style.top = randNum_V + "px";
    big_star1.style.left = randNum_H + "px";

    big_star2.style.top = randNum_V + "px";
    big_star2.style.left = randNum_H + "px";

    big_star3.style.top = randNum_V + "px";
    big_star3.style.left = randNum_H + "px";
}