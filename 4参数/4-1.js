/**
 * 创建一个元素
 *
 * @param {*} name 元素名称
 * @param {*} container 元素的父元素
 * @param {*} content 元素的内容
 */

"use strict"

function test(a, b) {
    console.log("arguments:", arguments[0], arguments[1]);
    console.log("a:", a, "b:", b);
    a = 3;
    console.log("arguments:", arguments[0], arguments[1]);
    console.log("a:", a, "b:", b);
}
test(1, 2)