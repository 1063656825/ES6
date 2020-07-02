// 判断一个数是不是奇数
const isOdd = function(num) {
    return num % 2 == 1;
}
console.log(isOdd(3));
console.log(isOdd(4));

// 使用箭头函数
const isOdd1 = (num) => {
    return num % 2 == 1;
}
console.log(isOdd1(3));
console.log(isOdd1(4));

// 箭头函数一个参数简写
const isOdd2 = num => {
    return num % 2 == 1;
}
console.log(isOdd2(3));
console.log(isOdd2(4));

// 箭头函数一条返回语句简写
const isOdd3 = num => num % 2 == 1;
console.log(isOdd3(3));
console.log(isOdd3(4));

// 箭头函数返回对象
const sum = (num1, num2) => ({
    "num1": num1,
    "num2": num2,
    "sum": num1 + num2
})
console.log(sum(12, 3))