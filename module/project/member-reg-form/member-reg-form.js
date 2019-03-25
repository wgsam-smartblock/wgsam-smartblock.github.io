$(document).ready(function () {

  'use strict';

  var fullnameError = true,
    usernameError = true,
    idnumError = true,
    countryError = true,
    emailError = true,
    phoneError = true,
    passwordError = true,
    passConfirm = true,
    coinQualityError = true,
    paymentTypeError = true;

  // Detect browser for css purpose
  if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
    $('.form form label').addClass('fontSwitch');
  }

  // Label effect
  $('input, select').focus(function () {
    $(this).siblings('label').addClass('active');
  });

  $('input, select').bind('checkval', function () {
    var floatLabel = $(this).parent('.form-group').children('label');
    if (this.value !== '') {
      floatLabel.addClass('active');
    } else {
      floatLabel.removeClass('active');
    }
  }).blur(function () {
    
    // Fullname
    if ($(this).hasClass('fullname')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please type your full name').fadeIn().parent('.form-group').addClass('hasError');
        fullnameError = true;
      } else if ($(this).val().length > 1 && $(this).val().length <= 6) {
        $(this).siblings('span.error').text('Please type at least 6 characters').fadeIn().parent('.form-group').addClass('hasError');
        fullnameError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        fullnameError = false;
      }
    }

    // Username
    if ($(this).hasClass('username')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please type your full name').fadeIn().parent('.form-group').addClass('hasError');
        usernameError = true;
      } else if ($(this).val().length > 1 && $(this).val().length <= 3) {
        $(this).siblings('span.error').text('Username at least 3 characters').fadeIn().parent('.form-group').addClass('hasError');
        usernameError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        usernameError = false;
      }
    }

    // NRIC
    if ($(this).hasClass('idnum')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Require Nric').fadeIn().parent('.form-group').addClass('hasError');
        idnumError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        idnumError = false;
      }
    }

    // Country
    if ($(this).hasClass('country')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please select your country').fadeIn().parent('.form-group').addClass('hasError');
        countryError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        countryError = false;
      }
    }

    // Email
    if ($(this).hasClass('email')) {
      if ($(this).val().length == '') {
        $(this).siblings('span.error').text('Please type your email address').fadeIn().parent('.form-group').addClass('hasError');
        emailError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        emailError = false;
      }
    }

    // Mobile Phone
    if ($(this).hasClass('phone')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Require mobile number').fadeIn().parent('.form-group').addClass('hasError');
        phoneError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        phoneError = false;
      }
    }

    // PassWord
    if ($(this).hasClass('pass')) {
      if ($(this).val().length < 8) {
        $(this).siblings('span.error').text('Please type at least 8 charcters').fadeIn().parent('.form-group').addClass('hasError');
        passwordError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        passwordError = false;
      }
    }

    // PassWord confirmation
    if ($('.pass').val() !== $('.passConfirm').val()) {
      $('.passConfirm').siblings('.error').text('Passwords don\'t match').fadeIn().parent('.form-group').addClass('hasError');
      passConfirm = false;
    } else {
      $('.passConfirm').siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
      passConfirm = false;
    }

    // Mobile Phone
    if ($(this).hasClass('coinQuality')) {
      if ($(this).val() < 10) {
        $(this).siblings('span.error').text('Please enter amount more than or equal to the minimum value').fadeIn().parent('.form-group').addClass('hasError');
        coinQualityError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        coinQualityError = false;
      }
    }

    // Payment Type
    if ($(this).hasClass('payment-type')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please select your payment type').fadeIn().parent('.form-group').addClass('hasError');
        paymentTypeError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        paymentTypeError = false;
      }
    }

    // label effect
    if ($(this).val().length > 0) {
      $(this).siblings('label').addClass('active');
    } else {
      $(this).siblings('label').removeClass('active');
    }
  }).trigger('checkval');

  // password hide / show
  $('#eye').on('click', function (event) {
    if ($('#password').attr("type") == "text") {
      $('#password').attr('type', 'password');
      $('#show_hide_password i').removeClass("glyphicon-eye-open");
      $('#show_hide_password i').addClass("glyphicon-eye-close");
    } else if ($('#password').attr("type") == "password") {
      $('#password').attr('type', 'text');
      $('#show_hide_password i').removeClass("glyphicon-eye-close");
      $('#show_hide_password i').addClass("glyphicon-eye-open");
    }
  });

  $('#eye2').on('click', function (event) {
    if ($('#passwordConf').attr("type") == "text") {
      $('#passwordConf').attr('type', 'password');
      $('#show_hide_password2 i').removeClass("glyphicon-eye-open");
      $('#show_hide_password2 i').addClass("glyphicon-eye-close");
    } else if ($('#password').attr("type") == "password") {
      $('#passwordConf').attr('type', 'text');
      $('#show_hide_password2 i').removeClass("glyphicon-eye-close");
      $('#show_hide_password2 i').addClass("glyphicon-eye-open");
    }
  });

  $('#eye3').on('click', function (event) {
    if ($('#secdpass').attr("type") == "text") {
      $('#secdpass').attr('type', 'password');
      $('#show_hide_password3 i').removeClass("glyphicon-eye-open");
      $('#show_hide_password3 i').addClass("glyphicon-eye-close");
    } else if ($('#password').attr("type") == "password") {
      $('#secdpass').attr('type', 'text');
      $('#show_hide_password3 i').removeClass("glyphicon-eye-close");
      $('#show_hide_password3 i').addClass("glyphicon-eye-open");
    }
  });


  // Form submit
  $('form.signup-form').submit(function (event) {
    event.preventDefault();

    if (fullnameError == true || usernameError == true || idnumError == true || countryError == true || emailError == true || phoneError == true || passwordError == true || passConfirm == true) {
      $('.fullname, .username, .idnum, .country, .phone, .email, .pass, .passConfirm').blur();
    } else {
      console.log("Success");
    }
  });
});



