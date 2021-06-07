var num1 = parseInt(prompt('num1'));
var num2 = parseInt(prompt('num2'));

if (num1 > num2) {
    document.getElementById('output').innerHTML = num1;
}

else {
    document.getElementById('output').innerHTML = num2;
}