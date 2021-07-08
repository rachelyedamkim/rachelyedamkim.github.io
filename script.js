let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

var facts = ['Rock', 'Paper', 'Scissor'];
var fact = facts[Math.floor(Math.random()*facts.length)];
document.write(fact);