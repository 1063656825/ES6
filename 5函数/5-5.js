const props = "print";
class Animal1 {
    constructor(type, name, age, sex) {
        this.type = type,
            this.name = name,
            this.setAge(age),
            this.sex = sex
    }
    getAge() {
        return this._age + "岁";
    }
    setAge(age) {
            if (typeof age !== "number") {
                throw new TypeError("age property must be number")
            }
            if (age < 0) {
                age = 0;
            } else if (age > 1000) {
                age = 1000;
            }
            this._age = age;
        }
        [props]() {
            console.log("种类：", this.type);
            console.log("姓名:", this.name);
            console.log("年龄：", this.age);
            console.log("性别：", this.sex);
        }
}
var b = new Animal1("狗", "旺财", 5, "雄")


class Animal {
    constructor(type, name, age, sex) {
            this.type = type,
                this.name = name,
                this.age = age,
                this.sex = sex
        }
        // 创建一个age属性，并给他加上getter,读取该属性时，会运行该函数
    get age() {
            return this._age + "岁";
        }
        // 创建一个age属性并给他加上setter，给该属性赋值时，会运行该函数
    set age(age) {
            if (typeof age !== "number") {
                throw new TypeError("age property must be number")
            }
            if (age < 0) {
                age = 0;
            } else if (age > 1000) {
                age = 1000;
            }
            this._age = age;
        }
        [props]() {
            console.log("种类：", this.type);
            console.log("姓名:", this.name);
            console.log("年龄：", this.age);
            console.log("性别：", this.sex);
        }
}
var a = new Animal("狗", "旺财", 5, "雄")


class Test {

    constructor() {
        this.print = () => {
            console.log(this.a)
        }
        this.a = 123;
    }
    print = () => {
        console.log(this.a)
    }

}
const t = new Test();
const p = t.print;
p();

const A = class { //匿名类,类表达式
    a = 1;
    b = 2
}
const q = new A();
console.log(q)


class test {
    @Obsolete
    print() {
        console.log("print方法")
    }
}

function Obsolete(target, methodName, descriptor) {
    // 输出结果：
    // function Test
    // print
    // {value:function print(){},....}
    // console.log(target, methodName, descriptor);
    const oldFunc = descriptor.value;
    descriptor.value = function(...args) {
        console.log(`${methodName}方法已过时`);
        oldFunc.apply(this, args);
    }

}