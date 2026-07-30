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

function sub(a,b){
    let ans = a-b;
    document.getElementById("output").innerHTML = 
    "<h2>Difference : " + ans + "</h2>";
}

function mul(a,b){
    let ans = a*b;
    document.getElementById("output").innerHTML = 
    "<h2>Multiplication : " + ans + "</h2>";
}

function div(a,b){
    let ans = a/b;
    document.getElementById("output").innerHTML = 
    "<h2>Division : " + ans + "</h2>";
}
