var num = parseInt(prompt("num"));
if(num % 2 === 0) {
    document.getElementById('output').innerHTML = num;
}
else {
    document.getElementById('output').innerHTML = num + 1;
}  