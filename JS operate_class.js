/* 
 * Create By Shichen Ye At 2108/7/13
 *
 * @param ele 目标元素
 *
 */

// 判断是否存在目标Class
function hasClass(ele, cls) { 
  return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
//元素增加class
function addClass(ele, cls) { 
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}
//元素移除class
function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      ele.className = ele.className.replace(reg, ' ');
  }
}
//元素替换class
function replaceClass(ele, oldCls, newCls) {
  if (!hasClass(ele, newCls)) {
    if (hasClass(ele, oldCls)) {
      var reg = new RegExp('(\\s|^)' + oldCls + '(\\s|$)');
      ele.className = ele.className.replace(reg, '$1' + newCls + '$2');
    } else {
      ele.className += " " + newCls;
    }
  }
}