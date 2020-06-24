        // Navbar on hover
        $('.nav.tab-hover a.nav-link').hover(function () {
            $(this).tab('show');
        });

        // Current Date
        var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            month = ["January", "February", "March", "April", "May", "June", "Feb", "August", "September", "October", "November", "December"],
            a = new Date();

        jQuery('.date-today').html(weekday[a.getDay()] + ', ' + month[a.getMonth()] + ' ' + a.getDate());

        // Infinity Scroll
        jQuery(window).on('load', function () {

            var $container = $('.infinity-wrapper');

            $container.infiniteScroll({
                path: '.load-next-portfolio',
                button: '.load-next-portfolio',
                scrollThreshold: false,
                history: false,
                status: '.page-load-status'
            });

            $container.on('load.infiniteScroll', function (event, response, path) {
                var $items = $(response).find('.infinity-loader');
                // append items after images loaded
                $items.imagesLoaded(function () {
                    $container.append($items);
                    $container.isotope('insert', $items);
                    setTimeout(function () {
                        SEMICOLON.widget.loadFlexSlider();
                    }, 1000);
                });
            });

        });



        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=499481203443583&version=v2.0";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));


        $(function () {
            $("#side-navigation").tabs({ show: { effect: "fade", duration: 400 } });
        });

		var tpj=jQuery;
		var revapi19;
		tpj(document).ready(function() {
			if(tpj("#rev_slider_19_1").revolution == undefined){
				revslider_showDoubleJqueryError("#rev_slider_19_1");
			}else{
				revapi19 = tpj("#rev_slider_19_1").show().revolution({
					sliderType:"carousel",
                    jsFileLocation: "assets/include/rs-plugin/js/",
					sliderLayout:"fullwidth",
					dottedOverlay:"none",
					delay:7000,
					navigation: {
						keyboardNavigation:"off",
						keyboard_direction: "horizontal",
						mouseScrollNavigation:"off",
						onHoverStop:"on",
						tabs: {
							style:"hesperiden",
							enable:true,
							width:260,
							height:80,
							min_width:260,
							wrapper_padding:25,
							wrapper_color:"#F5F5F5",
							wrapper_opacity:"1",
							tmp:'<div class="tp-tab-content">  <span class="tp-tab-date">{{param1}}</span>  <span class="tp-tab-title font-secondary">{{title}}</span> <span class="tp-tab-date tp-tab-para">{{param2}}</span></div><div class="tp-tab-image"></div>',
							visibleAmount: 9,
							hide_onmobile: false,
							hide_under:480,
							hide_onleave:false,
							hide_delay:200,
							direction:"horizontal",
							span:true,
							position:"outer-bottom",
							space:0,
							h_align:"left",
							v_align:"bottom",
							h_offset:0,
							v_offset:0
						}
					},
					carousel: {
						horizontal_align: "center",
						vertical_align: "center",
						fadeout: "on",
						vary_fade: "on",
						maxVisibleItems: 3,
						infinity: "on",
						space: 0,
						stretch: "off",
						showLayersAllTime: "off",
						easing: "Power3.easeInOut",
						speed: "800"
					},
					responsiveLevels:[1140,992,768,576],
					visibilityLevels:[1140,992,768,576],
					gridwidth:[850,700,400,300],
					gridheight:[580,600,500,400],
					lazyType:"single",
					shadow:0,
					spinner:"off",
					stopLoop:"on",
					stopAfterLoops:-1,
					stopAtSlide:-1,
					shuffle:"off",
					autoHeight:"off",
					disableProgressBar:"off",
					hideThumbsOnMobile:"off",
					hideSliderAtLimit:0,
					hideCaptionAtLimit:0,
					hideAllCaptionAtLilmit:0,
					debugMode:false,
					fallbacks: {
						simplifyAll:"off",
						nextSlideOnWindowFocus:"off",
						disableFocusListener:false,
					}
				});
			}
		});	/* Revolution Slider End */

		// Navbar on hover
		$('.nav.tab-hover a.nav-link').hover(function() {
			$(this).tab('show');
		});

		// Current Date
		var weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
			month = ["January", "February", "Febch", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			a = new Date();

			jQuery('.date-today').html( weekday[a.getDay()] + ', ' + month[a.getMonth()] + ' ' + a.getDate() );

		// Infinity Scroll
		jQuery(window).on( 'load', function(){

			var $container = $('.infinity-wrapper');

			$container.infiniteScroll({
				path: '.load-next-portfolio',
				button: '.load-next-portfolio',
				scrollThreshold: false,
				history: false,
				status: '.page-load-status'
			});

			$container.on( 'load.infiniteScroll', function( event, response, path ) {
				var $items = $( response ).find('.infinity-loader');
				// append items after images loaded
				$items.imagesLoaded( function() {
					$container.append( $items );
					$container.isotope( 'insert', $items );
					setTimeout( function(){
						SEMICOLON.widget.loadFlexSlider();
					}, 1000 );
				});
			});

		});

        $('#oc-news1').owlCarousel({
            items: 1,
            margin: 20,
            dots: false,
            nav: true,
            navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
            responsive: {
                0: { items: 1, dots: true, },
                576: { items: 1, dots: true },
                768: { items: 2, dots: true },
                992: { items: 2 },
                1200: { items: 4 }
            }
        });
        $('#oc-news2').owlCarousel({
            items: 1,
            margin: 20,
            dots: false,
            nav: true,
            navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
            responsive: {
                0: { items: 1, dots: true, },
                576: { items: 1, dots: true },
                768: { items: 2, dots: true },
                992: { items: 2 },
                1200: { items: 4 }
            }
        });
        $('#oc-news4').owlCarousel({
            items: 1,
            margin: 20,
            dots: false,
            nav: true,
            navText: ['<i class="icon-angle-left"></i>', '<i class="icon-angle-right"></i>'],
            responsive: {
                0: { items: 1, dots: true, },
                576: { items: 1, dots: true },
                768: { items: 2, dots: true },
                992: { items: 2 },
                1200: { items: 4 }
            }
        });

        
    $(function () {
        $('.intro-showcase-section').hide();
        $('.intro-showcase-section').eq(0).show();
        // Navbar on hover
        $('.tab-hover').find('.nav-link').on('click', function (e) {
            var target = $(this).attr('href');

            $('.tab-hover').find('.nav-link').removeClass('active');
            $(this).addClass('active');

            $('.intro-showcase-section').hide();
            $(target).stop(true).fadeIn();

            e.stopPropagation();
            e.preventDefault();
        });
    });

    $(function () {

        //$('.inline-calendar').datepicker();

        $('#calendar').fullCalendar({

            defaultDate: this.todayDate,
            defaultView: 'month',
            dayNamesShort: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
            header: {
                left: 'title',
                center: '',
                right: 'month listMonth',

            },
            footer: {
                left: '',
                center: '',
                right: 'prev,next ',


            },
            height: "auto",
            locale: 'th',
            noEventsMessage: "ยังไม่มีข้อมูล",
            handleWindowResize: true,
            buttonIcons: true, // show the prev/next text
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            displayEventTime: false,
            listDayAltFormat: false

        });
    });

