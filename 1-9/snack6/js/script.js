var lista = [];

for (var i = 0; i < 6; i++) {
    var num = parseInt(prompt('num'));
    if (num%2 != 0) {
        lista.push(num);
    }
    console.log(lista);
}