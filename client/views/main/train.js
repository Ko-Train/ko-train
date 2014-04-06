Template.train.trainInfo = function  () {
  var trainName = Router.current().params._id; 
  return Delays.findOne({name:trainName});
}