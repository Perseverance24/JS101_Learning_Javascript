// Given an array of numbers find the average of all the even numbers.
let sum= 0;
let count= 0;

let a = [1,2,3,4,5,6,7,8,9];

for(let i=0; i<a.length; i++){
  if(i%2==0){
    sum+=a[i]
    count++
  }
}
console.log(sum/count)
