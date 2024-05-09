function myFunction() {
    let x, y;                                       // for position of mouse
    let box = document.getElementById("box");       // get box element
    var link = document.getElementById("link-box"); // get link element
    if (link.innerHTML == "") {
        let chooser = Math.floor(10*Math.random()); // create random number generator to select random link from LINKS []
        const LINKS = [
                "https://www.apple.com/", "https://www.microsoft.com/en-us/", "https://google.com/",
                "https://www.adobe.com/", "https://www.nasa.gov/", "https://www.playstation.com/en-us/",
                "https://www.gloriousgaming.com/", "https://www.1st.shop/", "https://www.asos.com/us/",
                "https://www.ford.com/"
        ];                                          // array containing 10 links
        x = event.clientX;                          // find coords of mouse
        y = event.clientY;
        box.style.top = y + "px";                   // set the top and left values to the respective coordinates
        box.style.left = x + "px";
        box.style.opacity = 1;                      // make the box visible
        link.innerHTML = LINKS[chooser];            // insert random link into element
        link.setAttribute('href', LINKS[chooser]);  // set element attribute to the correct href
    } else if (event.target !== link) {             // determines wether ot not mouse is clicking on the body or the link
        box.style.opacity = 0;                      // if on body (not on link), it will make box disappear
        link.innerHTML = "";                        // otherwise, visit the link clicked
    }
}