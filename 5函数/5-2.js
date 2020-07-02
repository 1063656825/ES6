const obj1 = {
    a: 123,
    b: 456,
    c: "aba"
}
const obj2 = {
        a: 456,
        d: "ccc"
    }
    // 要把他连起来重复的替换 ES7
const obj = {
    ...obj1,
    ...obj2
}
console.log(obj)

// ES6方法 将obj2的数据，覆盖到obj1，并且会对obj1产生改动，然后返回obj1
const obj3 = Object.assign(obj1, obj2)
console.log(obj3);
console.log(obj1)

// 因为可以写多个对象所以可以这样写就不会改变已有参数
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4)



const obj5 = {
    d: 1,
    b: 2,
    a: 3,
    0: 6,
    5: 2,
    4: 1
}
const props = Object.getOwnPropertyNames(obj5)
console.log(props)

const obj6 = {
    a: 1
}
const obj7 = {
    b: 2
}
Object.setPrototypeOf(obj6, obj7)
console.log(obj6)