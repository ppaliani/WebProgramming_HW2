function compoundInterest() {
    var p = parseFloat(document.getElementById("initial").value);
    var r = parseFloat(document.getElementById("interest").value);
    var n = parseFloat(document.getElementById("years").value);
    let amount = p*(Math.pow(1+(r/100), n));
    document.getElementById("output").innerHTML = "Amount After Interest: " + amount.toFixed(2);
}