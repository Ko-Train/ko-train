Meteor.methods({
  "getShedule": function (timestamp, start, end) {
    // var d = new Date(date);
    var date = moment(timestamp).format("MM-DD-YYYY")
    var d = new Date(timestamp)
    var current_time=d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    //console.log(current_time);
    var result = [];

    var URL = 'http://m.icta.lk/services/railwayservice/getSchedule.php?';
      URL += 'lang=en&startStationCode='+start+'&endStationCode='+end+'&arrivalTime=00:00:00&depatureTime=23:59:59&currentDate='+date+'&currentTime='+current_time;
    
    var res = Meteor.http.get(URL);

    if (res && res.data)
    {
      result = res.data.trains;
    }
   
    return result;
  },
  "SendBroadCastMSG": function(delay){
    this.unblock();
    BroadCastGCMMessage(delay);
    var message = delay.depatureTime+" " + delay.toTrStationName + " train will be "+ delay.delayedBy + " minutes late today"
    BroadcastSMS(message, "+94713318498");
  }
}); 


Meteor.startup( function() {
    var result = [];
    var new_result = [];
    try{
      if(Stations.find().count() == 0){
        var URL = 'http://m.icta.lk/services/railwayservice/getAllStations.php?lang=en';
        var res = Meteor.http.get(URL);
        if (res && res.data){
          result = res.data.stations;

          result.forEach(function(row,index) {

            if (row && row.stationName.trim() != '')
            {
              row.stationName = ToTitleCase(row.stationName);

              Stations.insert({
                _id: row.stationCode,
                stationName: row.stationName
              });
            }
          });
        }
      }
    
    }catch(e){
      console.log('Error occured');
    }
    return new_result;
});