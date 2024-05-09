function createIdPassword() {

    document.getElementById("output").innerHTML = "";
    document.getElementById("error-msg").innerHTML = "";
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let fnameB = true, lnameB = true, phoneB = true;
    let id, password;
    let err = document.getElementById("error-msg");
    err.style.backgroundColor = "rgb(0, 0, 0, 0)";

    if (phone.search(/^\d{3}-\d{3}-\d{4}$/) != 0) {
        err.innerHTML = "Please enter valid phone number format (xxx-xxx-xxxx)"
        err.style.backgroundColor = "aliceblue";
        phoneB = false;
    }

    if (lname.length < 2) {
        err.innerHTML = "Please enter a last name of length 2 or more"
        err.style.backgroundColor = "aliceblue";
        lnameB = false;
    } else if (lname.length == 2) {
        password = "" + fname[fname.length - 1] + lname[0] + lname[1] +
        phone[phone.length - 4] + phone[phone.length - 3] + phone[phone.length - 2] + phone[phone.length - 1];    
    } else {
        password = "" + fname[fname.length - 1] + lname[0] + lname[1] + lname[2] +
        phone[phone.length - 4] + phone[phone.length - 3] + phone[phone.length - 2] + phone[phone.length - 1];
    }

    id = "" + fname[0] + lname;

    const final_id = id.toUpperCase();
    const final_password = password.toUpperCase();

    if (fnameB == true && lnameB == true && phoneB == true) {
        document.getElementById("output").innerHTML = "ID: " + final_id + " PASSWORD: " + final_password;
    }
}