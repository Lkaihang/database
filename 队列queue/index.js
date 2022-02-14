//  队列的特点，先进先出，在js中可以通过数组和 push，shift来实现

const queue = []
queue.push(1)
queue.push(2)
const item1 = queue.shift() //shift 删除数组第一个元素
console.loh(item1)


// LeetCode 933题最近的请求次数

var RecentCounter = function(){
  this.q = []
}

RecentCounter.prototype.ping = function(t){
  this.q.push(t)
  while(this.q[0] < t - 3000){
    this.q.shift()
  }
  return this.q.length
}