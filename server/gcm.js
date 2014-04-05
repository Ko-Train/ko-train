BroadCastGCMMessage = function(message){
  var GCM = Meteor.require('gcm').GCM;
  console.log(GCM)

  var apiKey = 'AIzaSyA_iYqv4it9XSNm5f_fLY_rMbI1etPnETs';
  var gcm = new GCM(apiKey);
  console.log(gcm)
  
  var message = {
      registration_id: 'APA91bGjymEXK3_QvEWRNGNeuOns6U9jP2nRkpr4frCeWFqKHjZapJmQbz_yVDA3vLhPkj72FOffYGK4NeaaXAqcxXo2UR8JNrrvAW1DTkgggKrR2Yj7H-iqYRb3AQVHdn3qabc91Ytq0z4woSH2yMih_ENKJ5R1EFi20XWmHDIss-RB4PLliQk', // required
      collapse_key: 'Collapse key', 
      'data.key1': 'value1',
      'data.key2': 'value2'
  };

  gcm.send(message, function(err, messageId){
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Sent with message ID: ", messageId);
    }
  });
}