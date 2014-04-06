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
});


Meteor.publish('userPhones',function(){
  return UserPhones.find();
});

UserPhones.allow({
  insert: function (userId, phone) {
    return true;
  },
  update: function(){
    return true;
  }
})