// 构造函数
function Person(firstName, lastName) {
    // 判断是否使用new的方式调用函数

    // 过去的判断方式 判断原型链上手否有新的指向
    // if (!(this instanceof Person)) {
    //     throw new Error("该函数没有使用new来调用")
    // }
    // console.log(new.target)
    if (new.target === undefined) {
        throw new Error("该函数没有使用new来调用")
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${lastName}`;
}
const p1 = new Person("圆", "行");
console.log(p1);

console.log(Person("圆", "行"))