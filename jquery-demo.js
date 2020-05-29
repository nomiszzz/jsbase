class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector);
    const length = result.length;
    for (let i = 0; i < length; i++) {
      this[i] = result[i];
    }
    this.length = length;
  }
  get (index) {
    return this[index];
  }
  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i]
      fn(elem)
    }
  }
  on(type, fn) {
    return this.each(elem => {
        elem.addEventListener(type, fn, false)
    })
  }
  // extends more functions
}

// 扩展性有两种方式
// 插件方式
jQuery.prototype.dialog = function(info) {
  alert(info);
}

// 复写机制
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector); // 构造函数执行父类的构造方法
  }

  // 扩展自己的方法
  addClass(className) {
    // do something
  }
}

// const $p = new jQuery('p')
// $p.get(1)
// $p.each((elem) => console.log(elem.nodeName))
// $p.on('click', () => alert('clicked'))