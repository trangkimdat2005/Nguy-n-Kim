$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay:true,
        margin: 5,
        nav: true,
        dots: false,
        responsive: {
            0: {
                items: 5
            },
            600: {
                items: 5
            },
            1000: {
                items: 5
            }
        }
    });
    $(".hienmucluc").click(function(){
        $(".thongtinmucluc_an").show();
        $(this).hide();
        $(".thongtinmucluc_hien").hide();
    });
});