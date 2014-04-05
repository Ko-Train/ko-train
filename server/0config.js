Config = {
	'sms_gateway_username':'actionlistner@gmail.com',
	'sms_gateway_password':'hackone'
};


// API
HTTP.methods({
  '/collectionapi/androidsubs': {
    method: function(data) {
      var id = data.registrationId;
      if(id){
        console.log(id)
        Androidsubs.insert({registrationId: id});
      }
    },
  }
});