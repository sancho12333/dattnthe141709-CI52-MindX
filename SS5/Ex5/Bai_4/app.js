let k = prompt("Nhap di may':").split('');
let count = {};
let a = k.forEach(function (s) {
  count[s] ? count[s]++ : count[s] = -1;
});
console.log(a);

//chua ra a