var name1 = prompt('nome');
var lista = ['blabla','qui','quo','qua','bababa'];
var check = false;

for (var i = 0; i < lista.length; i++) {
    if (lista[i] === name1) {
        check = true;
        break;
    }
}

if (check) {
    output.innerHTML += 'Ammesso.';
} else {
    output.innerHTML += 'Non ammesso.';
}