BroadCastGCMMessage = function(delay){
  var GCM = Meteor.require('gcm').GCM;

  var apiKey = 'AIzaSyA_iYqv4it9XSNm5f_fLY_rMbI1etPnETs';
  var gcm = new GCM(apiKey);

  var devices = Androidsubs.find({}, {limit: 990});
  var regIds = [];
  devices.forEach(function(d){
    // regIds.push(d.registrationId)
  
    var message = {
        registration_id: d.registrationId, // required
        collapse_key: "1314", 
        "data.trainId": delay.name,
        "data.type": "delayed", // delayed /cancelled
        "data.trainDesc": delay.depatureTime + " " + delay.toTrStationName,
        "data.delayTime": delay.delayedBy
    };

    gcm.send(message, function(err, messageId){
      if (err) {
          console.log("Something has gone wrong!", err);
          return err;
      } else {
          console.log("Sent with message ID: ", messageId);
          return messageId;
      }
    });
  });
}