var stations =  function () {
  return Session.get('stations');
}

Template.list.stationsList = stations;

Template.list.scheduleList = function () {
  return Session.get('items');
} 

Template.list.error = function () {
  return Session.get('flash');
}

Template.list.notifications = function(){
  return Delays.find();
}

// List
Template.list.events({
  "submit #form-search": function(e){
    e.preventDefault();
    var start = $('#selectstart').val();
    var end = $('#selectdestination').val();
    var date = $('#inputDate').val();
    if (date == '')
    {
      Session.set('flash', 'Please use a valid date.');
      return false;
    }
    
    Meteor.call("getShedule", date, start, end, function(err, result){
      console.log(err, result);
      Session.set('items', result);
    });
    return false;
  }
});

