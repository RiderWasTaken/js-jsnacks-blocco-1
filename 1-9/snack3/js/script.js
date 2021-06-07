var w1 = prompt('word1');
var w2 = prompt('word2');

if (w1.length > w2.length) {
    document.getElementById('output').innerHTML = w1;
}

else {
    document.getElementById('output').innerHTML = w2;
}