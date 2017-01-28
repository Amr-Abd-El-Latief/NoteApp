/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

angular.module('NoteWrangler')
.controller('NotesShowController', ['$routeParams','$http',function($routeParams,$http) {
var controller = this;
  $http({method:'GET',url:'/notes/' + $routeParams.id}).success(function(data){
  controller.note = data;
});
}]);