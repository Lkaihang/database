// 栈的特点，后进先出，先进后出

const stack = []
stack.push(1)
stack.push(2)
const item1 = stack.pop()
const item2 = stack.pop()


//LeetCode 20.有效的括号

var isValid = function (s){
  if(s.length % 2 === 1 ){ return false }
  const stack = []
  for(let i = 0; i < s.length; i++){
    const c = s[i]
    if(c === '(' || c === '[' || c === '{'){
      stack.push(c)
    } else {
      const t = stack[stack.length - 1]
      if(
        (t === '(' && c === ')')||
        (t === '[' && c === ']')||
        (t === '{' && c === '}')
      ){
        stack.pop()  // pop()删除数组中最后一个元素 shift()删除数组第一个元素
      }else {
        return false
      }
    }
  }
  return stack.length === 0
}