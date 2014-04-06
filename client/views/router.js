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

  this.route('train', {
    path: '/train/:_id',
    template: 'train'
  });
});

Router.map(function() {
  this.route('list',{
    path:'/list',
    layoutTemplate:"home",
    template:'list',
  });
});