    angular.module('myApp',[])
    .factory('Data',function()
    {
        return [{name:'li',city:'chicago'},
            {name:'wang',city:'new york'},
            {name:'zhao',city:'Princeton'}]
    })
    .filter('filterCity',function(){
    return function(user){
        let city=[];
    // angular.forEach(user,function (o) {
    //     if(o.city==='Princeton')
    //     city.push(o);
    // })
        for( let i=0;i<user.length;i++)
        {
            if(user[i].city==='Princeton')
                city.push(user[i]);
        }
    return city;
    }
})
.controller('firstCtrl',function($scope,Data){
    console.log(Data);
    $scope.userData=Data;
})