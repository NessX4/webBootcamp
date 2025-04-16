const p1btn = document.querySelector('#p1btn');
const p2btn = document.querySelector('#p2btn');
const resetbtn = document.querySelector('#resetbtn');

const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');

const winingScoreInput = document.querySelector('#playto')

let p1score = 0;
let p2score = 0;
let winingScore = 3;
let isGameOver = false;

p1btn.addEventListener('click', function(){
    if(!isGameOver){
        p1score += 1;
        if (p1score === winingScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success');  
            p2Display.classList.add('has-text-danger');   
            p1btn.disabled = true;
            p2btn.disabled = true;                 
        }
        p1Display.textContent = p1score;
    }    
});

p2btn.addEventListener('click', function(){
    if(!isGameOver){
        p2score += 1;
        if (p2score === winingScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success');
            p1Display.classList.add('has-text-danger');
            p1btn.disabled = true;
            p2btn.disabled = true; 
        }
        p2Display.textContent = p2score;
    }   
});

winingScoreInput.addEventListener('change', function(){
    winingScore = parseInt(this.value);
    reset();
});

resetbtn.addEventListener('click', reset);

function reset(){
    isGameOver = false;
    p1score = 0;
    p2score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger');
    p2Display.classList.remove('has-text-success', 'has-text-danger');
    p1btn.disabled = false;
    p2btn.disabled = false; 
};