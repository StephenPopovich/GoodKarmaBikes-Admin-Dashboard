angular.module('adminApp').factory('DataService',
['$http', '$scope',
function ($http, $scope) {

  var factory = {};
  var news = [];

  factory.create = function(data, callback){
    $http.post('/contents/create', data).success(function(output){
      console.log('return value from create request is', output)
    });
  }

  factory.getNews = function(section, callback){
    $http.get('/sections/' + section).success(function(output){
      console.log('return value from getNews is', output)
    });
  }

  return factory;

}]);
