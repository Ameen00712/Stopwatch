let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay(){

    let h = String(hours).padStart(2,'0');
    let m = String(minutes).padStart(2,'0');
    let s = String(seconds).padStart(2,'0');

    document.getElementById("display").innerHTML =
    `${h}:${m}:${s}`;
}

function run(){

    seconds++;

    if(seconds==60){
        seconds=0;
        minutes++;
    }

    if(minutes==60){
        minutes=0;
        hours++;
    }

    updateDisplay();
}

function start(){

    if(timer!==null) return;

    timer=setInterval(run,1000);
}

function stop(){

    clearInterval(timer);
    timer=null;
}

function reset(){

    stop();

    seconds=0;
    minutes=0;
    hours=0;

    updateDisplay();
}