// 求最大值最小值
function getValues() {
    let arr = [];
    const inps = document.querySelectorAll("input");
    for (let i = 0; i < inps.length; i++) {
        arr.push(inps[i].value)
    }
    return arr;
}

const btn = document.querySelector("button");
btn.onclick = function() {

    const arr = getValues();
    console.log(Math.max(...arr))
    spanMin.innerText = Math.min(...arr)
    spanMax.innerText = Math.max(...arr)

}

function cal(a, b, c, d) {
    return a + b * c - d;
}

//curry：柯里化，用户固定某个函数的前面的参数，得到一个新的函数，新的函数调用时，接收剩余的参数
function curry(func, ...args) {
    return function(...subArgs) {
        const allArgs = [...args, ...subArgs]
        if (allArgs.length === func.length) {
            // 参数够了
            return func(...allArgs);
        } else if (allArgs.length < func.length) {
            const newArgs = [...allArgs, 9]
            return func(...newArgs)

        }
    }
}
const newCal = curry(cal, 1, 2)
console.log(newCal(3, 4))
console.log(newCal(8))