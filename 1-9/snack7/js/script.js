var num = parseInt(prompt('num'));

for (var i = 1; i <= num; i++) {
    var cube = Math.pow(i, 3);
    document.getElementById('output').innerHTML += cube + "<br>";
}