'use strict'

{
  const words =[
    'apple',
    'sky',
    'blue',
    'middle',
    'set',
  ]
  let word =words[Math.floor(Math.random() * words.length)];
  let loc = 0;
  let score = 0;
  let miss = 0;
  const timeLimit = 3 * 1000;

  const target = document.getElementById('target');
  const scoreLabel = document.getElementById('score');
  const missLabel = document.getElementById('miss');
  const timerLabel = document.getElementById('timer');
  let startTime;
  
  

  function updateTarget(){
    let placeholder = '';
    for (let i = 0; i<loc; i++){
      placeholder += '_';
    }
    target.textContent = placeholder +word.substring(loc);
  };

  function updateTimer(){
    const timeLeft = startTime + timeLimit - Date.now();
    timerLabel.textContent = (timeLeft/1000).toFixed(2);

    const timeoutId = setTimeout(()=>{
      updateTimer();
    },10);

    if (timeLeft < 0){
    clearTimeout(timeoutId);
    alert('Game Over')
    }
  }
  window.addEventListener('click',()=>{
    target.textContent = word;
    startTime = Date.now();
    updateTimer();
  });

window.addEventListener('keydown',e=>{
 if (e.key === word[loc]){
   loc++;
   if(loc === word.length){
    word =words[Math.floor(Math.random() * words.length)];
    loc = 0; 
   }
   updateTarget();
   score++;
   scoreLabel.textContent = score;
 }else{
   console.log('miss');
   miss++;
   missLabel.textContent = miss;
 }
 
});


}