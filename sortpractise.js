// 01
function Singleton(){
    if(typeof Singleton.instance==='object')
    {
        return self;
    }
    function self(){
        Singleton.instance=this;
        return Singleton.instance;
    }

}

//02
var Mysingleton=(function(){
    var instance;
    function createInstance(){
        function privateMethod(){
            console.log('This is private method');
        }
        var privateVariable='This is private variable';

        return{
            publicMethod:function()
            {
                console.log('This is public method');
            },
            publicVariable:'This is public variable'

        }
    }
    return{
         getInstance:function()
         {
             if(!instance)
             {
                 instance=createInstance();
             }
             return instance;
         }
    }


})();




//03
function find(list)
{
    var length=list.length;
    var occur={};
    var max=0;
    var maxoccur=0;
    for(var i=0;i<length;i++)
    {
        if(typeof occur[list[i]]=='undefined')
        {occur[list[i]]=0;}
        occur[list[i]]=occur[list[i]]+1;
        if(occur[list[i]]>max)
        {
            max=occur[list[i]];
            maxoccur=list[i];
        }
    }
    if(max>length/2)
    {
        return maxoccur;
    }
    return null;
}


//04

function findmis(list)
{
    for(var i=0;i<list.length;i++)
    {
        if(list[i]!=i)
        {
            return list[i];
        }
    }
    return null;
}

// 05

var sentence='It shouldn’t! Menstrual odor happens when menstrual fluid comes in contact with air. When menstrual fluid is absorbed within the vagina, like through a tampon, it is not exposed to the air, so there shouldn’t be an odor. If you’re feeling worried, just be sure' +
    ' to change your pads and tampons frequently to help keep odor at bay.';
var nsen=sentence.split('.');
var nnsen=[];
for(var i=0;i<nsen.length;i++)
{

}
// 06

var isHappy = function(n) {

    function splitAndSquareNum(num) {
        let split = num.toString().split('')
        let total = 0
        for (let i = 0; i < split.length; i++) {
            let parsed = parseInt(split[i])
            total += Math.pow(parsed, 2)
        }
        return total
    }

    const storage = {}
    let current = splitAndSquareNum(n)

    while (current !== 1) {
        if (current in storage) {
            return false
        } else {
            storage[current] = 1
            current = splitAndSquareNum(current)
        }
    }

    return true
};



function isHappy(n){
    function seperate(num) {
        var sep = num.toString();
        var sum=0;
        for (var i = 0; i < sep.length; i++)
        {
            sep[i].parseInt()
        }
    }
}



function bubblesort(list)
{
    var exchange=0;
    for(var i=0;i<list.length;i++)
    {
        for(var j=0;j<i;j++)
        {
            if(list[i]<list[j])
            {
                exchange=list[i];
                list[i]=list[j];
                list[j]=exchange;
            }
        }
    }
    return list;
}







var list=[1,2,4,5,52,4,23,56,7];

//穷人版quicksort
function quickSort(list,left,right)
{
    var i,j,change=0;
    i=left;
    j=right;
    var pivot=list[Math.floor((left+right)/2)];//这个地方一定要用好math.floor 而不是Number强转
    while(i<=j)
    {
        while(list[i]<pivot)
        {
            i++;
        }
        while(list[j]>pivot)
        {
            j--;
        }
        if(i<=j)
        {
            change=list[i];
            list[i]=list[j];
            list[j]=change;
            i++;
            j--;
        }
    }
    if(j>left)
    {
        quickSort(list,left,j);
    }
    if(i<right)
    {
        quickSort(list,i,right);
    }
}

//好理解简化版
function qksort(list,left,right)
{
    if(left>=right)
    {
        return;
    }
    var i=left;
    var j=left-1;
    var pivot=right;
    for(;i<=pivot;i++)
    {
        if(list[i]<=list[pivot])
        {
            j=j+1;
            var temp=list[j];
            list[j]=list[i];
            list[i]=temp;
        }
    }
    qksort(list,left,j-1);
    qksort(list,j+1,right);
}




//巨简化版本
function qsort(list,left,right)
{
    if(left>=right)
        return
    var j=left-1;
    for(var i=left;i<=right;i++)
        if(list[i]<=list[right])
        swap(list,++j,i);
    qsort(list,left,j-1);
    qsort(list,j+1,right);
}
function swap(array,a,b){
    var temp=array[a];
    array[a]=array[b];
    array[b]=temp;
}


function qksort(list,left,right)
{
    var i=left;
    var j=left-1;
    var pivot=right;
    for(;i<pivot;i++)
    {
        if(list[i]<list[pivot])
        {
            j++;
            var temp=list[i];
            list[i]=list[j];
            list[j]=temp;
        }
    }
    qksort(list,left,j-1);
    qksort(list,j+1,right);
}

//mergesort
function merge(left,right)
{
    var result=[];
    var il=0;
    var ir=0;//这个地方分写两个都是0很重要，因为,之后只会给最后一个赋值，相当于il=undefined
    while(il<left.length&&ir<right.length)
    {
        if(left[il]<right[ir])
        {
            result.push(left[il++]);
        }else
        {
            result.push(right[ir++]);
        }
    }
    return result.concat(left.slice(il)).concat(right.slice(ir));
}
function mergeSort(Array)
{
    if(Array.length<2)
        return Array;
    var left=[];
    var right=[];
    var middle=(Math.floor(Array.length/2));
    left=Array.slice(0,middle);
    right=Array.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}


var list1=[3,5,1,3,5,78,8,2];
function qksort(list,left,right)
{
    if(left>=right)
        return;
    var j=left-1;
    for(var i=left;i<=right;i++)
    {
        if(list[i]<=list[right])
        {
            j++;
            temp=list[i];
            list[i]=list[j];
            list[j]=temp;
        }
    }
    qksort(list,j+1,right);
    qksort(list,left,j-1);
}

function merge(left,right)
{
    var result=[];
    var il,ir=0;
    while(il<left.length&&ir<right.length)
    {
        if(left[il]<right[ir])
        {
            result.push(left[il++]);
        }else
        {
            result.push(right[ir++]);
        }
    }
    return result;
}
function mergeSort(Array)
{
    if(Array.length<2)
        return array;
    var left,right;
    var middle=Math.floor(Array.length/2);
    left=Array.slice(0,middle);
    right=Array.slice(middle);
    merge(mergeSort(left),mergeSort(right));
}
var usedchars=[];
var permarr=[];
function permute(input) {
 var i,ch;
 for(i=0;i<input.length;i++)
 {
     ch=input.splice(i,1)[0];
     usedchars.push(ch);
     if(input.length==0)
     {
         permarr.push(usedchars);
     }
     permute(input);
     usedchars.pop();
     input.splice(i,0,ch);
 }
 return permarr;
}

















