let playing = 0;
let order = [];
let clicks = [];
let counter = 1;
let clickedCounter = 0;
let points = 0; 

const correct = window.document.querySelector("#correct");
const wrong = window.document.querySelector("#wrong");
 
const start = window.document.querySelector("#start");
const score = window.document.querySelector("#score");
const point = window.document.querySelector("#points");
const blue = window.document.querySelector("#blue");        /*1*/
const red = window.document.querySelector("#red");          /*3*/
const green = window.document.querySelector("#green");      /*4*/
const yellow = window.document.querySelector("#yellow");    /*2*/
const bluec = 1;
const yellowc = 2;
const redc = 3;
const greenc = 4;

start.onclick = () =>{
    if(playing){
        location.reload("true");
    }
    else{
        startGame();
        generateColors();
    }
}

let startGame = () => {
    playing = 1;
    start.innerHTML = "Reset";
    score.style.visibility = "visible";
}

let generateColors = () =>{
    let time = 0;
     for(let i=0;i<counter;i+=1){
         console.log("GenerateColors");
            order.push(Math.round((1+3*Math.random())));
            setTimeout(()=>{
                glowIn(order[i]);
            },time);
            setTimeout(()=>{
                glowOut(order[i]);   
            },time + 800);
            time+=1000;
     }
     counter+=1;
}

let glowIn = (color) =>{
    switch(color){
        case 1:
            blue.style.boxShadow = `0 0 10px 1px blue, 0 0 30px rgb(39, 39, 255)`;
            break;
        case 2:
            yellow.style.boxShadow = `0 0 10px 1px yellow, 0 0 30px rgb(255, 255, 123)`;
            break;
        case 3:
            red.style.boxShadow = `0 0 10px 1px red, 0 0 30px rgb(233, 60, 60)`;
            break;
        case 4:
            green.style.boxShadow = `0 0 10px 1px green, 0 0 30px rgb(67, 126, 67)`;
            break;
    }
}

let glowOut = (color) =>{
    switch(color){
        case 1:
            blue.style.boxShadow = `-2px -2px 5px 0px`;
            break;
        case 2:
            yellow.style.boxShadow = `2px -2px 5px 0px`;
            break;
        case 3:
            red.style.boxShadow = `-2px 2px 5px 0px`;
            break;
        case 4:
            green.style.boxShadow = `2px 2px 5px 0px`;
            break;
    }
}

 let clicked = (click) =>{
    clicks.push(click);
    if(clicks[clickedCounter] == order[clickedCounter]){
        clickedCounter+=1;
        correct.style.display = "block";
        setTimeout(()=>{
            correct.style.display = "none";
        },100);
        if((clickedCounter+1) == counter){
            clicks = [];
            clickedCounter = 0;
            console.log(clicks);
            points += 1;
            point.innerHTML = points;

            setTimeout(()=>{
                alert("GOOD JOB");
            },50);
            setTimeout(()=>{
                generateColors();
            },60);
        }
    }else{
        wrong.style.display = "block";
        setTimeout(()=>{
            alert(`GAME OVER: YOUR SCORE IS: ${points}`);
        },100);
        setTimeout(()=>{
            location.reload("true");
        },150);
        
    }
 }

blue.addEventListener('click', clicked.bind('click', bluec));
green.addEventListener('click', clicked.bind('click', greenc));
red.addEventListener('click', clicked.bind('click', redc));
yellow.addEventListener('click', clicked.bind('click', yellowc));
