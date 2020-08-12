// Get value from the DOM
const date = document.querySelector('.date');
const time = document.getElementById('time');
const name = document.querySelector('.name');
const greet = document.querySelector('.greet');
const focus = document.querySelector('.focus');
const body = document.querySelector('.body');
// console.log(time)

const setAmPm = true;

// Set Date
let currentDate = new Date();
date.innerHTML = currentDate.toDateString();

// set time
function setTime(){
    let date = new Date;
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // set AmPm
    const amPm = hour >= 12 ? "PM" : "AM";
    hour =  hour % 12 || 12;

   time.innerHTML = `${hour}<span>:</span>${getZero(min)}<span>:</span>${getZero(sec)} ${setAmPm ? amPm : ""}`
}

// set zero;
function getZero(n){
    return (parseInt(n, 10) < 10 ? '0' : "" ) + n;
}


// Set background and greeting
function getBgGreet(){
    let hour = currentDate.getHours();
    if(hour < 12){
        // morning
        body.style.background = `url(/img/morning.jpg)`;
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
        greet.textContent = "good morning";
    }else if(hour < 18){
        body.style.background = `url(/img/mafternoon.jpg)`;
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
        greet.textContent = "good afternoon";
    }else{
        // evening
        body.style.background = `url(/img/night.jpg)`;
        body.style.backgroundRepeat = "no-repeat";
        body.style.backgroundSize = "cover";
        greet.textContent = "good evening";
        body.style.color = 'white'
    }
}



//  set storage
function getName(){
    if(localStorage.getItem('name') === null){
        name.textContent = "[enter name]";
    }else{
        name.textContent = localStorage.getItem('name')
    }
}

// Set Name
function setName(e){
    if(e.type === "keypress"){
        if(e.which === 13 || e.keyCode === 13){
            localStorage.setItem('name', e.target.innerHTML);
            name.blur()
        }
    }else{
        localStorage.setItem('name', e.target.innerHTML);
    }
}

function getFocus(){
    if(localStorage.getItem('focus') === null){
        focus.textContent = "";
    }else{
        focus.textContent = localStorage.getItem('focus')
    }
}

function setFocus(e){
    if(e.type === "keypress"){
        if(e.which === 13 || e.keyCode === 13){
            localStorage.setItem('focus', e.target.innerHTML);
            focus.blur()
        }
    }else{
        localStorage.setItem('focus', e.target.innerHTML);
    }
}

    name.addEventListener('keypress', setName);
    focus.addEventListener('blur', setFocus);
    name.addEventListener('blur', setName);
    focus.addEventListener('keypress', setFocus);


setInterval(setTime, 1000);
setTime();
getZero();
getBgGreet();
getName();
getFocus();
setName();
getFocus();