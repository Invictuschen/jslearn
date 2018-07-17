// Q1
function add(x,y){
    return x+y;
}
function add(x){
    return function(y)
    {
        return x+y;
    }
}
// Q2
var fil=function(value){
    return value<3;
}
var array1=[1,3,5,7]
array1.filter(fil);

// Q3
var x='aaabbaaaa';

function count(x){
    var result=x[0];
    var counter=1;
    for(var i=1;i<x.length;i++)
    {

        if(x[i]==x[i-1])
        {
            counter++;
        }
        else{
            result+=counter+x[i];
            counter=1;

        }

    }
        result+=counter;
        return result;
}

var list = [

    {user:"mike", age:19},

    {user:"mike", age:21},

    {user:"mike", age:19},

    {user:"Dave", age:31},

    {user:"Tom", age:18},

    {user:"Tom", age:18},
];

var counts = {};

for (var i = 0; i < list.length; i++) {
    var key = original[i][0];
    if (counts[key]) {
        counts[key]++;
    } else {
        counts[key] = 1;
    }
}
final = [];
for (var key in counts){
    final.push([key, counts[key]]);
}

// Q4
var list = [

    {user:"mike", age:19},

    {user:"mike", age:21},

    {user:"mike", age:19},

    {user:"Dave", age:31},

    {user:"Tom", age:18},

    {user:"Tom", age:18},

];

var counts={};

function groupcount(list, attr)
{
    for (var i = 0; i < list.length; i++) {
        var key = list[i][attr];
        if (counts[key]) {
            counts[key]++;
        } else {
            counts[key] = 1;
        }
    }
    return counts;
}


// Q5
var list = [

    {user:"mike"},

    {user:"mike"},



    {user:"Dave"},

    {user:"Tom"},

    {user:"Tom"},
    {user:"mike"},

];
list.sort(function(a, b) {
    var nameA = a.user.toUpperCase(); // ignore upper and lowercase
    var nameB = b.user.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }


// names must be equal

    return 0;
});

function removeDup(list)
{
    var first=list.pop();
    var result=[];
    result.push(first);
    while(list.length!=0)
    {
        var next=list.pop();
        if(next.user==first.user)
        {
            continue;
        }
        else
        {
            result.push(next);
            first=next;
        }
    }
    return result;
}


//Q6
var x=new Object();
var x=Object.create(y);

// 07
<style>
li{
    float:left;
}
</style>
<ul style="list-style-type: none;">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
    <li>5</li>
    <li>6</li>
    <li>7</li>
    <li>8</li>
    <li>9</li>
    <li>0</li>
    </ul>

//08

list=[1,2,3,4,5,6,7,8,9];
var i=0;
var timer=setInterval(function(){console.log(i);i=i+1;if(i==list.length)
{
    clearInterval(timer)
}},2000)