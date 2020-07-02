// const user = {
//         name: "kevin",
//         age: 11,
//         sex: "男",
//         address: {
//             province: "四川",
//             city: "成都"
//         }
//     }
//     // 解构出name，然后，剩余的所有属性，放到一个新的对象中，变量名为obj
//     // name:kevin
//     // obj:{age:11,sex:"男",address:{...}}
// const {
//     name,
//     ...obj
// } = user


// 以前调用方式
// let name, age, sex, address;
// name = user.name;
// age = user.age;
// sex = user.sex;
// address = user.address;

// ES6解构   先定义四个变量，然后从对象中读取同名属性，放到变量中
// let name, age, sex, address;
// ({
//     name,
//     age,
//     sex,
//     address
// } = user);

// let {
//     name,
//     age,
//     sex,
//     address,
//     abc = 123
// } = user

// 先定义4个变量：name、age、gender、address
// 再从对象user中读取同名属性赋值（其中gender读取的是sex属性）
// let {
//     name,
//     age,
//     sex: gender,
//     address
// } = user

// console.log(name, age, gender, address)

// 解构出user中的name、province
// 定义两个变量name。province
// 再解构
// let {
//     name,
//     age,
//     address: {
//         province,
//         city
//     }
// } = user

// console.log(name, age, province, city)

// const numbers = ["a", "b", "c", "d"];
// const {
//     0: n1,
//     1: n2
// } = numbers;

// console.log(n1, n2) //输出 a b



// let n1, n2;
// ([n1, n2] = numbers)

// const [n1, , , n4, n5] = numbers;
// console.log(n1, n4, n5) //输出结果a,d undefined

// const numbers = ["a", "b", "c", "d", [1, 2, 3, 4]];
// // 得到numbers下标为4的数组中的下标为2的数据，放到变量n中
// const [, , , , [, , n]] = numbers;
// console.log(n) //输出3

// const numbers = ["a", "b", "c", "d", {
//     a: 1,
//     b: 2
// }]

// // 得到numbers下标为4的数组的属性a,赋值给变量a
// const [, , , , {
//     a
// }] = numbers;
// console.log(a) //输出1

// let a = 1,
//     b = 2;
// [b, a] = [a, b]
// console.log(a, b) //2 1

const article = {
    title: "文章标题",
    content: "文章内容",
    comments: [{
        content: "评论1",
        user: {
            id: 1,
            name: "用户名1"
        }
    }, {
        content: "评论2",
        user: {
            id: 2,
            name: "用户名2"
        }
    }]
}

//解构出第二条评论的用户名和评论内容
// name:"用户名2"  content:"评论2"

// const {
//     comments: [, {
//         content,
//         user: {
//             name
//         }
//     }]
// } = article

// const [, {
//     content,
//     user: {
//         name
//     }
// }] = article.comments

const {
    content,
    user: {
        name
    }
} = article.comments[1]


console.log("name:", name, "content:", content)