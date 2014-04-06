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
  "getAllStations" : function() {
    var result = [];
    var new_result = [];
    try{
      URL = 'http://m.icta.lk/services/railwayservice/getAllStations.php?lang=en';
      
      var res = Meteor.http.get(URL);
      if (res && res.data){
        result = res.data.stations;

        result.forEach(function(row,index) {

          if (row && row.stationName.trim() != '')
          {
            row.stationName = ToTitleCase(row.stationName);
            new_result.push(row);
          }
        });
      }   
    
    }catch(e){
      console.log('Error occured');
    }

    return new_result;
  },
  "BroadCastGCMMessage": BroadCastGCMMessage,
  "BroadcastSMS": BroadcastSMS,
}); 
