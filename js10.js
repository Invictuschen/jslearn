var app=angular.module('myApp1', [],function($provide){

    $provide.factory('factory',function()
    {
        var a=new String();
        a='Factory service';
        return a;
    })
    $provide.service('service',function(){
        return ['new York'];
    })
    $provide.provider('provider',function(){
        this.$get=function()
        {
            return 'Provider service';
        }
    })
})

app.controller('firstCtrl',function($scope,factory,provider){//依赖注入要注意
    $scope.input1=factory;
    $scope.input2=provider;

})
app.controller('secCtrl',function($scope){
    $scope.input1=$scope.$parent.input1;
})
app.controller('thirdCtrl',function($scope){
    $scope.input=$scope.$$prevSibling.input1;
})
