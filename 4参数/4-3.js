/**
 *任意个数相加
 *
 * @param {*} args
 * @returns
 */
function sum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i]
    }
    console.log(sum)
}

/**
 *获取一个指定长度的随机数组乘的数组
 *
 * @param {*} length
 * @returns
 */
function getRandomNumbers(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.random())
    }
    return arr;
}


const numbers = getRandomNumbers(10);
// 将数组的每一项展开，依次作为参数传递，而不是把整个数组作为一个参数传递
console.log(numbers)

sum(...numbers) //这样就相当于传递了10个参数


const arr1 = [3, 23, 1, 4, 5];
//克隆arr1数组到arr2
const arr2 = [...arr1];
console.log("arr1", arr1, "arr2", arr2)

const obj1 = {
        name: "成哥",
        age: 18,
        love: "邓嫂",
        address: {
            province: "黑龙江",
            city: "哈尔滨"
        }
    }
    // 浅克隆到obj2 ，这样的克隆address只是将obj1的地址赋值过来
    // 这样就做到深层克隆
const obj2 = {
    ...obj1,
    address: {
        ...obj1.address
    }
}
console.log(obj2, obj1.address == obj2.address)