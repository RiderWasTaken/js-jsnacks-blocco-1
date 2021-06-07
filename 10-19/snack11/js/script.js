// var out = 0;
// var box = [];
// for (i=0;i<5;i++) {
//     var num = parseInt(prompt("num"));
//     box.push(num);
//     out += box[i];
//     console.log(out);
// }

var out = 0;
var box = [];
var i = 0;
while (i<5) {
    var num = parseInt(prompt("num"));
    box.push(num);
    out += box[i];
    console.log(out);
    i++
}

