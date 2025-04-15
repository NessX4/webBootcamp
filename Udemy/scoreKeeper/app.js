const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

let p1score = 0;
let p2score = 0;
let winingScore = 5;
let isGameOver = false;

p1btn.addEventListener('click', function(){
    if(!isGameOver){
        p1score += 1;
        if (p1score === winingScore) {
            isGameOver = true;                      
        }
        p1Display.textContent = p1score;
    }    
})

p2btn.addEventListener('click', function(){
    if(!isGameOver){
        p2score += 1;
        if (p2score === winingScore) {
            isGameOver = true;                      
        }
        p2Display.textContent = p2score;
    }   
})