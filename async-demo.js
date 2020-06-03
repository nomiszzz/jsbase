// 异步（通过callback调用，不会阻塞后面的代码）
console.log(100);
setTimeout(() => {
  console.log(200);
}, 1000);
console.log(300); 