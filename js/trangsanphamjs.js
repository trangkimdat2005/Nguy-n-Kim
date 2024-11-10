
// slide-big
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
// slide2
const right2btn = document.querySelector('#btn2-right');
const left2btn = document.querySelector('#btn2-left');
const img2Number = document.querySelectorAll('.slide-item-khoi5 .items_quat20cai');
let current2 = 0;
function moveRight() {
    current2++;
    if (current2 > img2Number.length - 45) {
        current2 = 0;
    }
    document.querySelector(".slide5-item").style.right = current2 * 20 + "%";
}
function moveLeft() {
    current2--;
    if (current2 < 0) {
        current2 = img2Number.length - 5;
    }
    document.querySelector(".slide5-item").style.right = current2 * 20 + "%";
}
right2btn.addEventListener("click", moveRight);
left2btn.addEventListener("click", moveLeft);
setInterval(moveRight, 4000);
// slide3
const right3btn = document.querySelector('#btn3-right');
const left3btn = document.querySelector('#btn3-left');
const img3Number = document.querySelectorAll('.sanphamdanhrieng .slide-item-khoi5 .items_quat20cai');
let current3 = 0;
console.log(img3Number)

function moveRight3() {
    current3++;
    console.log(current3)
    if (current3 > img3Number.length - 5) {
        current3 = 0;
    }
    document.querySelector(".sanphamdanhrieng .slide5-item").style.right = current3 * 20 + "%";
}

function moveLeft3() {
    current3--;
    if (current3 < 0) {
        current3 = img3Number.length - 5;
    }
    document.querySelector(".sanphamdanhrieng .slide5-item").style.right = current3 * 20 + "%";
}

right3btn.addEventListener("click", moveRight3);
left3btn.addEventListener("click", moveLeft3);
setInterval(moveRight3, 4000);

// slide4
const right4btn = document.querySelector('#btn4-right');
const left4btn = document.querySelector('#btn4-left');
const img4Number = document.querySelectorAll('.sanphamdaxem .slide-item-khoi5 .items_quat20cai');
let current4 = 0;

function moveRight4() {
    current4++;
    if (current4 > img4Number.length - 5) {
        current4 = 0;
    }
    document.querySelector(".sanphamdaxem .slide5-item").style.right = current4 * 20 + "%";
}

function moveLeft4() {
    current4--;
    if (current4 < 0) {
        current4 = img4Number.length -5;
    }
    document.querySelector(".sanphamdaxem .slide5-item").style.right = current4 * 20 + "%";
}
right4btn.addEventListener("click", moveRight4);
left4btn.addEventListener("click", moveLeft4);
setInterval(moveRight4, 4000);

// dia chi
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
// tim kiem

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
// tai khoan
function alertCall(){
    var t=confirm("https://www.nguyenkim.com wants to open this application.")
    if (t) {
        window.location.href="index.html"
    } else {
        alert("You choose cancel!");
    }
}
// email 

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

function hienMucLuc(){
    document.getElementsByClassName('thongtinmucluc_an')[0].style.display='block'
    document.getElementsByClassName('thongtinmucluc_hien')[0].style.display='none'
    document.getElementsByClassName('hienmucluc')[0].style.display='none'
}