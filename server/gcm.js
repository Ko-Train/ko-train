BroadCastGCMMessage = function(message){
  var GCM = Meteor.require('gcm').GCM;

  var apiKey = 'AIzaSyA_iYqv4it9XSNm5f_fLY_rMbI1etPnETs';
  var gcm = new GCM(apiKey);
  console.log(gcm)
  
  var message = {
      registration_id: 'APA91bH4dxvUuiFzfhnxIHVkP0lQvcTWyreC1JDdcnIXMvvvySdsoGhURy7h6FEUOTP406904vrrS6K6v2EnEevClJcQfaYlGZqB7Vl88cn_Pm1waQ3U74uhbeazRbM346qTKH0uWhBlIZjhN2WBQN3F5Jy1S6EuddizKTCs-oyIa-Qrxmhnays', // required
      collapse_key: "1314", 
      'data': {
        trainId: "1314",
        type: "delayed", // delayed /cancelled
        trainDesc: "Matara - colombo",
        delayTime:"15"
      }
  };

  gcm.send(message, function(err, messageId){
    if (err) {
        console.log("Something has gone wrong!");
    } else {
        console.log("Sent with message ID: ", messageId);
    }
  });
}