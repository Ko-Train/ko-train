Template.train.trainInfo = function  () {
  var trainName = Router.current().params._id; 
  console.log(Delays.findOne({name:trainName}))
  return Delays.findOne({name:trainName});
}