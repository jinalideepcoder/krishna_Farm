// for animation
function reveal() {
    var reveals = document.querySelectorAll('.topup');

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 0;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add('act');
        }
    }
}
window.addEventListener('scroll', reveal);
// navbar
// window.addEventListener('scroll', function () {
//     let nav = document.querySelector('nav');
//     nav.classList.toggle('sticky', window.scrollY > 50);
// });
window.onscroll = function () {
    getMyStickyHeader();
};
var navbar = document.getElementById('navbar_wrapper');
var stickyHeader = navbar.offsetTop;
function getMyStickyHeader() {
    if (window.pageYOffset >= 0) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

$(document).ready(function () {
    // menu click event
    $('.menubutton').click(function () {
        $(this).toggleClass('change');
        if ($(this).hasClass('change')) {
            $('.nav-wrap').addClass('change');
        } else {
            $('.nav-wrap').removeClass('change');
        }
    });

    $('section').click(function () {
        $('.menubutton').removeClass('change');
        $('.nav-wrap').removeClass('change');
    });

    $('.mobile-nav .nav-link').click(function () {
        $('.menubutton').removeClass('change');
        $('.nav-wrap').removeClass('change');
    });
});
