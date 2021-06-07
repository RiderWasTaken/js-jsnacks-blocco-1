var num = 2;

for (var i = 0; i <= 10; i+2) {
    var incr = Math.pow(num, 2);
    console.log(i);
    document.getElementById('output').innerHTML += incr + "<br>";
}