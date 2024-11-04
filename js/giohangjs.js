function checkValue() {
    var checkbox = document.getElementById('checkdongy');
    if (checkbox.checked) {
      document.getElementsByClassName('xuathoadon')[0].style.display="flex"
    } else {
      document.getElementsByClassName('xuathoadon')[0].style.display="none"
    }
}
// check ho ten
function CheckThongTin() {
    var name = document.getElementById("HoTen").value;
    var phone = Number(document.getElementById("SoDienThoai").value);
    var email = document.getElementById("Email").value;
    var testEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var soNha=document.getElementById("sonha").value
    if (name == "")
        alert("Họ tên không được rỗng");
    else if (phone == "" || Number.isInteger(phone) == false)
        alert("Định dạng số điện thoại sai");
    else if (email == "" || testEmail.test(email) == false)
        alert("Định dạng email sai");
    else if(soNha=="")
        alert("Số nhà không được để trống")
    else {
        alert("Gửi thành công");
    }
}
// thay doi
function thayDoiLeft(){
    var element=document.getElementById('btn-left')
    element.classList.add("active")
    var element=document.getElementById('btn-right')
    element.classList.remove("active")
    document.getElementsByClassName('dienthongtin-an')[0].style.display="flex"
    document.getElementsByClassName('dienthongtin-hien')[0].style.display="none"
}
function thayDoiRight(){
    var element=document.getElementById('btn-right')
    element.classList.add("active")
    var element=document.getElementById('btn-left')
    element.classList.remove("active")
    document.getElementsByClassName('dienthongtin-hien')[0].style.display="flex"
    document.getElementsByClassName('dienthongtin-an')[0].style.display="none"
}