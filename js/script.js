$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/red_arrow.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right_arrow.svg"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }   
                
            }
        ] 
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });

      function toggleClass(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
          })
      };

        toggleClass('.catalog-item__link');
        toggleClass('.catalog-item__back');

     //Modal
      $('[data-modal=consultation]').on('click', function(){
        $('.overlay, #consultation').fadeIn('slow');
      });

      $('.modal__close').on('click', function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
      });

      $('.button_mini').each(function(i){
        $(this).on('click', function(){
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn('slow'); 
        })
      });

      function validateForm(form){
        $(form).validate({
          rules:{
            name: {
                required: true,
                minlength: 2
            },
            phone: "required",
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            name: 
            {
              required: "Пожалуйста, введите своё имя",
              minlength: jQuery.validator.format("Введите {0} символов!")
            },
            phone: "Введите свой номер телефона",
            email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильна введена почта"
            }
          }
        });
      }

      validateForm('#order form');
      validateForm('#consultation form');
      validateForm('#consultation-form');

      $('input[name=phone]').mask("+7 (999) 999-99-99");

      $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut('slow');
          $('#thanks. .overlay').fadeIn('slow');
          $('form').trigger('reset');
        });
        return false;
      });

      //Smooth scroll and pageup

      $(window).scroll(function(){
        if ($(this).scrollTop() > 1400) {
          $('.pageup').fadeIn('slow');
        } else {
          $('.pageup').fadeOut('slow');
        }

        $("a[href=#up]").click(function(){
          const _href = $(this).attr("href");
          $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
          return false;
        });

      });

      new WOW().init();

  });