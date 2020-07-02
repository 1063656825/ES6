// 满足任一参数都可以
function sum(...aaa) {
    let sum = 0;
    for (let i = 0; i < aaa.length; i++) {
        sum += aaa[i]
    }
    return sum;
}

console.log(sum(1))
console.log(sum(1, 2))
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4))