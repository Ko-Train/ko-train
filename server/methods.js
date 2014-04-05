Meteor.methods({
  "getShedule": function (date, start, end) {
    // var soap = Meteor.require('soap-attrib');

    // var url = 'http://lankagate.gov.lk:9080/services/RailwayWebServiceV2Proxy?wsdl';
    // var args = {name: 'value'};
    // soap.createClient(url, function(err, client) {
    //   console.log('***************', err, client)
    //     // client.MyFunction(args, function(err, result) {
    //     //     console.log(result);
    //     // });
    // });

    var result = [{
      startStationArrivalTime: 1396691573895,
      startStationDepartureTime: 1396691573895,
      trainStartsFrom: "AVISAWELLA",
      trainRunsTo: "COLOMBO FORT",
      destReachingTime: 1396691573895,
      availableDaysInWeek: "MONDAY TO FRIDAY", 
      trainType: "COLOMBO COMMUTER",
      trainNo: 1023,
    }, {
      startStationArrivalTime: 1396691573895,
      startStationDepartureTime: 1396691573895,
      trainStartsFrom: "AVISAWELLA",
      trainRunsTo: "COLOMBO FORT",
      destReachingTime: 1396691573895,
      availableDaysInWeek: "MONDAY TO FRIDAY", 
      trainType: "COLOMBO COMMUTER",
      trainNo: 1023,
    }, 
    {
      startStationArrivalTime: 1396691573895,
      startStationDepartureTime: 1396691573895,
      trainStartsFrom: "AVISAWELLA",
      trainRunsTo: "COLOMBO FORT",
      destReachingTime: 1396691573895,
      availableDaysInWeek: "MONDAY TO FRIDAY", 
      trainType: "COLOMBO COMMUTER",
      trainNo: 1023,
    }];
    return result;
  },
  "getStationsList" : function(){
    var result = [
      {name: "ABANPOLA", code:"ABN"},
      {name: "AHANGAMA", code:"ANM"},
      {name: "AHUNGALLE", code:"AUH"},
      {name: "AKBOPURA", code:"APR"}
    ]
    return result;
  }
});