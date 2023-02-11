
// ---------------increment or decrement event and payment fun start------------
var count = 1;
const totalCount = document.getElementById("total-count");
totalCount.innerHTML = count;
function Decrement(){
    if(count > 1){
        count--;
        totalCount.innerHTML = count;
        addPersonEvent();
    }};
function Increment(){
    if(count < 99){
        count++;
        totalCount.innerHTML = count;
        addPersonEvent();
    }};
function addPersonEvent(){
    const event_price = parseInt(document.getElementById('event_price').innerText);
    const total_price = event_price*count;
    const total_price_event = document.getElementById('total_price_event');
    total_price_event.innerText = total_price;
    const form_sub_total = document.getElementById('form_sub_total');
    form_sub_total.innerText = total_price.toFixed(2);
    const processing_fee = document.getElementById('processing_fee');
    const fee = (total_price/100)*10;
    processing_fee.innerText = fee.toFixed(2);
    const form_total = document.getElementById('form_total');
    form_total.innerText = (total_price+fee).toFixed(2);
    const Btn_total = document.getElementById('Btn_total');
    Btn_total.innerText = (total_price+fee).toFixed(2);
}
addPersonEvent();
// ------------increment or decrement event and payment fun end------------------