// 1
function middle(a,b,c) {
    let middle;
    if (a>b & a<c) {
        middle = a;
    } else if (b>a && b<c) {
        middle = b;
    } else {
        middle = c;
    }
    return middle;
}

// 2
function factors(n) {
    let factorsL = [];
    for (var i=0; i <= n; i++) {
        if (n % i === 0) {
            factorsL.push(i);
        }
    }

    var factorsStr = factorsL.join(", ");

    return factorsStr;
}

// 3
function tax(income, status) {
    let tax;
    if (status=="single" && income<30000) {
        tax = "20%";
    } else if (status=="single" && income>=30000) {
        tax = "25%";
    } else if (status=="married" && income<50000) {
        tax = "10%";
    } else if (status=="married" && income>=50000) {
        tax = "15%";
    }
    return tax;
}

// 4
function stdDev(numbers) {
    let sDev;
    if (numbers.length == 0) {
        return NaN;
    }
    else if (numbers.length<2) {
        sDev = 0;
    } else {
        let sum = 0;
        for (var i=0; i<numbers.length;i++) {
            sum += numbers[i];
        }
        let mean = sum / numbers.length;
        let squaredDiff = 0;
        for (let i = 0; i < numbers.length; i++) {
            squaredDiff += Math.pow(numbers[i] - mean, 2);
        }
        let variance = squaredDiff / numbers.length;
        sDev = Math.sqrt(variance);
    }
    return sDev;
}

// 5
function compoundInterest(p, n, r) {
    let amount = p*(Math.pow(1+(r/100), n));
    return amount;
}

// 6
function returnType(c) {
    if (c === Number(c)) {
        return "digit";
    } else if (c === c.toUpperCase()) {
        return "upper";
    } else if (c === c.toLowerCase()) {
        return "lower";
    } else {
        return "other";
    }
}

// 7
function createIdPassword(fname, lname) {
    let id, password;
    id = "" + fname[0] + lname;
    password = "" + fname[0] + fname[fname.length - 1] + lname[0] + lname[1] + lname[2] + fname.length + lname.length

    const final_id = id.toUpperCase();
    const final_password = password.toUpperCase();

    return "ID: " + final_id + "\nPASSWORD: " + final_password;
}
// 8
function removeDuplicates(strArr) {
    let retArr = [];
    for (const str of strArr) {
        if (!retArr.includes(str)) {
            retArr.push(str);

        }
    }
    return retArr;
}

// 9
function mySort(names, gpa, zip) {

    for (let i = 0; i < names.length - 1; i++) {
        minIndex = i;

        for (let j = i + 1; j < names.length; j++) {
            if (names[j] < names[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            let temp = names[i];
            names[i] = names[minIndex];
            names[minIndex] = temp;

            temp = gpa[i];
            gpa[i] = gpa[minIndex];
            gpa[minIndex] = temp;

            temp = zip[i];
            zip[i] = zip[minIndex];
            zip[minIndex] = zip[i];
        }
    }    

    return names + "\n" + gpa + "\n" + zip;
}

// 10
function myReverse(words) {

    let wordsArr = words.split(" ");

    let revWords = wordsArr.reverse();

    for (let i = 0; i < wordsArr.length; i++) {
        if (i % 2 == 0) {
            let rev =  wordsArr[i].split('');
            rev.reverse();
            rev = rev.join('');
            wordsArr[i] = rev;
        }
    }

    return revWords.join(" ");
}

// 11
function ApplyFunctionToArray(f, p) {
    if (p.length !== 0) {
        for (let i = 0; i < p.length; i++) {
            output = f(p[i]);
            p[i] = output;
        }
    }
    return p;
}

// 12
class Student {
    
    constructor(name, gpa) {
        this.name = name;
        this.gpa = gpa;
    }

    getName() {
        return this.name;
    }

    getGpa() {
        return this.gpa;
    }

    setName(name) {
        this.name = name;
    }

    setGpa(gpa) {
        this.gpa = gpa;
    }

    isHonors(gpa) {
        if (gpa > 3) {
            return true;
        } else {
            return false;
        }
    }
}

// 13
function university(idStr) {
    if (idStr.search(/^E-0\d{2}[a-z]-9[a-z]{2}\d{1}$/) == 0) {
        return true;
    } else {
        return false;
    }
}

function phone(pNum) {
    if (pNum.search(/^\d{3}-\d{3}-\d{4}/) == 0) {
        if (pNum.search(/^313/) == 0|| pNum.search(/^248/) == 0|| pNum.search(/^734/) == 0) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// 14
function fullName(flname) {
    if (flname.search(/^M(r|rs|s)\s[A-Z][a-z]+\s[A-Z]{1}\s[A-Z][a-z]+/) == 0) {
        return true;
    } else {
        return false;
    }
}