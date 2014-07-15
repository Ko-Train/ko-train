FastRender.onAllRoutes(function(path) {
  this.subscribe('delays');
  this.subscribe('stations');
});  
