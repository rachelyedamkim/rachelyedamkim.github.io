let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

var things = ['Rock', 'Paper', 'Scissor'];
var thing = things[Math.floor(Math.random()*things.length)];
document.write('The computer chose: ' + thing);