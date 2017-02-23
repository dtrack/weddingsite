(function ($) {
  'use strict';

  $(document).on('ready', function () {

    var CHALLENGE_URL = 'https://script.google.com/macros/s/AKfycbx9949hQnjvKS1xubRM9pzFz5hXSgFKO7a4i13-dkSCYuWNpHIi/exec';

    if (!localStorage.isAuthed == 1) {
      $('#entryGateModal').modal();

      $('#entryGateModal').find('#entry-gate-leave').on('click', function () {
        window.location.replace("https://google.com");
      });

      $('#entryGateModal').find('#entry-gate-challenge').on('click', function () {
        var password = $('#entryGateModal').find('input[type=password]').val();

        $.ajax(
          CHALLENGE_URL, {method: 'POST', data: {password: password}, dataType: 'json'}
        ).success(function (data) {
          if (data.success) {
            $('#entryGateModal').modal('hide');
            localStorage.isAuthed = 1;
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
