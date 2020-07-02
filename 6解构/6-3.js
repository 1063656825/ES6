// 以前写法
// function print(user) {
//     console.log(`姓名：${user.name}`)
//     console.log(`年龄：${user.age}`)
//     console.log(`性别：${user.sex}`)
//     console.log(`身份：${user.address.province}`)
//     console.log(`城市：${user.address.city}`)
// }

// 改进后写法 参数解构
function print({
    name,
    age,
    sex,
    address: {
        province,
        city
    }
}) {
    console.log(`姓名：${name}`)
    console.log(`年龄：${age}`)
    console.log(`性别：${sex}`)
    console.log(`身份：${province}`)
    console.log(`城市：${city}`)
}

const user = {
    name: "kevin",
    age: 11,
    sex: "男",
    address: {
        province: "四川",
        city: "成都"
    }
}
print(user)

// function ajax(options) {
//     const defaultOption = {
//         method: "get",
//         url: "/"
//     }
//     const opt = {
//         ...defaultOption,
//         ...options
//     }
//     console.log(opt)
// }

// 通过解构来优化
function ajax({
    method = "get",
    url = "/"
}) {
    console.log(method, url)
}

ajax({
    method: "get",
    url: "/abc"
})