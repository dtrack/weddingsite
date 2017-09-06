(function ($) {
  'use strict';

  var getIsAuthed = function () {
    // deactivating auth
    return true;
    if (document.cookie.indexOf('isAuthed=1') > -1) {
      return true;
    }
    if (localStorage.isAuthed == 1) {
      return true;
    }
    return false;
  };

  var setIsAuthed = function () {
    document.cookie = 'isAuthed=1';
    localStorage.isAuthed = 1;
  };

  $(document).on('ready', function () {

    var CHALLENGE_URL = 'https://script.google.com/macros/s/AKfycbx9949hQnjvKS1xubRM9pzFz5hXSgFKO7a4i13-dkSCYuWNpHIi/exec';

    if (!getIsAuthed()) {
      $('#entryGateModal').modal();

      $('#entryGateModal').find('#entry-gate-leave').on('click', function () {
        window.location.replace("https://google.com");
      });

      $('form[name=jnp-form-gate]').submit(function (event) {
        event.preventDefault();
        var password = $('#entryGateModal').find('input[type=password]').val();

        $.ajax(
          CHALLENGE_URL, {method: 'POST', data: {password: password}, dataType: 'json'}
        ).success(function (data) {
          if (data.success) {
            $('#entryGateModal').modal('hide');
            setIsAuthed();
          }
          else {
            $('#challengeFailed').show();
          }
        }).error(function (error) {
          $('#challengeFailed').show();
        });

      });

    }

  });

})(jQuery);
