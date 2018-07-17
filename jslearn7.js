// 01

var ol=document.querySelector('ol');
var li=document.createElement('li');
ol.appendChild(li);


//02

var ol=document.querySelector('ol');
var li1=ol.firstChild.nextSibling;
li1.textContent='Item A';
li1.nextSibling.nextSibling.textContent='Item B';
li1.nextSibling.nextSibling.nextSibling.nextSibling.textContent='Item C';