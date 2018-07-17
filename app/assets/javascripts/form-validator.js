$(function() {
  $('.js-validate').each(initFormValidator);
});

function initFormValidator() {
  $(this).validate({
    rules: {
      name: {
        required: true,
        maxlength: 100
      },
      email: {
        required: true,
        email: true,
        maxlength: 100
      },
      message: {
        required: true,
        minlength: 10,
        maxlength: 1000
      }
    },
    messages: {
      name: {
        required: 'To pole jest wymagane.',
        maxlength: 'To pole nie może mieć więcej niż {0} znaków.'
      },
      email: {
        required: 'To pole jest wymagane.',
        email: 'Podaj prawidłowy adres email.',
        maxlength: 'To pole nie może mieć więcej niż {0} znaków.'
      },
      message: {
        required: 'To pole jest wymagane.',
        minlength: 'To pole nie może mieć mniej niż {0} znaków.',
        maxlength: 'To pole nie może mieć więcej niż {0} znaków.'
      }
    }
  });
}
