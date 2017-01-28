/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('NoteWrangler', ['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    .when('/notes', {
      templateUrl: 'templates/pages/notes/index.html',
      controller : function($http){
        var controller = this;
        
        $http({ method: 'GET', url: '/notes'}).success(function(data){
          controller.notes = data;
          
        });
      },
      controllerAs : 'notesCtrl'

    })
    .when('/users', {
      templateUrl: 'templates/pages/users/index.html'
    }).when('/notes/new',{
        templateUrl: 'templates/pages/notes/edit.html',
      controller : 'NotesCreateController',
      controllerAs : 'NotesCreateController'

  }).when('/',{
     redirectTo: '/users'    
  }).otherwise({
    redirectTo : '/notes'
  })
    ;

}]);
