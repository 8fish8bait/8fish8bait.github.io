var time = new Date("December 25, 2023 09:00:00").getTime();

setInterval(function seconds() {
    var timeNow = new Date().getTime();

    var timer = Math.floor((time - timeNow) / 1000);

    var seconds = Math.floor(timer % 60);
    var minutes = Math.floor(timer / 60);
    var hours = Math.floor(minutes / 60);
    var minutes = Math.floor(minutes % 60);

    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;
}, 1000 )


