var names = ["Markus","Sara","Luca","Alex","Tom"];
var lnames = ["Rossi","Bibbi","Fini","Belli","Veltri"];
var outbox = [];

for (i=0; i<3; i++) {
    var rname = names[Math.floor(Math.random() * names.length)] ;
    var rlname = lnames[Math.floor(Math.random() * lnames.length)] ;
    var guest = rname + " " + rlname;
    if(!outbox.includes(guest)) {
        outbox.push(guest);
        document.getElementById('output').innerHTML += "<li>" + guest + "</li>";
    }
}
