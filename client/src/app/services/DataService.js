angular.module('adminApp')
.factory('DataService',
  function ($http) {

  var factory = {};
  var news = [];

  factory.create = function(data, callback){
    console.log("getting to create service from controller")
    $http.post('/contents/create', data).success(function(output){
      console.log('return value from create request is', output)
    });
  }

  factory.getNews = function(section, callback){
    console.log("getting to getNews service from the controller")
    $http.get('/sections/' + section).success(function(output){
      console.log('return value from getNews is', output)
    });
  }

  return factory;

});
