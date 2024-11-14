// slide
const rightbtn = document.querySelector('.fa-chevron-right');
const leftbtn = document.querySelector('.fa-chevron-left');
const imgNumber = document.querySelectorAll('.slide-img');
let current=0;
rightbtn.addEventListener("click",function(){
    current++
    if(current>imgNumber.length-1){
        current=0
    }
    document.querySelector(".slide").style.right=current*100+"%"
})
leftbtn.addEventListener("click",function(){
    current--
    if(current<0){
        current=imgNumber.length-1
    }
    document.querySelector(".slide").style.right=current*100+"%"
})
// locate
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
// find

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
// nut tro len dau trang
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function returnTop(){
    const kiemtravitri=document.getElementById('trovedau');
    if(window.scrollY===0){
        kiemtravitri.style.display='none'
    }
    else{
        kiemtravitri.style.display='flex'
    }
}
window.addEventListener('scroll', returnTop);
returnTop();