const incrementBtn =document.getElementById("incrementBtn");
const decrementBtn =document.getElementById("decrementBtn");
const resetBtn =document.getElementById("resetBtn");
const counting=document.getElementById("counting");
let count =0;

incrementBtn.onclick = function() {
    count++; 
  counting.textContent = count;
}
decrementBtn.onclick = function() {
    count--; 
  counting.textContent = count;
}
resetBtn.onclick = function() {
    count=0; 
  counting.textContent = count;
}