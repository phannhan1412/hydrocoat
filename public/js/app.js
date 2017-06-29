/**
 * Created by nhan.phan on 6/28/2017.
 */
$(document).ready(function () {
    $('.fa-angle-down').click(function(){
        $(this).toggleClass("fa-angle-up");
        $(this).toggleClass("fa-angle-down");
    });
    $('body').scrollspy({target: ".navbar", offset: 50});

    $("#navbar a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                window.location.hash = hash;
            });
        }
    });
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 650) {
            $(".navbar").addClass("bg-active");
            $(".navbar-brand img").attr("src","public/images/logo-active.png");
        } else {
            $(".navbar").removeClass("bg-active");
            $(".navbar-brand img").attr("src","public/images/logo.png");
        }
    });
})