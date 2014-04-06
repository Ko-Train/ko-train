BroadcastSMS = function(message) {
	// Depends on smsgateway.me API v2. Sends sms via Android Device. Not a typical SMS gateway. 

	var userPhones = UserPhones.find({}, {limit: 990});
	userPhones.forEach(function(user){
		var URL = 'http://v2.smsgateway.me/API/Send/Single.php?Username='+Config.sms_gateway_username+'&Password='+Config.sms_gateway_password+'&Message='+message+'&Number='+user.phone;
		try{
			res = Meteor.http.get(URL);

			if (res && res.Success == true) {
				return true;
			}
				
		}catch(e){
			console.log('Error occured while sending sms.');
		}	
	});
}