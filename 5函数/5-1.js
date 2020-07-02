function creatUser(loginId, loginPwd, nickName) {
    return {
        loginId: loginId,
        loginPwd: loginPwd,
        nickName: nickName,
        id: Math.random()
    }
}
console.log(creatUser("123", "1212", "aaa"))
    // 简写后

function creatUser1(loginId, loginPwd, nickName) {
    return {
        loginId,
        loginPwd,
        nickName,
        id: Math.random()
    }
}
console.log(creatUser1("1231", "12121", "不不不"))

const user = {
    name: "继承",
    age: 100,
    sayHello: function() {
        console.log(this.name, this.age)
    }
}
user.sayHello();
const user1 = {
    name: "继承",
    age: 100,
    sayHello() {
        console.log(this.name, this.age)
    }
}
user1.sayHello();

const prop1 = "name";
const prop2 = "age";
const prop3 = "sayHello";

// 以前写法
const user2 = {

}
user2[prop1] = "继承";
user2[prop2] = 10;
user2[prop3] = function() {
    console.log(user2[prop1], user2[prop2])
}
user2[prop3]();

// 现在ES6
const user3 = {
    [prop1]: "继承",
    [prop2]: 18,
    [prop3]() {
        console.log(this[prop1], this[prop2])
    }
}
user3.sayHello();