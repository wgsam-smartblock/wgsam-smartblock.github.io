// ----- scroll navigation tap bar ----- //
var hidWidth;
var scrollBarWidths = 40;

var widthOfList = function () {
  var itemsWidth = 0;
  $('.list li').each(function () {
    var itemWidth = $(this).outerWidth();
    itemsWidth += itemWidth;
  });
  return itemsWidth;
};

var widthOfHidden = function () {
  return (($('.wrapper').outerWidth()) - widthOfList() - getLeftPosi()) - scrollBarWidths;
};

var getLeftPosi = function () {
  return $('.list').position().left;
};

var reAdjust = function () {
  if (($('.wrapper').outerWidth()) < widthOfList()) {
    $('.scroller-right').show();
  }
  else {
    $('.scroller-right').hide();
  }

  if (getLeftPosi() < 0) {
    $('.scroller-left').show();
  }
  else {
    $('.item').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow');
    $('.scroller-left').hide();
  }
}

reAdjust();

$(window).on('resize', function (e) {
  reAdjust();
});

// scroller-right
$('.scroller-right').click(function () {
  $('.scroller-left').fadeIn('slow');
  $('.scroller-right').fadeOut('slow');
  $('.list').animate({ left: "+=" + widthOfHidden() + "px" }, 'slow', function () {
  });
});

// scroller-left
$('.scroller-left').click(function () {
  $('.scroller-right').fadeIn('slow');
  $('.scroller-left').fadeOut('slow');
  $('.list').animate({ left: "-=" + getLeftPosi() + "px" }, 'slow', function () {
  });
});

$(".tabs-simple").on("click", ".tabs-simple-tab", function () {
  $(".tabs-simple-tab").removeClass("is-active");
  $(this).addClass("is-active");
});
// ----- end of scroll navigation tap bar ----- //


$(document).ready(function () {

  'use strict';

  var countryError = true,
    fullnameError = true,
    icnoError = true,
    mobileNumError = true,
    emailError = true,
    scndPassword1Error = true,
    bankCountryError = true,
    bankNameError = true,
    bankAccNumberError = true,
    bankAccNameError = true,
    branchNameError = true,
    scndPassword2Error = true;

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

    //--- Personal Info Page ---//
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

    // Full Name
    if ($(this).hasClass('fullname')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please enter your full name').fadeIn().parent('.form-group').addClass('hasError');
        fullnameError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        fullnameError = false;
      }
    }

    // IC / Password
    if ($(this).hasClass('icno')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please enter your IC/Passport No.').fadeIn().parent('.form-group').addClass('hasError');
        icnoError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        icnoError = false;
      }
    }

    // Mobile number
    if ($(this).hasClass('mobilenum')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please enter your mobile number').fadeIn().parent('.form-group').addClass('hasError');
        mobileNumError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        mobileNumError = false;
      }
    }

    // Email
    if ($(this).hasClass('email')) {
      if ($(this).val().length === "") {
        $(this).siblings('span.error').text('Please enter your email').fadeIn().parent('.form-group').addClass('hasError');
        emailError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        emailError = false;
      }
    }

    // Secondary PassWord 1
    if ($(this).hasClass('scndpassword1')) {
      if ($(this).val().length === "") {
        $(this).siblings('span.error').text('Please Enter Your Secondary Password').fadeIn().parent('.form-group').addClass('hasError');
        scndPassword1Error = true;
      }
      else if ($(this).val().length < 8) {
        $(this).siblings('span.error').text('Please type at least 8 charcters').fadeIn().parent('.form-group').addClass('hasError');
        scndPassword1Error = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        scndPassword1Error = false;
      }
    }

    //--- Bank Info Page ---//
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

    // Bank Country
    if ($(this).hasClass('bankcountry')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Please select your bank country').fadeIn().parent('.form-group').addClass('hasError');
        bankCountryError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        bankCountryError = false;
      }
    }

    // Bank Acc Number
    if ($(this).hasClass('bankaccnum')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Require account number').fadeIn().parent('.form-group').addClass('hasError');
        bankAccNumberError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        bankAccNumberError = false;
      }
    }

    // Bank Acc Name
    if ($(this).hasClass('bankaccname')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Require bank account name').fadeIn().parent('.form-group').addClass('hasError');
        bankAccNameError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        bankAccNameError = false;
      }
    }

    // Bank Acc Name
    if ($(this).hasClass('branchname')) {
      if ($(this).val().length === 0) {
        $(this).siblings('span.error').text('Require branch name').fadeIn().parent('.form-group').addClass('hasError');
        branchNameError = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        branchNameError = false;
      }
    }

    // Secondary Password 2
    if ($(this).hasClass('scndpassword2')) {
      if ($(this).val().length < 8) {
        $(this).siblings('span.error').text('Please type at least 8 charcters').fadeIn().parent('.form-group').addClass('hasError');
        scndPassword2Error = true;
      } else {
        $(this).siblings('.error').text('').fadeOut().parent('.form-group').removeClass('hasError');
        scndPassword2Error = false;
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
    if ($('#scndpassword1').attr("type") == "text") {
      $('#scndpassword1').attr('type', 'password');
      $('#show_hide_password i').removeClass("glyphicon-eye-open");
      $('#show_hide_password i').addClass("glyphicon-eye-close");
    } else if ($('#scndpassword2').attr("type") == "password") {
      $('#scndpassword1').attr('type', 'text');
      $('#show_hide_password i').removeClass("glyphicon-eye-close");
      $('#show_hide_password i').addClass("glyphicon-eye-open");
    }
  });

  $('#eye2').on('click', function (event) {
    if ($('#scndpassword2').attr("type") == "text") {
      $('#scndpassword2').attr('type', 'password');
      $('#show_hide_password2 i').removeClass("glyphicon-eye-open");
      $('#show_hide_password2 i').addClass("glyphicon-eye-close");
    } else if ($('#scndpassword2').attr("type") == "password") {
      $('#scndpassword2').attr('type', 'text');
      $('#show_hide_password2 i').removeClass("glyphicon-eye-close");
      $('#show_hide_password2 i').addaClass("glyphicon-eye-open");
    }
  });

  // Personal info submit
  $('form.personal-info-form').submit(function (event) {
    event.preventDefault();

    if (countryError == true || fullnameError == true || icnoError == true || mobileNumError == true || emailError == true || scndPassword1Error == true) {
      $('.country, fullname, .icno, .mobilenum, .email, .scndpassword1').blur();
    } else {
      console.log("Success");
    }
  });

  // Bank info submit
  $('form.bank-info-form').submit(function (event) {
    event.preventDefault();

    if (bankCountryError == true || bankNameError == true || bankAccNumberError == true || bankAccNameError == true || branchNameError == true || scndPasswordError == true) {
      $('.bankcountry, bankname, .bankaccnum, .bankaccname, .branchname, .scndpassword2').blur();
    } else {
      console.log("Success");
    }
  });
});


// upload image 
$("#imageUpload").change(function () {
  readURL(this);
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function (e) {
      $('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
      $('#imagePreview').hide();
      $('#imagePreview').fadeIn(650);
    }
    reader.readAsDataURL(input.files[0]);
  }
}




