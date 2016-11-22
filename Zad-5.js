

let arr = [3,6,12,-56,1,13,67,9,32,3];

function minNumber(arr){
  let minNumber = arr[0];

  for (let nextNumber of arr) {
      if(minNumber > nextNumber){
        minNumber = nextNumber;
      }
  }
  return minNumber;
}
function maxNumber(arr){
  let maxNumber = arr[0];

  for (let nextNumber of arr) {
      if(maxNumber < nextNumber){
        maxNumber = nextNumber;
      }
  }
  return maxNumber;
}
