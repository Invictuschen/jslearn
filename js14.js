angular.module('myApp',[])
    .controller('firstController',['$scope',function($scope){
        console.log($scope);
        $scope.books=[
            {
                name:'HTML5'
            },
            {
                name:'CSS3'
            },
            {
                name:'JavaScript'
            }

        ];


    }])
    .directive('bookList',function(){
        return{
        restrict:'ECAM',
            controller:function($scope){
            console.log($scope);
        },
        scope:{},
            controllerAs:'bookListController',
            template: '<div><ul><li ng-repeat="book in books">' + '{{book.name}}</li></ul></div>',
            replace:true
        }
    })