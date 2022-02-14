# database

#  将要学习的算法：

链表：遍历链表，删除链表节点
树 图：深度/广度优先遍历
数组：冒泡/选择/插入/归并/快速排序，顺序/二分搜索


# 时间，空间复杂度

空间复杂度相对时间复杂度来说比较简单，都是一个函数O(n),O(n^2)
O(log(n))......

空间复杂度为O(1)
let i = 0;
i += 1;


空间复杂度为O(n)
const list = [];
for(let i = 0; i < n; i++){
  list.push(i);
}

这是一个空间复杂度为O(n^2)
const matrix = []
for (let i = 0; i < n; i += 1){
  matrix.push([]);
  for (let j = 0; j < n; j += 1){
    matrix[i].push(j);
  }
}

时间复杂度
时间复杂度为O(n)
for (let i = 0; i < n; i++){
  console.log(i)
}

时间复杂度为O(1) + O(n),当n足够大的时候，可以将O(1)忽略， O(n) + O(1) = O(n)
let i = 0;
i += 1;
for (let j = 0; j < n; j++){
  console.log(j)
}

这是一个时间复杂度为O(log(n))
let i = 1;
while (i < n){
  console.log(i)
  i *= 2
}