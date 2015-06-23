/*!
 * Theme v1.0.0
 * Copyright 2015-2016 Theemon.com
 */
$(document).ready(function() {
	//Header Option
	$('#header').addClass('intelligent')//Choose Here Class Name (normal or fixed or intelligent);

	//Transition Effect Option
	$('.animate-effect').addClass('anim-section')//Add Or Remove Class (anim-section)

	index = 0;

	if ($('.banner-slider').length) {
		$('.tp-banner').show().revolution({

			navigationType : "bullet"
		});
	}
	//============
	$('#header .search').on('click', function(e) {
		e.stopPropagation();
		$('.header-search-box').toggleClass('open-field');
	});

	$(document).on('click', function(e) {

		$('.header-search-box').removeClass('open-field');

	});
	//owl carousel js write here
	if ($('#owl-demo').length) {

		$("#owl-demo").owlCarousel({

			autoPlay : 3000, //Set AutoPlay to 3 seconds

			items : 4,
			itemsDesktop : [1199, 3],
			itemsDesktopSmall : [979, 3]

		});
	}
	if ($('#owl-demo1').length) {
		$("#owl-demo1").owlCarousel({

			autoPlay : 3000, //Set AutoPlay to 3 seconds

			items : 2,
			itemsDesktop : [1199, 1],
			itemsDesktopSmall : [979, 1]

		});
	}
	if ($('#owl-demo2').length) {
		$("#owl-demo2").owlCarousel({

			autoPlay : 3000, //Set AutoPlay to 3 seconds

			items : 1,
			itemsDesktop : [1199, 1],
			itemsDesktopSmall : [979, 1],
			itemsTablet : [768, 1]

		});
	}

	if ($('#owl-demo-home').length) {
		$("#owl-demo-home").owlCarousel({

			autoPlay : 30000, //Set AutoPlay to 3 seconds

			items : 1,
			itemsDesktop : [1199, 1],
			itemsDesktopSmall : [979, 1],
			itemsTablet : [768, 1]

		});
	}

	//owl carousel js end here
	if ($('#owl-two').length) {
		$("#owl-two").owlCarousel({

			navigation : true, // Show next and prev buttons
			slideSpeed : 600,
			paginationSpeed : 600,
			singleItem : true,
			autoPlay : 2500,
			stopOnHover : true,
			autoHeight : true,

		});

	}

	//============
	// js for tag-widget start here
	$('.tag-widget-list li').click(function() {

		$('.tag-widget-list li.active').removeClass('active');
		$(this).addClass('active');

	});
	// js for tag-widget End here
	// js for catogery-widget Start here
	$('.page-widget').find('.nav-pills > li > .sub').click(function() {
		$('.nav-pills > li.active').removeClass('active');
		$(this).parent('li').addClass('active');
	})
	// js for catogery-widget End here
	//============

	// js for page-widget Start here
	$('.panel-heading').find('.panel-title > a').click(function() {
		$('.panel-title a.active').removeClass('active');
		$(this).addClass('active');
	})
	if ($('#grid').length) {
		var $grid = $('#grid'), $sizer = $grid.find('.shuffle__sizer');

		$grid.shuffle({
			itemSelector : '.picture-item',
			sizer : $sizer
		});
	}
	// js for page-widget End here

	//JS FOR SLIDE TOGGLE

	$('.toggle-head.active').next('.toggle-body').show();
	$('.toggle-head a').click(function() {

		$(this).parents('.toggle-head').next().slideToggle('slow');
		if ($(this).parents('.toggle-head').hasClass('active')) {
			$(this).parents('.toggle-head').removeClass('active')
		} else {
			$(this).parents('.toggle-head').addClass('active')
		}
	});

	//this function only for Desktop view
	isMobile = navigator.userAgent.match(/(iPhone|iPod|Android|BlackBerry|iPad|IEMobile|Opera Mini)/);
	if (!isMobile) {
		var animSection = function() {
			$('.anim-section').each(function() {
				if ($(window).scrollTop() > ($(this).offset().top - $(window).height() / 1.15)) {
					$(this).addClass('animate');
				}
			})
		}
		//if ($('.anim-section').length) {
		animSection()
		$(window).scroll(function() {
			animSection()
		})
		//}

		$(window).load(function() {
			if ($('.parallax').length) {
				$('.parallax').each(function() {
					parallax($(this), 0.1);
				})
			}
		})
		$(window).scroll(function() {
			if ($('.parallax').length) {
				$('.parallax').each(function() {
					parallax($(this), 0.1);
				})
			}
		})
		$(window).load(function() {
			if ($('.help-info.parallax').length) {
				$('.help-info.parallax').each(function() {
					parallax($(this), 0);
				})
			}
		})
		$(window).scroll(function() {
			if ($('.help-info.parallax').length) {
				$('.help-info.parallax').each(function() {
					parallax($(this), 0);
				})
			}
		})
	}

	//

	//Svg Function
	$('img.svg').each(function() {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if ( typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if ( typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);

		}, 'xml');

	});
	//Custom Map
	if ($('#map').length) {
		var map = new GMaps({
			div : '#map',
			lat : 34.070965,
			lng : -118.40172,
			disableDefaultUI : true,
			zoom : 17,
			scrollwheel : false
		});
		map.drawOverlay({
			lat : map.getCenter().lat(),
			lng : map.getCenter().lng(),
			content : '<a href="#" class="mapmarker"><i class="fa fa-map-marker"></i></a>',
			verticalAlign : 'top',
			horizontalAlign : 'center'
		});

		if ($(window).width() >= 1200) {
			map.setOptions({
				// styles : Site.styles,
				center : new google.maps.LatLng(34.070965, -118.40172),
			});
		} else if ($(window).width() >= 992) {
			map.setOptions({
				styles : Site.styles,
				center : new google.maps.LatLng(34.070965, -118.40172),
			});
		} else if ($(window).width() >= 768) {
			map.setOptions({
				styles : Site.styles,
				center : new google.maps.LatLng(34.070965, -118.40172),
			});
		} else {
			map.setOptions({
				styles : Site.styles,
				center : new google.maps.LatLng(34.070965, -118.40172),
			});
		}
	}
	//
	function css_browser_selector(u) {
		var ua = u.toLowerCase(), is = function(t) {
			return ua.indexOf(t) > -1
		}, g = 'gecko', w = 'webkit', s = 'safari', o = 'opera', m = 'mobile', h = document.documentElement, b = [(!(/opera|webtv/i.test(ua)) && /msie\s(\d)/.test(ua)) ? ('ie ie' + RegExp.$1) : is('firefox/2') ? g + ' ff2' : is('firefox/3.5') ? g + ' ff3 ff3_5' : is('firefox/3.6') ? g + ' ff3 ff3_6' : is('firefox/3') ? g + ' ff3' : is('gecko/') ? g : is('opera') ? o + (/version\/(\d+)/.test(ua) ? ' ' + o + RegExp.$1 : (/opera(\s|\/)(\d+)/.test(ua) ? ' ' + o + RegExp.$2 : '')) : is('konqueror') ? 'konqueror' : is('blackberry') ? m + ' blackberry' : is('android') ? m + ' android' : is('chrome') ? w + ' chrome' : is('iron') ? w + ' iron' : is('applewebkit/') ? w + ' ' + s + (/version\/(\d+)/.test(ua) ? ' ' + s + RegExp.$1 : '') : is('mozilla/') ? g : '', is('j2me') ? m + ' j2me' : is('iphone') ? m + ' iphone' : is('ipod') ? m + ' ipod' : is('ipad') ? m + ' ipad' : is('mac') ? 'mac' : is('darwin') ? 'mac' : is('webtv') ? 'webtv' : is('win') ? 'win' + (is('windows nt 6.0') ? ' vista' : '') : is('freebsd') ? 'freebsd' : (is('x11') || is('linux')) ? 'linux' : '', 'js'];
		c = b.join(' ');
		h.className += ' ' + c;
		return c;
	};
	css_browser_selector(navigator.userAgent);

	if ($('#header').hasClass('intelligent')) {
		$('#slider').addClass('top-m');
	}
	if ($('#header').hasClass('fixed')) {
		$('#slider').addClass('top-m');
	}
	var class_pr = $('body').attr('class');
	var headerHeight = $('#header').outerHeight()
	var st = $(window).scrollTop();
	stickOnScroll = function() {
		console.log($('#header').hasClass("intelligent"))
		if ($('#header').hasClass("intelligent")) {
			console.log("in")
			$('#header').removeClass('normal');
			$('#slider').addClass('top');
			var pos = $(window).scrollTop();

			if (pos > headerHeight) {
				if (pos > st) {
					$('#header').addClass('simple')
					$('#header.simple').removeClass('down')
					$('#header.simple').addClass('fixed up')

				} else {
					$('#header.simple').removeClass('up')
					$('#header.simple').addClass('fixed down')

				}
				st = pos;

			} else {
				$('#header.simple').removeClass('fixed down up simple')
			}
			if (pos == $(document).height() - $(window).height()) {
				$('#header.simple').removeClass('up')
				$('#header.simple').addClass('fixed down')
			}

		} else if ($('body').hasClass("fix")) {

			$('#slider').addClass('top')
			$('#header').addClass('simple fixed')
			$('#header').removeClass('down up')
			$('#wrapper').css({
				paddingTop : 0
			})
		} else {

			$('#header.simple').removeClass('fixed down up simple')
			$('#header').addClass('normal');
			$('#slider').removeClass('top');
			$('#wrapper').css({
				paddingTop : 0
			})
		}
	}
	stickOnScroll()
	$(window).scroll(function() {
		stickOnScroll()
	})
});

