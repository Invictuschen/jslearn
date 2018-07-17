var i = 0;
var myApp = angular.module('myApp',[])
    .directive('customTags',function(){
        return {
            template : '<div>{{user.name}}</div>',
            replace : true,
            compile : function(tElement,tAttrs,transclude){
                console.log("tElement:",tElement);
                console.log("tAttrs:",tAttrs);
                console.log(transclude);
                tElement.append(angular.element('<div>{{user.name}}' + '{{user.count}}</div>'));

                console.log('customTags compile phase...');

                return {
                    pre:function preLink(scope,iElement,iAttrs,controller) {
                        console.log('customTags preLink..')
                    },
                    post:function postLink(scope,iElement,iAttrs,controller) {
                        iElement.on('click',function(){
                            scope.$apply(function () {
                                scope.user.name = 'click after';
                                scope.user.count = ++i;
                            });
                        })

                        console.log('customTags all child directive link..')
                    }
                }
            },

            link:function () {
                iElement.on('click',function(){
                    scope.$apply(function () {
                        scope.user.name = 'click after';
                        scope.user.count = ++i;
                    });
                })
            }
        }
    })

    .directive('customTags2',function () {
        return {
            restrict :'ECMA',
            replace : true,
            compile:function () {
                //compile phase...
                console.log('customTags2 compile phase...');

                return {
                    //before directive link to
                    pre:function preLink() {
                        console.log('customTags2 preLink..')
                    },

                    post:function postLink() {
                        console.log('customeTags2 postLink..')
                    }
                }
            }
        }
    })

    .directive('customTags3',function () {
        return function () {

        }
    })

    .controller('firstController',['$scope', function ($scope) {
        $scope.users = [
            {
                id:10,
                name:'Jerry'
            },
            {
                id:20,
                name:'Tom'
            },
            {
                id: 30,
                name: 'landlord'
            }
            // },
            // {
            //     id:40,
            //     name:'landlord'
            // }
        ];
    }]);