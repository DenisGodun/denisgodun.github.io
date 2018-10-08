function test() {
  var screenWidth = document.getElementById('wrapper').offsetWidth,
      size;
  if (screenWidth < 500) { 
    size = screenWidth + 5;
    document.getElementById('wall').style.top = size + 'px';
  }
}

test();