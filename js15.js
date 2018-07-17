angular.module('myApp',[])
    .directive('bookList',function(){
        return{
            restrict:'ECAM',
            controller:function($scope){
                console.log($scope);

                //&books
            //&scope.books =$scope.a();
            //console.log($scope.a);


            //=books;
            //$scope.books=$scope.b;
            //$scope.b.push({name:'nodejs'});

                //@parentTitle
                console.log($scope.c)
        },
        scope:{
            // Encodes the parent's property book
            // as a function called a()

            // a:'&books'
            // books is not the parent
            // but is a property of the current directive
            // It reflects to the HTML page


            // two way data binding b=parentBooks
            // b:'=parentBooks'
            c:'@parentTitle'
            },
            controllerAs:'bookListController',
            template: '<div><ul><li ng-repeat="book in books">' + '{{book.name}}</li></ul></div>',
            replace:true
        }

    })
    .controller('firstController',['$scope',function($scope){
        console.log($scope);
        $scope.books=[
            {
                name:'HTML5'
            },
            {
                name:'JavaScript'
            },
            {
                name:'Java'
            },


        ];
        $scope.title='Ce'

    }])