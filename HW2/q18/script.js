function createIdPassword() {

    document.getElementById("output").innerHTML = "";
    document.getElementById("error-msg").innerHTML = "";
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let fnameB = true, lnameB = true, phoneB = true;
    let id, password;
    let err = document.getElementById("error-msg");
    let fnameInp = document.getElementById("fname");
    let lnameInp = document.getElementById("lname");
    let phoneInp = document.getElementById("phone");
    err.style.backgroundColor = "rgb(0, 0, 0, 0)";

    if (phone.search(/^\d{3}-\d{3}-\d{4}$/) != 0) {
        err.innerHTML = "Please enter valid phone number format (xxx-xxx-xxxx)"
        err.style.backgroundColor = "aliceblue";
        phoneInp.style.backgroundColor = "rgba(236, 41, 41, 0.727)";    // changes background of corresponding input box to red
        phoneInp.style.setProperty("--c", "white"); // changes color of placeholder text to white to see easier
        phoneB = false;
    } else {
        phoneInp.style.backgroundColor = "#ffffffc7";   // changes background of input box to slightly see through white
        phoneInp.style.setProperty("--c", "black");     // changes placeholder font back to black
    }

    if (lname.length < 2) {
        err.innerHTML = "Please enter a last name of length 2 or more"
        err.style.backgroundColor = "aliceblue";
        lnameInp.style.backgroundColor = "rgba(236, 41, 41, 0.727)";
        lnameInp.style.setProperty("--c", "white");
        lnameB = false;
    } else if (lname.length == 2) {
        password = "" + fname[fname.length - 1] + lname[0] + lname[1] + phone[phone.length - 4] +
        phone[phone.length - 3] + phone[phone.length - 2] + phone[phone.length - 1];

        lnameInp.style.backgroundColor = "#ffffffc7";
        lnameInp.style.setProperty("--c", "black");
    } else {
        password = "" + fname[fname.length - 1] + lname[0] + lname[1] + lname[2] + phone[phone.length - 4] +
        phone[phone.length - 3] + phone[phone.length - 2] + phone[phone.length - 1];

        lnameInp.style.backgroundColor = "#ffffffc7";
        lnameInp.style.setProperty("--c", "black");
    }

    id = "" + fname[0] + lname;

    const final_id = id.toUpperCase();
    const final_password = password.toUpperCase();

    if (fnameB == true && lnameB == true && phoneB == true) {
        document.getElementById("output").innerHTML = "ID: " + final_id + " PASSWORD: " + final_password;
    }
}

function showFname(message) {
    var out = document.getElementById("fname-lbl");
    if (message == 1) {         // if param is 1 shows message. if not 1, does not show message
        out.innerHTML = "Enter First Name";
        out.style.fontSize = "0.7em";
        out.style.fontStyle = "italic";
    } else {
        out.innerHTML = "";
    }
}

function showLname(message) {
    var out = document.getElementById("lname-lbl");
    if (message == 1) {
        out.innerHTML = "Enter Last Name";
        out.style.fontSize = "0.7em";
        out.style.fontStyle = "italic";
    } else {
        out.innerHTML = "";
    }
}

function showPhone(message) {
    var out = document.getElementById("phone-lbl");
    if (message == 1) {
        out.innerHTML = "Enter (xxx-xxx-xxxx)";
        out.style.fontSize = "0.7em";
        out.style.fontStyle = "italic";
    } else {
        out.innerHTML = "";
    }
}