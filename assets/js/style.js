
function clearRadioButtons(){
    var ele = document.querySelectorAll("input[type=radio]");
    for(var i=0;i<ele.length;i++){
        ele[i].checked = false;
    }
    }


function readMore() {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
    
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
    function readMore2() {
        var dots = document.getElementById("dots2");
        var moreText = document.getElementById("more2");
        var btnText = document.getElementById("myBtn2");
        
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
    