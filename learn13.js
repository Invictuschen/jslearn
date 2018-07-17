var app=angular.module('myApp',[]);
app.directive("myDirective", function(){
    return{
        restrict:"ECMA",
        priority:1,
        template : "<div>What the huak<span ng-transclude></span> </div>",
        transclude:true
    }

});
app.directive("myDirective1", function(){
    return{
        restrict:"ECMA",
        template : "<div>What the huak1</div>",
        priority:3,
        terminal:true//小于带terminal的属性的priority的directive将不再执行
    }

});