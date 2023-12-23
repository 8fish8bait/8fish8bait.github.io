var time = new Date("December 25, 2023 09:00:00").getTime();

var timeNow = new Date().getTime();


    const counter = setInterval(function seconds() {

    timeNow = new Date().getTime();

    var timer = Math.floor((time - timeNow) / 1000);

    var seconds = Math.floor(timer % 60);
    var minutes = Math.floor(timer / 60);
    var hours = Math.floor(minutes / 60);
    var minutes = Math.floor(minutes % 60);
    
    if(hours >= 0 && minutes >= 0 && seconds >= 0){
    document.getElementById("timer").innerHTML = hours + ":" + minutes + ":" + seconds;}
    
    else{
        document.getElementById("steam").innerHTML = "Kolla steam;"; 
                    document.getElementById("timer").innerHTML =  0 + ":" + 0 + ":" + 0;
            clearInterval(counter);
    }


}, 1000 )




