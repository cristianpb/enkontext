$(document).ready(function() {

/*=====================================
    Page loader Out / Main page In
=====================================*/
 $('.page-loader').fadeToggle(1500);
	setTimeout(function () {
     	$('.main').addClass('scale');
    },0);
	setTimeout(function () {
     	$('.main').removeClass('scale');
    },3000);
       
/*=====================================
    Particles background
=====================================*/
	particlesJS.load('particles-js', 'js/particles.json', function() {
		console.log('callback - particles.js config loaded');
	});

});

