// 创建一个符号
const syb1 = Symbol();
const syb2 = Symbol("abc");

console.log(syb1, syb2) //Symbol() Symbol(abc)

// const hero = {
//     attack: 30,
//     hp: 300,
//     defence: 10,
// gongji() { //攻击
//     // 伤害：攻击力*随机数（0.8~1.1）
//     const dmg = this.attack * getRandom(0.8, 1.1);
// },
// getRandom(min, max) {
//     return Math.random() * (max - min) + min;
//     }
// }


// const hero = (function() {
//     const getRandom = Symbol();
//     return {
//         attack: 30,
//         hp: 300,
//         defence: 10,
// gongji() { //攻击
//     // 伤害：攻击力*随机数（0.8~1.1）
//     const dmg = this.attack * this[getRandom](0.8, 1.1);
// },
// [getRandom](min, max) { //根据最大最小值产生一个随机数
//     // 通过符号属性就实现了私有属性
//     return Math.random() * (max - min) + min;
// }
//     }
// })()
// hero.gongji();
// console.log(hero)


// const hero = (() => {
//     const getRandom = Symbol();
//     return class {
//         constructor(attack, hp, defence) {
//             this.attack = attack;
//             this.hp = hp;
//             this.defence = defence;
//         }
//         gongji() { //攻击
//                 // 伤害：攻击力*随机数（0.8~1.1）
//                 const dmg = this.attack * this[getRandom](0.8, 1.1);
//             }
//             [getRandom](min, max) { //根据最大最小值产生一个随机数
//                 // 通过符号属性就实现了私有属性
//                 return Math.random() * (max - min) + min;
//             }
//     }
// })();

// const h = new hero(3, 6, 3);
// console.log(h)
const syb = Symbol();
const obj = {
    [syb]: 1,
    [syb]: 2
}
console.log(obj) //symbol():2