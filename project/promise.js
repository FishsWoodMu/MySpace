/**
 * promise 的 面试题
 */

// const { log } = require("console");
// const { resolve } = require("path");

// const promise1 = new Promise((resolve, reject) => {
//   console.log("promise1");
// });

// promise1.then((res) => {
//   console.log("你好吗！");
// });

// console.log("1", promise1);

// const promise3 = new Promise((resolve, reject)=>{
//   console.log("test");
//   resolve("00000")
// })

// const promise4 = promise3.then((res)=>{
//   console.log("promise4")
// })

// console.log("123")
// console.log("456");

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve("success");
  });
fn().then((res) => {
  console.log(res);
});
console.log("start");




