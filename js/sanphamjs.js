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
function showThemTinhNang(){
    document.getElementById('themcactinhnangan').style.display='flex';
    document.getElementById('themtinhnang').style.display='none';
}
function alertCall() {
    const userResponse = confirm("https://www.nguyenkim.com muốn mở ứng dụng này.\n\nBạn có muốn tiếp tục không?");
    if (userResponse) {
        window.location.href = "index.html";
    }
}
function showGuiBinhLuan(){
    document.getElementById('guibinhluan').style.display='flex';
}
function checkBinhLuan() {
    var binhluan = document.getElementsByClassName("nhapbinhluan")[0].value;
    var name = document.getElementById("HoTen").value;
    var phone = document.getElementById("sdt").value;
    var testPhone = /^0[0-9]{9,10}$/;
    if (binhluan===''){
        document.getElementById('alertCmt').style.display = 'flex';
        document.getElementsById('nhapbinhluan').style.border=" 1px red solid"
    } else if (name === '') {
        document.getElementById('alertName').style.display = 'flex';
        document.getElementById('HoTen').style.border=" 1px red solid"
    } else if (phone === '' || !testPhone.test(phone)) {
        document.getElementById('alertSDT').style.display = 'flex';
        document.getElementById('sdt').style.border=" 1px red solid"
    } else {
        document.getElementById('alertSDT').style.display = 'none';
        document.getElementById('alertName').style.display = 'none';
        document.getElementById('alertCmt').style.display = 'none';
        document.getElementById('nhapbinhluan').style.border='none';
        document.getElementById('HoTen').style.border='none';
        document.getElementById('sdt').style.border='none';
        
        alert("Đã đăng bình luận thành công");
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
$(document).ready(function() {
    $(document).ready(function() {
        $('.thongso_right_bottom').click(function() {
            $('#overlay').fadeIn();
            $('#popupthongso').fadeIn();
        });
        $('#close-popup').click(function() {
            $('#overlay').fadeOut();
            $('#popupthongso').fadeOut();
        });
        $('#overlay').click(function() {
            $('#overlay').fadeOut();
            $('#popupthongso').fadeOut();
        });
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});