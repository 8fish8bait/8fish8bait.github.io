var tid = new Date("Dec 25 2023 09:00:00").getTime();

var DennaTid;

setInterval(function () {DennaTid = new Date().getTime()
    var tidKvar = Math.floor((tid - DennaTid)/1000);
    
    var sekunder = Math.floor(tidKvar % 60);
    
    var minuter = Math.floor(tidKvar / 60);
    
    var timmar = Math.floor(minuter / 60);
    
    var minuter = Math.floor(minuter % 60);

    document.getElementById("timer").innerHTML = timmar + " " + minuter + " " + sekunder;

}, 1000);

