// ----------------increment or decrement fun start----------------------
let count1 = 1;
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");
const totalCount1 = document.getElementById("total-count1");
totalCount1.innerHTML = count1;
const handleDecrement = () => {
    if(count1 > 1){
        count1--;
        totalCount1.innerHTML = count1;
    }};
const handleIncrement = () => {
    if(count1 < 99){
        count1++;
        totalCount1.innerHTML = count1;
    }};
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);
// ---------------increment or decrement fun end-----------------
