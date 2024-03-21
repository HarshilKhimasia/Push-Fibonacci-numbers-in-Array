const createFibonacciArr = (n) => {
  const arr = [];

  for (let i = 0; i < n; i++) {
    if (arr.length < 4) {
      arr.push(i);
    } else {
      let lastEl = arr[arr.length - 1];
      let sLastEl = arr[arr.length - 2];
      let sum = lastEl + sLastEl;
      arr.push(sum);
    }
  }
  return arr;   // Returns an array of Fibonacci Numbers till n
};

const examFun = (arrOFNums) => {
  let largeNum = 0;
  for (let i = 0; i < arrOFNums.length; i++) {
    if (arrOFNums[i] > largeNum) {
      largeNum = arrOFNums[i];
    }
  }

  const fibonacciArr = createFibonacciArr(largeNum); // Largest Number from the array is passes as argument which will create a Fibonacci Series till that Number
  let statusNum = false;
  for (let i = 0; i < arrOFNums.length; i++) {
    for (let x = 0; x < fibonacciArr.length; x++) {
      if (arrOFNums[i] == fibonacciArr[x]) {                                 // Checks wheter a number belongs to the Series in Fibonacci Series
        statusNum = !statusNum;
        console.log(`Number ${arrOFNums[i]} belongs to Fibonacci Series`);  
      }
    }
    if (!statusNum) {
      console.log(`Number ${arrOFNums[i]} is not a member of the series`); 
    }
  }
};
const sArr = [6, 7, 22, 48, 120, 13];
examFun(sArr);



