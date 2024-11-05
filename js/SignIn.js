function CheckThongTin() {
    // var name = document.getElementById("HoTen").value;
    // var phone = document.getElementById("SoDienThoai").value;
    // var testPhone = /^(\+84|0)\d{9}$/;
    var email = document.getElementById("Email").value;
    var testEmail =/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var pass = document.getElementById("MatKhau").value;
    let k=true;
    // if (name == "" || !name.includes(" ")) {
    //     document.getElementById("errol_Name").style.display='flex'
    //     document.getElementById("HoTen").classList.add('errol')
    //     k=false
    // }
    // if (phone == "" || !testPhone.test(phone)) {
    //     document.getElementById("errol_SDT").style.display='flex'
    //     document.getElementById("SoDienThoai").classList.add('errol')
    //     k=false

    // }
    if (email == "" || testEmail.test(email) == false) {
        document.getElementById("errol_Email").style.display='flex'
        document.getElementById("Email").classList.add('errol')
        k=false
    }
    if (pass == "" || pass.includes(" ") == true || pass.length < 5) {
        document.getElementById("errol_MK").style.display='flex'
        document.getElementById("MatKhau").classList.add('errol')
        k=false


    }
    if(k){
        alert("Đăng kí thành công")
        document.getElementById("errol_Name").style.display='none'
        document.getElementById("HoTen").classList.remove('errol')
        document.getElementById("errol_SDT").style.display='none'
        document.getElementById("SoDienThoai").classList.remove('errol')
        document.getElementById("errol_Email").style.display='none'
        document.getElementById("Email").classList.remove('errol')
        document.getElementById("errol_MK").style.display='m=none'
        document.getElementById("MatKhau").classList.remove('errol')
        document.getElementById("errol_MKL").style.display='none'
        document.getElementById("MatKhauLai").classList.remove('errol')
    }
  }