// 面向对象中，将下面对一个对象的所有成员的定义，统称为类
// 构造函数 构造器
function Animal(type, name, age, sex) {
    this.type = type,
        this.name = name,
        this.age = age,
        this.sex = sex
}

// 定义实例方法（原型方法）
Animal.prototype.print = function() {
    console.log("种类：", this.type);
    console.log("姓名:", this.name);
    console.log("年龄：", this.age);
    console.log("性别：", this.sex);
}

const a = new Animal("狗", "旺财", 3, "雄")
a.print();

// ES6中的写法
class Animal1 {
    constructor(type, name, age, sex) {
        this.type = type,
            this.name = name,
            this.age = age,
            this.sex = sex
    }
    print() {
        console.log("种类：", this.type);
        console.log("姓名:", this.name);
        console.log("年龄：", this.age);
        console.log("性别：", this.sex);
    }
}
const b = new Animal1("狗", "旺财", 5, "雄")
b.print();