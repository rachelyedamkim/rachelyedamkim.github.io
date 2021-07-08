let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

var startTime = Date.now();

var interval = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
}, 100);