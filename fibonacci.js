const arr = [];

for (let i = 0; i < 8; i++) {
  if (arr.length < 4) {
    arr.push(i);
  } else {
    let lastEl = arr[arr.length - 1];
    let sLastEl = arr[arr.length - 2];
    let sum = lastEl + sLastEl;
    arr.push(sum);
  }
}
console.log(arr);
