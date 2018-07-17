function WhoAmI()
{
    alert("I'm "+this.name+ ' of ' + typeof this);
}
WhoAmI();

var BillGates = {name: 'Bill Gates'};
// BillGates.WhoAmI=WhoAmI;
// BillGates.WhoAmI();
var LLLLL={name:'New person'};
var SteveJobs={name:'Steve Jobs'};
SteveJobs.WhoAmI=WhoAmI;
SteveJobs.WhoAmI();

SteveJobs.WhoAmI.call(LLLLL);
// WhoAmI.call({name:'ssss'});