const sidebar = $('#sidebar');
const content = $('.side-content');
const navButton = $('.sidebar-button');
const profile = $('.log-register');
const rightPanel = $('.dropdown_menu');
const theme = $('.toggle-theme');

content.on('click', function(){
    content.removeClass('faded'); // Fadeout the content
    sidebar.removeClass('active');
    navButton.removeClass('change');
});

navButton.on('click', function(){
    sidebar.toggleClass('active'); // Show or hide sidebar
    content.toggleClass('faded');
    navButton.toggleClass('change');
});


// profile.on('click', function(){
//     rightPanel.toggleClass('open');
// });

profile.on('click', function(){
    rightPanel.slideToggle();
});



// switch theme dark/light
theme.on('click', function(){
    sidebar.toggleClass('switch-mode');
    $('.nav-link').toggleClass('theme');
    theme.toggleClass('btn-tog');
    $('.lead').toggleClass('first-active');
    $('.webdev').toggleClass("webdev-active");
    $('.btn-footer').toggleClass('btn-footer-theme');
    rightPanel.toggleClass('drop-theme');
    profile.toggleClass('log-register-theme')
    $('.sidebars').toggleClass('sidebar-active');
    $('.card-personal').toggleClass('card-personal-theme');
    $('.sidename').toggleClass('sidename-theme');

    // switches the favicon
    if( $('.favicon-header').hasClass('favicon-header-theme') ){
        $('.favicon-header').attr("src","images/favicon32.png")
        $('.favicon-header').removeClass('favicon-header-theme');
    }else{
        $('.favicon-header').attr("src","images/re-favicon32.png")
        $('.favicon-header').addClass('favicon-header-theme');
    }
});


// typing animation - npm install typed.js
var typed = new Typed('.webdev', {
    strings: ['Web Development'],
    typeSpeed: 50,
});
