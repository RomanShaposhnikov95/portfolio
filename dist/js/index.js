$(window).scroll(function(){
  if ($(this).scrollTop() > 500) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

$("a[href^='#']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});


const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu-adaptive'),  
      close = document.querySelector('.menu-adaptive_close');

      hamburger.addEventListener('click', () => {
          menu.classList.add('active');
      });

      close.addEventListener('click', () => {
        menu.classList.remove('active');
      });

const modal = document.querySelector('.overlay'),
      openBtn = document.querySelector('.open'),
      closeBtn = document.querySelector('.modal_close');

openBtn.addEventListener('click', function() {
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  document.body.style.overflow = 'auto';
});

function valideForms(form){
  $(form).validate({
      rules: {
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
        name: {
            required: "Пожалуйста, введите имя",
            minlength: jQuery.validator.format("Введите 1 символов!")
     },
        phone: "Пожалуйста, введите телефон!",
        email: {
          required: "Пожалуйста, введите почту!",
          email: "Неправильно, Пожалуйста, введите почту!"
        }
      }
  });
}
valideForms('#order form');


$('input[name=phone]').mask("+ 371 99999999");






