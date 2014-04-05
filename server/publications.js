Meteor.publish('delays',function(){
  return Delays.find();
});
