Meteor.publish('delays',function(){
  return Delays.find();
});

Delays.allow({
  insert: function(userId, delay){
    Meteor.call('SendBroadCastMSG', delay);
    return true;
  },
  update: function(){
    return true;
  }
})