function Person(first, last, age, gender, interests) {

    this.firstname=first;
    this.lastname=last;
    this.age=age;
    this.gender=gender;
    this.interests=interests;
    // 属性与方法定义

};
var person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);

var person3=new person1.constructor('Lilt','ddd',22,'female',['fucking','skating']);//可以用于找不到构造函数的情况