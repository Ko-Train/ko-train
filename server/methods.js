Meteor.methods({
  "getShedule": function (date, start, end) {

    var result = [];

    var URL = 'http://m.icta.lk/services/railwayservice/getSchedule.php?';
      URL += 'lang=en&startStationCode=FOT&endStationCode=KDT&arrivalTime=01:00:00&depatureTime=22:00:01&currentDate=2010-12-23&currentTime=06:53:00';
    
    var res = Meteor.http.get(URL);

    if (res && res.data)
    {
      result = res.data.trains;
    }
   
    return result;
  },
  "getAllStations" : function() {
    var result = [];
    
    try{
      URL = 'http://m.icta.lk/services/railwayservice/getAllStations.php?lang=en';
      
      var res = Meteor.http.get(URL);
      if (res && res.data){
        result = res.data.stations;
      }   
    
    }catch(e){
      console.log('Error occured');
    }

    return result;
  },
  "BroadCastGCMMessage": BroadCastGCMMessage
}); 
