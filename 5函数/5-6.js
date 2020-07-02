function Animal1(type, name, age, sex) {
    this.type = type;
    this.name = name;
    this.age = age;
    this.sex = sex;
}
Animal1.prototype.print = function() {
    console.log(`【种类】：${this.type}`);
    console.log(`【名字】：${this.name}`);
    console.log(`【年龄】：${this.age}`);
    console.log(`【性别】：${this.sex}`);
}


function Dog1(name, age, sex) {
    // 借用父类的构造函数
    Animal1.call(this, "犬类", name, age, sex);
}
Object.setPrototypeOf(Dog1.prototype, Animal1.prototype)
const d1 = new Dog1("玩彩", 3, "共");
d1.print()

class Animal {
    constructor(type, name, age, sex) {
        this.type = type;
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    print() {
        console.log(`【种类】：${this.type}`);
        console.log(`【名字】：${this.name}`);
        console.log(`【年龄】：${this.age}`);
        console.log(`【性别】：${this.sex}`);
    }
    jiao() {
        throw new Error("动物怎么叫？");
    }
}
class Dog extends Animal {
    constructor(name, age, sex) {
        super("犬类", "玩啊", 4, "母");
        // 子类特有属性
        this.love = "吃骨头";
    }
    print() {
            // 调用父类的print
            super.print();
            // 自己特有的代码
            console.log(`【爱好】：${this.love}`)
        }
        //同名方法，会覆盖父类
    jiao() {
        console.log("旺旺！");
    }
}
const d = new Dog("旺财", 3, "公");
d.print();
console.log(d)
    // d.jiao();