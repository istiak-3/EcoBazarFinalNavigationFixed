$(document).ready(function () {

    /** fixed-header padding offset ----(Note: To change after next section is done)*/
    $('.afterHeadingSection').css({
        'padding-top': $('header').outerHeight(true) + parseFloat($('.afterHeadingSection').css('padding-top'))
    })

    $(window).on('scroll', function () {
        event.stopPropagation();

        /**header shrink */
        if ($(this).scrollTop() > 80) {
            $('#bottom-header').addClass('header-collapsed').css('overflow', 'hidden');

            $('#middle-header .navbar').css({
                'padding-top': 5,
                'padding-bottom': 5
            })

            $('#top-header').stop(true, true).slideUp(300, 'linear')
        }
        else {
            $('#bottom-header').removeClass('header-collapsed');

            // 2. Wait 500ms (or your transition time) then show text
            $('#bottom-header').delay(600).queue(function (next) {
                $(this).css('overflow', 'visible');
                next();
            });

            $('#middle-header .navbar').css({
                'padding': ''
            })

            $('#top-header').stop(true, true).fadeIn(100)
        }
    });

    /** ---- top-header Section Start ------- */
    $('#top-header .utilities .translator select').click(function () {
        $('#top-header .translator .translate_arrow').stop(true, true).slideToggle(100)
    })
    $('#top-header .utilities .currency_convert select').click(function () {
        $('#top-header .currency_convert .currency_arrow').stop(true, true).slideToggle(100)
    })
    /** ---- top-header Section End ------- */

    /** ---- middle-header Section Start ------- */
    /** search input behaviour */
    $('#middle-header .search_input').on({
        'focus': function () {
            $('#middle-header .search_input').css({
                'padding-left': 20
            })
            $('#middle-header .search_icon').hide()
        },
        'blur': function () {
            /** Crucial logic */
            if ($(this).val() === "") {
                $('#middle-header .close_btn').hide();
                $('#middle-header .search_icon').show();
                $(this).css('padding-left', '');
            }

        }
    })
    /** ---- middle-header Section End ------- */

    /** ---- bottom-header Section Start ------- */

    /** bottom header category-list toggle */
    $('#bottom-header li.categories').hover(function () {
        $('#bottom-header ul.category_list').stop(true, true).slideToggle(300)
        $('#bottom-header li.categories button .category_arrow').stop(true, true).slideToggle(100)
    })
    /** ---- bottom-header Section End ------- */


    /** ---- mobile-header Section Start ------- */
    $('#mobile-header .offcanvas-top .search_input').on({
        'focus': function () {
            $('#mobile-header .offcanvas-top .search_input').css({
                'padding-left': 20
            })
            $('#mobile-header .offcanvas-top .search_icon').hide()
        },
        'blur': function () {
            /** Crucial logic */
            if ($(this).val() === "") {
                $('#mobile-header .offcanvas-top .close_btn').hide();
                $('#mobile-header .offcanvas-top .search_icon').show();
                $(this).css('padding-left', '');
            }
        }
    })
    /** ---- mobile-header Section End ------- */


    /** -- Banner Section Start -- */
    /** slick slider init. */
    $('.banner_slider').slick({
        'prevArrow': '.prev_arrow',
        'nextArrow': '.next_arrow',
        'dots': true,
        'cssEase': 'linear'
    })

    /** slick slider custom pagination*/
    $('.banner_slider ul.slick-dots li button').text('')
    /** -- Banner Section End -- */

    /** ---- product-details Section Start ------- */
    $('.img_slider').slick({
        'arrows': false,
        'swipeToSlide': true,
        'touchMove': true,
        'touchThreshold': 20,
        'asNavFor': '.thumbnail_slider'
    });
    $('.thumbnail_slider').slick({
        'vertical': true,
        'focusOnSelect': true,
        'slidesToShow': 4,
        'verticalSwiping': true,
        'swipeToSlide': true,
        'touchThreshold': 1000,
        'waitForAnimate': false,
        'prevArrow': '.arrow_up',
        'nextArrow': '.arrow_down',
        'asNavFor': '.img_slider',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    vertical: false,
                    verticalSwiping: false
                }
            }
        ]
    });
    /** ---- product-details Section End ------- */

    /** ---- checkout Section Start ------- */
    $('#checkout .country.address select').click(function () {
        $('#checkout .country.address span.arrow .country_arrow').stop(true, true).slideToggle(100)
    })
    $('#checkout .states.address select').click(function () {
        $('#checkout .states.address span.arrow .states_arrow').stop(true, true).slideToggle(100)
    })
    /** ---- checkout Section End ------- */

    /** ---- blog Section Start ------- */
    $('#blog .sort .sort_list').click(function () {
        $('#blog .sort_list ul.list').stop(true, true).slideToggle(300)
        $('#blog .sort_list button.select span .select_arrow').stop(true, true).slideToggle(100)
    })

    /** search input behaviour */
    $('#blog .search_input').on({
        'focus': function () {
            $(this).css({
                'padding-left': 20
            })
            $('#blog .search_icon').hide()

            $('#blog .close_btn').show()
            $('#blog .close_btn').css({
                'display': 'inline-flex'
            })

        },
        'blur': function () {
            /** Crucial logic */
            if ($(this).val() === "") {
                $('#blog .close_btn').hide();
                $('#blog .search_icon').show();
                $(this).css('padding-left', '');
            }
        }
    })

    /** inputs close_btn behaviour */
    $('#blog .close_btn').click(
        function (event) {
            /** Stops browser default behaviour */
            event.preventDefault();
            /** Clears input value */
            $('#blog .search_input').val('')
            /** Go back to input focus block */
            $('#blog .search_input').focus()
        }
    )
    /** ---- blog Section End ------- */

})