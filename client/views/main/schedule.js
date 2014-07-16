Template.schedule.stationsList = function(){
  return Stations.find();
};


Template.schedule.scheduleList = function () {
  return Session.get('schedule');
} 

//Schedule 
Template.schedule.rendered = function(){

}

Template.schedule.isSelected = function(){
  return this.name == Session.get('selectedTrain')
}


Template.schedule.notifications = function(){
  return Delays.find();
}


Template.schedule.events({
  "submit #form-search": function(e){
    e.preventDefault();
    var start = $('#selectstart').val();
    var end = $('#selectdestination').val();
    var date = new Date().getTime();
    NProgress.start();
    Meteor.call("getShedule", date, start, end, function(err, result){
      Session.set("schedule", result)
      if(result.length == 0){
        $('#empty-shedule').show();
        $('#empty-query').hide();
      } else{
        $('#empty-shedule').hide();
        $('#empty-query').hide();
      }
      NProgress.done()
    });
    return false;
  }, "click .report-delay": function (e) {
      e.preventDefault();
      var html = $('#report-form').html();
      Session.set('selectedTrain', this);

        var reportDialog = bootbox.dialog({
          message: html,
          title: "Report a Train Delay",
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
                var train = Session.get('selectedTrain');
                train.delayedBy = $('#delayed-mins').val();
                train.delayedType = "delayed";
                delete train._id;
                Delays.insert(train, function(err, result){
                  console.log(err, result)
                });
              }
            }
          }
        });
    return false
  }
});

Template.schedule.rendered = function() {
  $('.footable').footable();
}
