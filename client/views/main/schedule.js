Meteor.startup(function(){
  Meteor.call("getAllStations", function(err, result){
    Session.set('stations', result);
  });
});

Template.schedule.stationsList = function () {
  return Session.get('stations');
}

Template.schedule.events({
  "submit #form-search": function(e){
    e.preventDefault();
    var start = $('#selectstart').val();
    var end = $('#selectdestination').val();
    var date = new Date();
    Meteor.call("getShedule", date, start, end, function(err, result){
      console.log(err, result)
    });
    return false;
  }
});

