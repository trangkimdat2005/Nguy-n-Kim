function openPopup() {
    document.getElementById('popup').style.display = 'flex';
    document.body.classList.add("overflow-hidden");
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.body.classList.remove("overflow-hidden");
}
function chooseOption(option) {
    document.querySelector('.choose-btn').textContent = option;
    document.getElementById('popup').style.display = 'none';
    document.body.classList.remove("overflow-hidden");
}
function closePopupOnOutsideClick(event) {
    if (event.target.id === "popup") {
        closePopup();
    }
}

function showFind(){
    document.getElementById('popup-find-all').style.display='flex';
    document.body.classList.add("overflow-hidden");
}
function hideFind(){
    document.getElementById('popup-find-all').style.display='none';
    document.body.classList.remove("overflow-hidden");
}
function closePopupOnOutsideClickFind(event) {
    if (event.target.id === "popup-find-all") {
        document.getElementById('popup-find-all').style.display='none';
        document.body.classList.remove("overflow-hidden");
    }
}
var testEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var email = document.getElementById("Email").value;
function checkEmail(){
    var email = document.getElementById("Email").value;
    if (email == "" || testEmail.test(email) == false){
        document.getElementById('khonghople').style.display='flex';
        document.getElementById('Email').style.border='1px red solid';
    }
    else {
        document.getElementById('khonghople').style.display = 'none';
        document.getElementById('Email').style.border = 'none';
        
        document.getElementById("Email").value = "";
    }
}
function hideAlert(){
    document.getElementById('Email').style.border='0';
    document.getElementById('khongdungdinhdang').style.display='none';
    document.getElementById('khonghople').style.display='none';
}
// slide img 1
const rightbtn = document.querySelector('.fa-chevron-right');
const leftbtn = document.querySelector('.fa-chevron-left');
let index = 0;
const imgNumber = document.querySelectorAll('.slidebig_top img');
const slidebigTop = document.querySelector('.slidebig_top');
function moveSlide() {
    const width = slidebigTop.offsetWidth;
    slidebigTop.style.right = `${width * index}px`;
}
function autoSlide() {
    index = (index + 1) % imgNumber.length;
    moveSlide();
}
let autoSlideInterval = setInterval(autoSlide, 4000);
rightbtn.addEventListener("click", function() {
    clearInterval(autoSlideInterval);
    index = (index + 1) % imgNumber.length;
    moveSlide();
    autoSlideInterval = setInterval(autoSlide, 4000);
});
leftbtn.addEventListener("click", function() {
    clearInterval(autoSlideInterval); 
    index = index - 1 < 0 ? imgNumber.length - 1 : index - 1; 
    moveSlide();
    autoSlideInterval = setInterval(autoSlide, 4000);
});
// slide san pham
const rightbtn2 = document.querySelector('#btn-right1');
const leftbtn2 = document.querySelector('#btn-left1');
const imgNumber2 = document.querySelectorAll('.slide-sanpham .sanpham-khoi5');
let current2 = 0;
function moveSlide2() {
    document.querySelector(".slide-sanpham").style.right = current2 * 20 + "%";
}
function autoSlide2() {
    current2++;
    if (current2 > imgNumber2.length * 5 - 5) {
        current2 = 0;
    }
    moveSlide2();
}
let autoSlideInterval2 = setInterval(autoSlide2, 4000);
rightbtn2.addEventListener("click", function() {
    clearInterval(autoSlideInterval2);
    current2++;
    if (current2 > imgNumber2.length * 5 - 5) {
        current2 = 0;
    }
    moveSlide2();
    autoSlideInterval2 = setInterval(autoSlide2, 4000);
});
leftbtn2.addEventListener("click", function() {
    clearInterval(autoSlideInterval2);
    current2--;
    if (current2 < 0) {
        current2 = imgNumber2.length * 5 - 5;
    }
    moveSlide2();
    autoSlideInterval2 = setInterval(autoSlide2, 4000);
});

// slide uu dai 1
const rightbtn3 = document.querySelector('#btn-right2');
const leftbtn3 = document.querySelector('#btn-left2');
const imgNumber3 = document.querySelectorAll('.uudai-hinhanh .uudai-hinhanh-3');
let current3 = 0;
function moveSlide3() {
    document.querySelector(".uudai-hinhanh").style.right = current3 * 32 + "%";
}
function autoSlide3() {
    current3++;
    if (current3 > imgNumber3.length * 3 - 12) {
        current3 = 0;
    }
    moveSlide3();
}
let autoSlideInterval3 = setInterval(autoSlide3, 4000);
rightbtn3.addEventListener("click", function() {
    clearInterval(autoSlideInterval3);
    current3++;
    if (current3 > imgNumber3.length * 3 - 12) {
        current3 = 0;
    }
    moveSlide3();
    autoSlideInterval3 = setInterval(autoSlide3, 4000);
});
leftbtn3.addEventListener("click", function() {
    clearInterval(autoSlideInterval3);
    current3--;
    if (current3 < 0) {
        current3 = imgNumber3.length * 3 - 12;
    }
    moveSlide3();
    autoSlideInterval3 = setInterval(autoSlide3, 4000);
});

// slide uu dai 2
const rightbtn4 = document.querySelector('#btn-right3');
const leftbtn4 = document.querySelector('#btn-left3');
const imgNumber4 = document.querySelectorAll('.uudai-hinhanh .uudai-hinhanh-3');
let current4 = 0;
function moveSlide4() {
    document.querySelector(".uudai-bottom .uudai-hinhanh").style.right = current4 * 32 + "%";
}
function autoSlide4() {
    current4++;
    if (current4 > imgNumber4.length * 3 - 12) {
        current4 = 0;
    }
    moveSlide4();
}
let autoSlideInterval4 = setInterval(autoSlide4, 4000);
rightbtn4.addEventListener("click", function() {
    clearInterval(autoSlideInterval4);
    current4++;
    if (current4 > imgNumber4.length * 3 - 12) {
        current4 = 0;
    }
    moveSlide4();
    autoSlideInterval4 = setInterval(autoSlide4, 4000);
});
leftbtn4.addEventListener("click", function() {
    clearInterval(autoSlideInterval4);
    current4--;
    if (current4 < 0) {
        current4 = imgNumber4.length * 3 - 12;
    }
    moveSlide4();
    autoSlideInterval4 = setInterval(autoSlide4, 4000);
});
