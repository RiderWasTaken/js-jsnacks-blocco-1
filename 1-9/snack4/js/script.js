var output = 0;

for (var i = 0; i < 10; i++) {
    var newnum = parseInt(prompt('num'));
    output += newnum;
}

document.getElementById('output').innerHTML = output;