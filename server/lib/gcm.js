BroadCastGCMMessage = function(message){
  var GCM = Meteor.require('gcm').GCM;

  var apiKey = 'AIzaSyA_iYqv4it9XSNm5f_fLY_rMbI1etPnETs';
  var gcm = new GCM(apiKey);

  var devices = Androidsubs.find({}, {limit: 990});
  var regIds = [];
  devices.forEach(function(d){
    regIds.push(d.registrationId)
  });
  
  var message = {
      registration_id: regIds, // required
      collapse_key: "1314", 
      "data.trainId": "1314",
      "data.type": "delayed", // delayed /cancelled
      "data.trainDesc": "Matara - colombo",
      "data.delayTime":"15"
  };

  gcm.send(message, function(err, messageId){
    if (err) {
        return err;
        console.log("Something has gone wrong!");
    } else {
        console.log("Sent with message ID: ", messageId);
        return messageId;
    }
  });
}