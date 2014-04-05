Meteor.startup(function(){
  Meteor.call("getAllStations", function(err, result){
    Session.set('stations', result);
  });
});

Template.schedule.stationsList = function () {
  return Session.get('stations');
}

Template.schedule.trainList = function () {
	return Delays.find({}, {sort:{"arrivalTime":-1}});
}



