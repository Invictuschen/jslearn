var app=angular.module('myApp',[])
app.controller('firstCtrl',function($scope){
    $scope.$on('eventName',function(event, args){
        $scope.message=args.message;
        console.log($scope.message);
    })
})
app.controller('secCtrl',function($scope){
    $scope.handleClick=function(msg){
        $scope.$emit('eventName',{message:msg})
    }
})