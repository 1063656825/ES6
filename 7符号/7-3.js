// function A() {}


// Object.defineProperty(A, Symbol.hasInstance, {
//     value: function(obj) {
//         return false;
//     }
// })
// const obj = new A();
// console.log(obj instanceof A)

// const arr = [3]
// const arr2 = [5, 6, 7, 8]
// arr2[Symbol.isConcatSpreadable] = false
// const result = arr.concat(56, arr2)
// console.log(result) //[3,56,[5,6,7,8]]

const arr = [1];
const obj = {
    0: 2,
    1: 3,
    length: 4,
    [Symbol.isConcatSpreadable]: true
}
const result = arr.concat(0, obj)
console.log(result)


class Temperature {
    constructor(degree) {
            this.degree = degree;
        }
        [Symbol.toPrimitive](type) {
            if (type === "default") {
                return this.degree + "摄氏度"
            } else if (type === "number") {
                return this.degree;
            } else if (type === "string") {
                return this.degree + "℃"
            }
        }
}
const t = new Temperature(30);
console.log(t + "!"); //30摄氏度!
console.log(t / 2); //15
console.log(String(t)) //30℃


[Symbol.prototype.toString] = "Person"