//作用域
for (var i = 0; i < 10; i++) {
  console.log(i);
}
console.log("第一次遍历结果", i);
//这里的i可以log出来i的值
//var 关键字声明的变量具有函数作用域或全局作用域，没有块级作用域，并且会提升（Hoisting）到其作用域的顶部。

for (let a = 0; a < 10; a++) {
  console.log(a);
}
// console.log("第二次遍历结果",a);  这个log出来a is not defined

function addNum(num1, num2) {
  var result = num1 + num2;
  return result;
}

var sum = addNum(5, 9);
// console.log("result", result);
//result = num1+ num2 这个写法的话，相当于result是一个全局变量
//result是局部变量，var声明了他，假如没有var的话，result是个全局变量，就可以直接在外面读取result的值

var color = "red";
function getColor() {
  return color;
}

console.log(getColor());
//red

function getMyselfColor(){
  var color = "green";
  return color
}
console.log(getMyselfColor());

console.log("2024/05/27");

var testCase = {
  name:"ina.h",
  age:15,
  sex:"女"
}

var propertyName = "name";
console.log(testCase[propertyName]);

console.log(testCase["sex"]);

console.log(testCase.name);


console.log("---Array---");

var arr1 = ["red","green","blue","undefined",null,undefined];
console.log(arr1.length);
console.log(arr1.join(","));

var colors = ["red", "green", "blue", "yellow", "purple"];
console.log(colors.slice(-3,-1));