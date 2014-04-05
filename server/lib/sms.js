BroadcastSMS = function(message, phonenumber) {
	// Depends on smsgateway.me API v2. Sends sms via Android Device. Not a typical SMS gateway. 
	var URL = 'http://v2.smsgateway.me/API/Send/Single.php?Username='+Config.sms_gateway_username+'&Password='+Config.sms_gateway_password+'&Message='+message+'&Number='+phonenumber;
  console.log(URL);
	try{
		res = Meteor.http.get(URL);

		if (res && res.Success == true) {
			//console.log('Success')
			//console.log(res);
			return true;
		}
			
	}catch(e){
		console.log('Error occured while sending sms.');
	}	
	
}