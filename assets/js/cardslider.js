
var radios = document.getElementsByName("testimonial");
var currentRadioIndex = 0;

function selectNextRadio() {
  radios[currentRadioIndex].checked = false;
  currentRadioIndex = (currentRadioIndex + 1) % radios.length;
  radios[currentRadioIndex].checked = true;
}

setInterval(selectNextRadio, 2000);

var radios2 = document.getElementsByName("testimonial2");
var currentRadioIndex2 = 0;

function selectNextRadio2() {
  radios2[currentRadioIndex2].checked = false;
  currentRadioIndex2 = (currentRadioIndex2 + 1) % radios2.length;
  radios2[currentRadioIndex2].checked = true;
}

setInterval(selectNextRadio2, 2000);

var radios3 = document.getElementsByName("testimonial3");
var currentRadioIndex3 = 0;

function selectNextRadio3() {
  radios3[currentRadioIndex3].checked = false;
  currentRadioIndex3 = (currentRadioIndex3 + 1) % radios3.length;
  radios3[currentRadioIndex3].checked = true;
}

setInterval(selectNextRadio3, 2000);