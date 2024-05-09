function myFunction(num) {
    let para;
    if (num == 1) {                                             // based on arg, changes background and font family
        para = document.getElementById("p1");
        para.style.backgroundColor = "pink";
        para.style.fontFamily = "Titillium Web, sans-serif";
    } else if (num == 2) {
        para = document.getElementById("p2");
        para.style.backgroundColor = "green";
        para.style.fontFamily = "Titillium Web, sans-serif";
    } else if (num == 3) {
        para = document.getElementById("p3");
        para.style.backgroundColor = "red";
        para.style.fontFamily = "Titillium Web, sans-serif";
    } else if (num == 4) {
        para = document.getElementById("p4");
        para.style.backgroundColor = "purple";
        para.style.fontFamily = "Titillium Web, sans-serif";
    } else {                                                    // if arg 5-8, change back to normal
        para = document.getElementsByClassName("paragraph");
        para[num-5].style.backgroundColor = "rgba(0,0,0,0)";
        para[num-5].style.fontFamily = "Poppins, sans-serif";
    }
}

function myFunction2(num) {
    let head;
    if (num == 1) {                                             // based on arg, change font size
        head = document.getElementById("heading1");
        head.style.fontSize = "56px";
    } else if (num == 2) {
        head = document.getElementById("heading2");
        head.style.fontSize = "56px";
    } else if (num == 3) {
        head = document.getElementById("heading3");
        head.style.fontSize = "56px";
    } else if (num == 4) {
        head = document.getElementById("heading4");
        head.style.fontSize = "56px";
    } else {
        head = document.getElementsByClassName("headings");     // if arg 5-8, change back to normal
        head[num-5].style.fontSize = "36px";
    }
}

function imgFunction(num) {
    let img;
    if (num == 1) {                                             // based on arg, changes border
        img = document.getElementById("img1");
        img.style.border = "solid pink 5px";
        img.style.borderRadius = "5px";
    } else if (num == 2) {
        img = document.getElementById("img2");
        img.style.border = "solid green 5px";
        img.style.borderRadius = "5px";
    } else if (num == 3) {
        img = document.getElementById("img3");
        img.style.border = "solid red 5px";
        img.style.borderRadius = "5px";
    } else if (num == 4) {
        img = document.getElementById("img4");
        img.style.border = "solid purple 5px";
        img.style.borderRadius = "5px";
    } else {                                                    // if arg 5-8, change back to normal
        img = document.getElementsByClassName("images");
        img[num-5].style.border = "solid black 0px";
        img[num-5].style.borderRadius = "0px";
    }
}