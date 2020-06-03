const xhr = new XMLHttpRequest();
xhr.open('GET', '/data/test.json', true); // 第三个参数指该请求为异步请求
xhr.onreadystatechange = function() { // 异步请求通过回调函数来实现
  if (xhr.readyState === 4) {
    // if (xhr.status === 200) {
    //   alert(xhr.responseText);
    // }
    console.log(xhr.status);
  }

}
xhr.send(null);