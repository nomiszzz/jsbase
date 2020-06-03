function fn1(a, b, c) {
  console.log('this', this);
  console.log(a, b, c);
  return 'this is func1';
}

const fn2 = fn1.bind({x: 100}, 10, 20, 30);
const res = fn2();
console.log(res);

// 模拟bind
Function.prototype.bind1 = function() {
  const args = Array.prototype.slice.call(arguments); // 将参数拆解为数组
  // 获取this，数组的第一项
  const t = args.shift();

  // fn1.bind()中的fn1;
  const self = this;

  // 返回一个函数
  return function() {
    return self.apply(t, args);
  }
}

const fn3 = fn1.bind1({x: 100}, 10, 20, 30);
const res2 = fn3();
console.log(res2);