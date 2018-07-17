//first declare the request attributes
var header=document.querySelector('header');
var section=document.querySelector('section');
var request=new XMLHttpRequest();
var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
request.open('GET',requestURL);
request.responseType='json';
request.send();
request.onload=function()
{
    var superHeros=request.response;
    getHeader(superHeros);
    getInfo(superHeros);
}
function getHeader(jsonObj){

    var title=document.createElement('h1');
    title.textContent=jsonObj.squadName;
    header.appendChild(title);
    var para=document.createElement('p');
    para.textContent='Hometown:'+jsonObj.homeTown+'// Formed: '+jsonObj.formed;
    header.appendChild(para);
}
function getInfo(jsonObj){
    for(var i=0;i<jsonObj.members.length;i++)
    {
        var titletext=jsonObj.members[i].name;
        var article=document.createElement('article');//这里要注意用article来自动分开三栏
        var mytitle=document.createElement('h2');
        mytitle.textContent=titletext;

        article.appendChild(mytitle);
        var p1=document.createElement('p');
        p1.textContent=jsonObj.members[i].secretIdentity;
        article.appendChild(p1);
        var p2=document.createElement('p');
        p2.textContent=jsonObj.members[i].age;
        article.appendChild(p2);
        var p3=document.createElement('p');
        p3.textContent='Superpowers:'
        article.appendChild(p3);

        var ul=document.createElement('ul');
        for(var j=0;j<3;j++)
        {
            var li=document.createElement('li');
            li.textContent=jsonObj.members[i].powers[j];
            ul.appendChild(li);
        }
        article.appendChild(ul);
        section.appendChild(article);
    }
}