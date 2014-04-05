Meteor.startup(function(){
  Meteor.call("getAllStations", function(err, result){
    //console.log(result);
    Session.set('stations', result);
  });
});

var stations =  function () {
  return Session.get('stations');
}

Template.schedule.stationsList = stations;

Template.list.stationsList = stations;

Template.list.scheduleList = function () {
  return Session.get('items');
} 
//Schedule 
Template.schedule.rendered = function(){

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

// List
Template.list.events({
  "submit #form-search": function(e){
    e.preventDefault();
    var start = $('#selectstart').val();
    var end = $('#selectdestination').val();
    var date = $('#inputDate').val();
    Meteor.call("getShedule", date, start, end, function(err, result){
      console.log(err, result);
      Session.set('items', result);
    });
    return false;
  }
});

