var foo=[];
for(var i=0;i<10;i++)
{
    (function(y){
        y=i;
        foo[i]=function()
        {
            return y;
        }
    })(i);
}
每次循环之时，y都重新被赋值为i的值，而最后返回y  所以数组中每项的值都不同
foo[4]//4

var boo=[];
for(var i=0;i<10;i++)
{
    boo[i]=function()
    {
        return i;
    };
}

boo[4]()//10

因为每个boo[i]最终return的都是i 而i最后是10


