Template.home.events({
  'click #get-sms-updates': function (e) {
    e.preventDefault();
    var html = $('#sms-subscribe-form').html()
    var smsDialog = bootbox.dialog({
        message: html,
        title: "Subscribe for SMS updates",
        buttons: {
          cancel: {
            label: "Close",
            className: "btn-default",
            callback: function() {

            }
          },
          success: {
            label: "Save",
            className: "btn-primary",
            callback: function() {
              var phoneNumber = $('#user-phone').val();

              UserPhones.insert({phone: phoneNumber}, function(err, result){
                console.log(err, result)
              });
            }
          }
        }
    });
    return false;
  }
});