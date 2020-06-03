// 函数作为返回值
function create() {
  const a = 100;
  return function() {
    console.log(a); // a 在fun里是自由变量往上层寻找
  }
}

const fn = create();
const a = 200;
fn() // 100

// 函数作为参数
function print(fn) {
  let a = 200;
  fn();
}

const a = 100;
function fn() {
  console.log(a)
}

print(fn); // 100