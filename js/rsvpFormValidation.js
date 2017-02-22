(function ($) {
  'use strict';

  var SUBMIT_URL = 'https://script.google.com/macros/s/AKfycbwTxIozLMSvCxpCpbn8WX85eqYfRbF-cS78j8nxxJYtKOseYbOU/exec';

  var $form = $("form[name=rsvp-form]");
  // Fields
  var $emailField = $form.find("input[name=email]");
  var $nameField = $form.find("input[name=name]");
  var $phoneNumberField = $form.find("input[name=phoneNumber]");
  var $isAttendingField = $form.find("select[name=isAttending]");
  var $countAdultsField = $form.find("select[name=countAdults]");
  var $countChildrenField = $form.find("select[name=countChildren]");
  var $countBedsField = $form.find("select[name=countBeds]");
  var $countVeggieMenuField = $form.find("select[name=countVeggieMenu]");
  var $songChoiceField = $form.find("textarea[name=songChoice]");

  $form.submit(function( event ) {
    event.preventDefault();

    if (!isFormValid()) {
      showError();
      return;
    }
    $("#loading").css("display","inline-block");

    var data = {
      email: $emailField.val(),
      name: $nameField.val(),
      phoneNumber: $phoneNumberField.val(),
      isAttending: $isAttendingField.val(),
      countAdults: $countAdultsField.val(),
      countChildren: $countChildrenField.val(),
      countBeds: $countBedsField.val(),
      countVeggieMenu: $countVeggieMenuField.val(),
      songChoice: $songChoiceField.val(),
    }

    $.ajax(
      SUBMIT_URL, {method: 'POST', data: data}
    ).success(function (success) {
      $( "#loading").hide();
      $( "#Success").slideDown( "slow" );
      setTimeout(function() {
        $( "#Success").slideUp( "slow" );
        }, 3000);
      $form[0].reset();
      $form.hide();
    }).error(function (error) {
      $( "#loading").hide();
      $( "#Error").slideDown( "slow" );
      setTimeout(function() {
        $( "#Error").slideUp( "slow" );
      }, 3000);
    });
  });

  function isFormValid() {
    if (!$form[0].checkValidity() || !$form.valid()) {
      return false;
    }
    return true;
  };

  function showError() {
    $( "#loading").hide();
    $( "#Error").slideDown( "slow" );
    setTimeout(function() {
      $( "#Error").slideUp( "slow" );
    }, 3000);
  }

})(jQuery);

// copied from template source code
(function (namespace, $) {
    "use strict"; var AppForm = function () { var o = this; $(document).ready(function () { o.initialize(); }); }; var p = AppForm.prototype; p.initialize = function () { this._enableEvents(); this._initRadioAndCheckbox(); this._initFloatingLabels(); this._initValidation(); }; p._enableEvents = function () { var o = this; $('[data-submit="form"]').on('click', function (e) { e.preventDefault(); var formId = $(e.currentTarget).attr('href'); $(formId).submit(); }); $('textarea.autosize').on('focus', function () { $(this).autosize({ append: '' }); }); }; p._initRadioAndCheckbox = function () { $('.checkbox-styled input, .radio-styled input').each(function () { if ($(this).next('span').length === 0) { $(this).after('<span></span>'); } }); }; p._initFloatingLabels = function () { var o = this; $('.floating-label .form-control').on('keyup change', function (e) { var input = $(e.currentTarget); if ($.trim(input.val()) !== '') { input.addClass('dirty').removeClass('static'); } else { input.removeClass('dirty').removeClass('static'); } }); $('.floating-label .form-control').each(function () { var input = $(this); if ($.trim(input.val()) !== '') { input.addClass('static').addClass('dirty'); } }); $('.form-horizontal .form-control').each(function () { $(this).after('<div class="form-control-line"></div>'); }); }; p._initValidation = function () {
        if (!$.isFunction($.fn.validate)) { return; }
        $.validator.setDefaults({
            highlight: function (element) { $(element).closest('.form-group').addClass('has-error'); }, unhighlight: function (element) { $(element).closest('.form-group').removeClass('has-error'); }, errorElement: 'span', errorClass: 'help-block', errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) { error.insertAfter(element.parent()); }
                else if (element.parent('label').length) { error.insertAfter(element.parent()); }
                else { error.insertAfter(element); }
            }
        }); $('.form-validate').each(function () { var validator = $(this).validate(); $(this).data('validator', validator); });
    }; window.AppForm = new AppForm;
}(this, jQuery));
