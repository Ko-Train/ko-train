BroadcastSMS = function(message, phonenumber) {
	this.unblock();
	// Depends on smsgateway.me API v2. Sends sms via Android Device. Not a typical SMS gateway. 
	var URL = 'http://v2.smsgateway.me/API/Send/Single.php?Username='+Config.sms_gateway_username+'&Password='+Config.sms_gateway_password+'&Message='+message+'&Number='+phonenumber;
	try{
		res = Meteor.http.get(URL);

		if (res && res.Success == true) {
			return true;
		}
			
	}catch(e){
		console.log('Error occured while sending sms.');
	}	
	
}