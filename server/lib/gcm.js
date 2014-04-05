BroadCastGCMMessage = function(message){
  var GCM = Meteor.require('gcm').GCM;

  var apiKey = 'AIzaSyA_iYqv4it9XSNm5f_fLY_rMbI1etPnETs';
  var gcm = new GCM(apiKey);
  console.log(gcm)
  
  var message = {
      registration_id: 'APA91bFT1ghd72KkzNK_SYl1FfgyFg7elp78lJbhTYPhtqIfoO2L84zNGEBojA0fuSJGDX9nY7v8ltiGaYCwLxH56DS_0C-3YWJGqo3jNxpTbC8iqGXHZslX42Hdgcxqi0tCwmO3gUHLkI7TrwqOZxDfKKj0nDQAYQ', // required
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