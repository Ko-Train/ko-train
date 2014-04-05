Router.configure({
  layoutTemplate: 'home',
  waitOn: [
  function(){
    this.subscribe('delays');
  }
  ]
});


Router.map(function() {
  this.route('home',{
    path:'/',
    layoutTemplate:"home",
    template:'schedule',
  });
});