function add() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter both numbers!");
        return;
    }

    let ans = a + b;
    document.getElementById("output").innerHTML =
        "<h2>Sum : " + ans + "</h2>";
}

function sub() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter both numbers!");
        return;
    }

    document.getElementById("output").innerHTML =
        "<h2>Difference : " + (a - b) + "</h2>";
}

function mul() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter both numbers!");
        return;
    }

    document.getElementById("output").innerHTML =
        "<h2>Multiplication : " + (a * b) + "</h2>";
}

function div() {
    let a = parseFloat(document.getElementById("num1").value);
    let b = parseFloat(document.getElementById("num2").value);

    if (isNaN(a) || isNaN(b)) {
        alert("Please enter both numbers!");
        return;
    }

    if (b === 0) {
        document.getElementById("output").innerHTML =
            "<h2>Cannot divide by zero!</h2>";
        return;
    }

    document.getElementById("output").innerHTML =
        "<h2>Division : " + (a / b) + "</h2>";
}