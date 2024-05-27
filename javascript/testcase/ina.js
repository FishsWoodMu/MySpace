var num1 = 5;
var num2 = num1;

console.log(num1);
console.log(num2);


// 因为 wood 指向的对象在堆内存中只有一个，而且是全局对象。
function setVal(obj){
  obj.name = "木木"
}
var wood= new Object();
setVal(wood);
console.log(wood.name,'wood的name值');


//说明即使在函数内部修改了参数的值，但原始的引用仍然保持未变。实际上，当在函数内部重写 obj 时，这个变量引用的就是一个局部对象了。而这个局部对象会在函数执行完毕后立即被销毁。
console.log("-----分割线-----");

function setName(obj){
  obj.name = 'susan';
  obj= new Object();
  obj.name = "hello coffee"

  console.log(obj.name,'name内部的');
}

var person = new Object();
setName(person)
person.name = "Jenny";
console.log("外部的name",person.name);

console.log("----------------");