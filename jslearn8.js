// var anObject={};
// anObject.aProperty='Property of object';
// anObject.aMethod=function(){alert('Method of object')};
//
// alert(anObject['aProperty']);
// // anObject['aMethod'];//想用array方式来调用函数，也要对函数加()
// anObject['aMethod']();
//
// for (var a in anObject)
// {
//     alert(a+' is a ' + typeof anObject[a]);//方法遍历时在用其对象时，要给予其下标
// }


var aFunction=function(){};
aFunction.aProperty='Property of function';
aFunction.aMethod=function(){alert('Method of function')};

alert(aFunction['aProperty']);
aFunction['aMethod']();

for (var a in aFunction)
{
    alert(a+ ' is a '+ typeof aFunction[a]);
}


//对象具有对象数组二象性！