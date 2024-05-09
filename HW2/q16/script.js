function calculate() {
    var credits = document.getElementById("credits").value;
    var undergrad = document.getElementById("undergrad");
    var grad = document.getElementById("grad");
    var in_state = document.getElementById("in-state");
    var out_state = document.getElementById("out-state");
    var dorm = document.getElementById("dorm");
    var dining = document.getElementById("dining");
    var parking = document.getElementById("parking");

    var total = 0;

    if (in_state.checked == true && undergrad.checked == true) {
        total += 200;
    } else if (in_state.checked == true && grad.checked == true) {
        total += 400;
    } else if (out_state.checked == true && undergrad.checked == true) {
        total += 300;
    } else if (out_state.checked == true && grad.checked == true) {
        total += 600;
    }

    total = total * credits;

    if (dorm.checked == true) {
        total += 1000
    }

    if (dining.checked == true) {
        total += 500
    }

    if (parking.checked == true) {
        total += 200
    }

    document.getElementById("output").innerHTML = "Total Cost For University: " + total;
}