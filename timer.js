let timerPlace = document.querySelector('.timer-place');
const lap01 = document.querySelector('.lap01');
const lap02 = document.querySelector('.lap02');
const lap03 = document.querySelector('.lap03');
const lap04 = document.querySelector('.lap04');
const lap05 = document.querySelector('.lap05');

let seconds = 0;
let timer;
let lap = 0;
const laps = [lap01, lap02, lap03, lap04, lap05];


document.addEventListener('click', function(e) {
    const element = e.target;
    
    if (element.classList.contains('start')){
        timerPlace.classList.remove('paused')
        clearInterval(timer);
        starTimer();
    }
    
    if (element.classList.contains('pause')){
        clearInterval(timer);
        timerPlace.classList.add('paused')
    }
    
    if (element.classList.contains('reset')){
        timerPlace.classList.remove('paused')
        clearInterval(timer);
        timerPlace.innerHTML = '00:00:00';    
        resetLap();
        seconds = 0;
    }
    
    if (element.classList.contains('lap')){
        if(lap == 5){
            confirm('You have reached the limit of laps.');
        }else{   
            laps[lap].innerHTML = createLap(seconds);
            laps[lap].classList.add('paused');
            seconds = 0;
            lap++;
        }
    }
    
})

function starTimer() {
    timer = setInterval(function () {
        seconds++;
        timerPlace.innerHTML = createSeconds(seconds);
    }, 1000);
}

function createSeconds(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
    });
};

function createLap(seconds) {
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR', {
    hour12: false,
    timeZone: 'UTC'
    });
};

function resetLap(){
    for(i = 0; i < 5; i++){
        laps[i].innerHTML = '00:00:00'
    }
}

