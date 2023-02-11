

// --------------clear radio btn fun start------------------------
function clearRadioButtons(){
    var ele = document.querySelectorAll("input[type=radio]");
    for(var i=0;i<ele.length;i++){
        ele[i].checked = false;
    }
}
// --------------clear radio btn fun end------------------------





// -----------------------paragram More fun start-------------------------
function readMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more <i class='fa-solid fa-caret-down'></i>";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less <i class='fa-solid fa-caret-up'></i>";
        moreText.style.display = "inline";
    }
}
// -----------------------paragram More fun end-------------------------





// ---------------------loader function start-------------------
setTimeout(function load(){
    var x = document.getElementById('loader');
    x.classList.add('hidden');
}, 2000);
// ---------------------loader function start-------------------





// -------------------onclick img change fun start--------------
function get_src(element){
    var main_img_src = document.getElementById("main-poster");
    main_img_src.src=element.src;
}
// --------------------onclick img change fun end----------------------






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








// ---------------------select language function start---------------
const dropdownRadioButton = document.getElementById('dropdownRadioButton');
function getlang(element){
    var x = element.innerText;
    dropdownRadioButton.innerHTML = (x + "<i class='fa-solid fa-sort-down pl-2 pb-2 text-syellow'></i>");
}
// --------------------select language function end---------------



// --------------------scroll budget safari fun start---------------
function scrolRight(){
    document.getElementById('budget_safari_event').scrollBy(300, 0);
};
function scrolLeft(){
    document.getElementById('budget_safari_event').scrollBy(-300, 0);
};
// --------------------scroll budget safari fun end---------------





