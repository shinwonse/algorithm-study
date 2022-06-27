function solution(priorities, location) {
  let arr = priorities.map((priority, index) => {
      return {
          index: index, priority: priority
      };
  });
  
  let queue = [];
  
  while (arr.length > 0) {
      let temp = arr.shift();
      let hasHighPriority = arr.some(v => v.priority > temp.priority)
      if (hasHighPriority) {
          arr.push(temp);
      } else {
          queue.push(temp);
      }
  }
  return queue.findIndex(v => v.index === location) + 1;
}