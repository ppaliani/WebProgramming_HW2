function myFunction() {
    let x = event.clientX;                          // get coordinates of mouse
    let y = event.clientY;
    var box = document.getElementById("mouse-box"); // get box element
    box.style.opacity = "1";
    box.style.top = y + "px";                       // set top and left of element to respective coordinate values
    box.style.left = x + "px";
}

function disappear() {
    var box = document.getElementById("mouse-box");
    box.style.opacity = "0";
}