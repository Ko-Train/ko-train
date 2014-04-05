Meteor.methods("getShedule", function (date, start, end) {
  //call the web service to get shedule
  var Soap = Meteor.require('soap');
  var soap = new Soap();
});