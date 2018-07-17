function Person(first, last, age, gender, interests) {
    this.name = {
        first,
        last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
};
Person.prototype.greeting = function() {
    alert('Hi! I\'m ' + this.name.first + '.');
};

// var Teacher=Object.create(Person);//这个只是按照person的构造函数构造出teacher这个对象，但并没有定义teacher的构造函数
// Teacher.prototype.greeting=function()
// {
//     alert('Hi! I\'m teacher' + this.name.first + '.');
// }
// Teacher.subject='Math';

function Teacher(first,last,age,gender,interests,subject)
{
    Person.call(this,first,last,age,gender,interests);//在新函数中若要继承之前对象的函数和属性，需要把
    this.subject=subject;
}
Teacher.prototype.greeting=function(){
    alert('Hi! I\'m teacher ' + this.name.first + '.');
}

function Student( first, last, age, gender, interests)
{
    Person.call(this,first,last,age,gender,interests);
}
Student.prototype.greeting=function()
{
    alert('Yo! I\'m '+this.name.first);
}
Student.prototype.Bio=function(){
    alert(this.name.first+' is '+this.age+' years old. He likes '+this.interests);
}
