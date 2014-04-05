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

Router.map(function() {
  this.route('list',{
    path:'/list',
    layoutTemplate:"home",
    template:'list',
  });
});