$(document).ready(function () {

  'use strict';

  var walletTypeError = true,
    usernameError = true,
    withdrawValueError = true,
    adminChargeError = true,
    secondaryPasswordError = true,
    paymentTypeError = true,
    beneficiaryError = true,
    bankAccNumError = true,
    bankNameError = true,
    branchNameError = true;

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

    // Wallet Type
    if ($(this).hasClass('wallettype')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please select your Ewallet type').fadeIn().parent('.form-group').addClass('hasError');
        walletTypeError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        walletTypeError = false;
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

    // Withdraw Value
    if ($(this).hasClass('withdrawvalue')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please Enter A Value Greater Than Or Equal To 1.').fadeIn().parent('.form-group').addClass('hasError');
        withdrawValueError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        withdrawValueError = false;
      }
    }

    // Admin Charge
    if ($(this).hasClass('admincharge')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Admin Charge').fadeIn().parent('.form-group').addClass('hasError');
        adminChargeError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        adminChargeError = false;
      }
    }

    // Secondary PassWord
    if ($(this).hasClass('secdpassword')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please Enter Your Secondary Password').fadeIn().parent('.form-group').addClass('hasError');
        secondaryPasswordError = true;
      } else if ($(this).val().length < 8) {
        $(this).siblings('span.error').text('Please type at least 8 charcters').fadeIn().parent('.form-group').addClass('hasError');
        secondaryPasswordError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        secondaryPasswordError = false;
      }
    }

    // Payment Type
    if ($(this).hasClass('paymenttype')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please Select Your Payment Type').fadeIn().parent('.form-group').addClass('hasError');
        paymentTypeError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        paymentTypeError = false;
      }
    }

    // Beneficiary
    if ($(this).hasClass('beneficiary')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Required beneficiary name').fadeIn().parent('.form-group').addClass('hasError');
        beneficiaryError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        beneficiaryError = false;
      }
    }

    // Bank Account Number
    if ($(this).hasClass('bankaccnum')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please enter your bank account number').fadeIn().parent('.form-group').addClass('hasError');
        bankAccNumError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        bankAccNumError = false;
      }
    }

    // Bank Name
    if ($(this).hasClass('bankname')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please enter your bank name').fadeIn().parent('.form-group').addClass('hasError');
        bankNameError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        bankNameError = false;
      }
    }

    // Branch Name
    if ($(this).hasClass('branchname')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please enter your Branch Name').fadeIn().parent('.form-group').addClass('hasError');
        branchNameError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        branchNameError = false;
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
    if ($('#secdpassword').attr("type") == "text") {
      $('#secdpassword').attr('type', 'password');
      $('#show_hide_password i').removeClass("glyphicon-eye-open");
      $('#show_hide_password i').addClass("glyphicon-eye-close");
    } else if ($('#secdpassword').attr("type") == "password") {
      $('#secdpassword').attr('type', 'text');
      $('#show_hide_password i').removeClass("glyphicon-eye-close");
      $('#show_hide_password i').addClass("glyphicon-eye-open");
    }
  });

  // Form submit
  $('form.withdraw-form').submit(function (event) {
    event.preventDefault();

    if (walletTypeError == true || usernameError == true || withdrawValueError == true || adminChargeError == true || secondaryPasswordError == true || paymentTypeError == true || beneficiaryError == true || bankAccNumError == true || bankNameError == true || branchNameError == true) {
      $('.wallettype, .username, .withdrawvalue, .admincharge, .secdpassword, .paymenttype, .beneficiary, .bankaccnum, .bankname, .branchname').blur();
    } else {
      console.log("Success");
    }
  });
});



