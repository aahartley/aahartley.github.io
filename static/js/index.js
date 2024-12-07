window.HELP_IMPROVE_VIDEOJS = false;

var INTERP_BASE = "./static/interpolation/";
var NUM_INTERP_FRAMES = 11;

var interp_images = [];
var interp_images2 = [];
var interp_images3 = [];
var interp_images4 = [];
var interp_images5 = [];
var interp_images6 = [];
var interp_images7 = [];
var interp_images8 = [];
var interp_images9 = [];
var interp_images10 = [];
var interp_images11 = [];
var interp_images12 = [];

function preloadInterpolationImages() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + "cat_res64_gwn" + '/' + 'gwn_img00000_step'+String(i*25) + '.png';
    interp_images[i] = new Image();
    interp_images[i].src = path;
    interp_images[i].height = 220;
    interp_images[i].width = 220;
  }
}

function preloadInterpolationImages2() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    // var path = INTERP_BASE + '/' + String(i).padStart(6, '0') + '.jpg';
    var path = INTERP_BASE + "cat_res64_gwn2gbn" + '/' + 'gwn2gbn_img00000_step'+String(i*25) + '.png';
    
    interp_images2[i] = new Image();
    interp_images2[i].src = path;
    interp_images2[i].height = 220;
    interp_images2[i].width = 220;
  }
}


function preloadInterpolationImages3() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + "cat_res64_rtob_5050" + '/' + 'RtoB_img00000_step'+String(i*25) + '.png';
    interp_images3[i] = new Image();
    interp_images3[i].src = path;
    interp_images3[i].height = 220;
    interp_images3[i].width = 220;
  }
}

function preloadInterpolationImages4() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + "cat_res64_randb_quad" + '/' + 'RandBWhite_img00000_step'+String(i*25) + '.png';
    interp_images4[i] = new Image();
    interp_images4[i].src = path;
    interp_images4[i].height = 220;
    interp_images4[i].width = 220;
  }
}


function preloadInterpolationImages5() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + "cat_res64_perlin3" + '/' + 'perlin_img00000_step'+String(i*25) + '.png';
    interp_images5[i] = new Image();
    interp_images5[i].src = path;
    interp_images5[i].height = 220;
    interp_images5[i].width = 220;
  }
}

function preloadInterpolationImages6() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + "cat_res64_perlin6" + '/' + 'perlin_img00000_step'+String(i*25) + '.png';
    interp_images6[i] = new Image();
    interp_images6[i].src = path;
    interp_images6[i].height = 220;
    interp_images6[i].width = 220;
  }
}


function preloadInterpolationImages7() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + "cat_res128_gwn" + '/' + 'gwn_img00000_step'+String(i*25) + '.png';
    interp_images7[i] = new Image();
    interp_images7[i].src = path;
    interp_images7[i].height = 220;
    interp_images7[i].width = 220;
  }
}

function preloadInterpolationImages8() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + "cat_res128_gwn2gbn" + '/' + 'gwn2gbn_img00000_step'+String(i*25) + '.png';
    interp_images8[i] = new Image();
    interp_images8[i].src = path;
    interp_images8[i].height = 220;
    interp_images8[i].width = 220;
  }
}



function preloadInterpolationImages9() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + "cat_res128_rtob_2080" + '/' + 'RtoB_img00000_step'+String(i*25) + '.png';
    interp_images9[i] = new Image();
    interp_images9[i].src = path;
    interp_images9[i].height = 220;
    interp_images9[i].width = 220;
  }
}

function preloadInterpolationImages10() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + "cat_res128_rtob_5050" + '/' + 'RtoB_img00000_step'+String(i*25) + '.png';
    interp_images10[i] = new Image();
    interp_images10[i].src = path;
    interp_images10[i].height = 220;
    interp_images10[i].width = 220;
  }
}
function preloadInterpolationImages11() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + "cat_res128_randb_linear" + '/' + 'RandB_img00000_step'+String(i*25) + '.png';
    interp_images11[i] = new Image();
    interp_images11[i].src = path;
    interp_images11[i].height = 220;
    interp_images11[i].width = 220;
  }
}
function preloadInterpolationImages12() {
  for (var i = 0; i < NUM_INTERP_FRAMES; i++) {
    var path = INTERP_BASE + "cat_res128_randb_quad" + '/' + 'RandBWhite_img00000_step'+String(i*25) + '.png';
    interp_images12[i] = new Image();
    interp_images12[i].src = path;
    interp_images12[i].height = 220;
    interp_images12[i].width = 220;
  }
}

function setInterpolationImage(i) {
  var image = interp_images[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper').empty().append(image);
}

function setInterpolationImage2(i) {
  var image = interp_images2[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper2').empty().append(image);
}

function setInterpolationImage3(i) {
  var image = interp_images3[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper3').empty().append(image);
}

function setInterpolationImage4(i) {
  var image = interp_images4[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper4').empty().append(image);
}

function setInterpolationImage5(i) {
  var image = interp_images5[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper5').empty().append(image);
}

function setInterpolationImage6(i) {
  var image = interp_images6[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper6').empty().append(image);
}

function setInterpolationImage7(i) {
  var image = interp_images7[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper7').empty().append(image);
}

function setInterpolationImage8(i) {
  var image = interp_images8[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper8').empty().append(image);
}

function setInterpolationImage9(i) {
  var image = interp_images9[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper9').empty().append(image);
}

function setInterpolationImage10(i) {
  var image = interp_images10[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper10').empty().append(image);
}
function setInterpolationImage11(i) {
  var image = interp_images11[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper11').empty().append(image);
}
function setInterpolationImage12(i) {
  var image = interp_images12[i];
  image.ondragstart = function() { return false; };
  image.oncontextmenu = function() { return false; };
  $('#interpolation-image-wrapper12').empty().append(image);
}

$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");

    });

    var options = {
			slidesToScroll: 1,
			slidesToShow: 3,
			loop: true,
			infinite: true,
			autoplay: false,
			autoplaySpeed: 3000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);

    // Loop on each carousel initialized
    for(var i = 0; i < carousels.length; i++) {
    	// Add listener to  event
    	carousels[i].on('before:show', state => {
    		console.log(state);
    	});
    }

    // Access to bulmaCarousel instance of an element
    var element = document.querySelector('#my-element');
    if (element && element.bulmaCarousel) {
    	// bulmaCarousel instance is available as element.bulmaCarousel
    	element.bulmaCarousel.on('before-show', function(state) {
    		console.log(state);
    	});
    }

    /*var player = document.getElementById('interpolation-video');
    player.addEventListener('loadedmetadata', function() {
      $('#interpolation-slider').on('input', function(event) {
        console.log(this.value, player.duration);
        player.currentTime = player.duration / 100 * this.value;
      })
    }, false);*/
    preloadInterpolationImages();
    $('#interpolation-slider').on('input', function(event) {
      setInterpolationImage(this.value);
    });
    setInterpolationImage(0);
    $('#interpolation-slider').prop('max', NUM_INTERP_FRAMES - 1);

    preloadInterpolationImages2();
    $('#interpolation-slider2').on('input', function(event) {
      setInterpolationImage2(this.value);
    });
    setInterpolationImage2(0);
    $('#interpolation-slider2').prop('max', NUM_INTERP_FRAMES - 1);
    
    // 

    preloadInterpolationImages3();
    $('#interpolation-slider3').on('input', function(event) {
      setInterpolationImage3(this.value);
    });
    setInterpolationImage3(0);
    $('#interpolation-slider3').prop('max', NUM_INTERP_FRAMES - 1);

    preloadInterpolationImages4();
    $('#interpolation-slider4').on('input', function(event) {
      setInterpolationImage4(this.value);
    });
    setInterpolationImage4(0);
    $('#interpolation-slider4').prop('max', NUM_INTERP_FRAMES - 1);

    // 

    preloadInterpolationImages5();
    $('#interpolation-slider5').on('input', function(event) {
      setInterpolationImage5(this.value);
    });
    setInterpolationImage5(0);
    $('#interpolation-slider5').prop('max', NUM_INTERP_FRAMES - 1);

    preloadInterpolationImages6();
    $('#interpolation-slider6').on('input', function(event) {
      setInterpolationImage6(this.value);
    });
    setInterpolationImage6(0);
    $('#interpolation-slider6').prop('max', NUM_INTERP_FRAMES - 1);


    // 

    preloadInterpolationImages7();
    $('#interpolation-slider7').on('input', function(event) {
      setInterpolationImage7(this.value);
    });
    setInterpolationImage7(0);
    $('#interpolation-slider7').prop('max', NUM_INTERP_FRAMES - 1);

    preloadInterpolationImages8();
    $('#interpolation-slider8').on('input', function(event) {
      setInterpolationImage8(this.value);
    });
    setInterpolationImage8(0);
    $('#interpolation-slider8').prop('max', NUM_INTERP_FRAMES - 1);


    // 

    preloadInterpolationImages9();
    $('#interpolation-slider9').on('input', function(event) {
      setInterpolationImage9(this.value);
    });
    setInterpolationImage9(0);
    $('#interpolation-slider9').prop('max', NUM_INTERP_FRAMES - 1);

    preloadInterpolationImages10();
    $('#interpolation-slider10').on('input', function(event) {
      setInterpolationImage10(this.value);
    });
    setInterpolationImage10(0);
    $('#interpolation-slider10').prop('max', NUM_INTERP_FRAMES - 1);

    preloadInterpolationImages11();
    $('#interpolation-slider11').on('input', function(event) {
      setInterpolationImage11(this.value);
    });
    setInterpolationImage11(0);
    $('#interpolation-slider11').prop('max', NUM_INTERP_FRAMES - 1);

    preloadInterpolationImages12();
    $('#interpolation-slider12').on('input', function(event) {
      setInterpolationImage12(this.value);
    });
    setInterpolationImage12(0);
    $('#interpolation-slider12').prop('max', NUM_INTERP_FRAMES - 1);

    bulmaSlider.attach();

})
