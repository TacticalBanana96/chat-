angular.module('starter.controllers', ["ionic",'firebase'])

.controller('ChatsCtrl', ['$scope', '$firebaseArray', '$rootScope',
      function($scope, $firebaseArray, $rootScope) {

                var ref = new Firebase('https://sizzling-torch-8150.firebaseio.com/') //USE OUR Firebase FOR CHAT!!
                $scope.user_id = 1;
                $scope.group_id = 1;
                var sync = $firebaseArray(ref);
                sync.$loaded(function (data) {
                    $scope.chats = data;
                });




                $scope.sendChat = function(chat){

                  //if($rootScope.authData){
                  /*  $scope.chats.$add({
                      user: $rootScope.authData.facebook.username, //SWITCH TO FACEBOOK!!!
                      message: chat.message,
                      imgURL: $rootScope.authData.facebook.cachedUserProfile.profile_img_url
                    });
                  */

                  $scope.chats.$add({
                      user_id: $scope.user_id, //SWITCH TO FACEBOOK!!!
                      message: chat.message, 
                      group_id: $scope.group_id, 
                      timestamp: new Date().getTime()
                    });
                    chat.message ="";
                  //}

                }


}])



.controller('AccountCtrl', function($scope, $rootScope) {
  /*$scope.login = function(){
    var ref = new Firebase('https://sizzling-torch-8150.firebaseio.com/');//ONCE AGAIN USE OUR FIREBASE
    ref.authWithOAuthPopup('facebook' ,function(error, authData){
      if(error){
        alert('There was an ERROR');
      }
      else{
        alert('Ready');
      }
      $rootScope.authData = authData;
    }); //switch to FACEBOOK
  }
*/
});
