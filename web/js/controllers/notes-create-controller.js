/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


angular.module('NoteWrangler')
.controller('NotesCreateController', [function() {
  this.saveNote = function(note){
    $http({method: 'POST', url: '/notes', data: note});
  };
}]);
