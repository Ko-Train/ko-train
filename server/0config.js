Config = {
	'sms_gateway_username':'actionlistner@gmail.com',
	'sms_gateway_password':'hackone'
};

HTTP.methods({
  '/collectionapi/androidsubs': {
    method: function(data) {
      if(this && this.query && this.query.registrationId){
        Androidsubs.insert({registrationId: this.query.registrationId});
      }
    },
  }
});