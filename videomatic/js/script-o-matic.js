    $('body').on('change keyup keydown paste cut', 'textarea', function() {
      $(this).height(0).height(this.scrollHeight);
    }).find('textarea').change();

    $('input.male-doctor').on('change', function() {
      $('.male-doctors').show();
      $('.female-doctors').hide();
    });

    $('input.female-doctor').on('change', function() {
      $('.female-doctors').show();
      $('.male-doctors').hide();
    });

    $('input.female-patient').on('change', function() {
      $('.female-patients').show();
      $('.male-patients').hide();
    });

    $('input.male-patient').on('change', function() {
      $('.male-patients').show();
      $('.female-patients').hide();
    });

    $('.add').on('click', function() {
      $('.countries').show();
    });
