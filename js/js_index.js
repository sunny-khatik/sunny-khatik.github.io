var i = 0;
var images = []; //array
var time = 3000; // time in millie seconds

//images

images[0] = "url(images/i1.jpg)";
images[1] = "url(images/i2.jpg)";
images[2] = "url(images/i3.jpg)";
images[3] = "url(images/i4.jpg)";
images[4] = "url(images/i5.jpg)";
//function

function changeImage() {
    var el = document.getElementById('body');
    el.style.backgroundImage = images[i];
    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout('changeImage()', time);
}

window.onload = changeImage;
