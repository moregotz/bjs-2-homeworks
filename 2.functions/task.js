function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for(let i = 0; i < arr.length; i++) {

    let compare = arr[i];

    if(compare > max){
      max = compare;
    }

      if(compare < min){
      min = compare;
    }

      sum += compare;
    }

  avg = sum / arr.length;
  avg = Number(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let elementsSum = 0;

  for(let i = 0; i < arr.length; i++) {
    let compare = arr[i];
    elementsSum += compare;
    }

    return elementsSum;
}

function differenceMaxMinWorker(...arr) {
  let min = Infinity;
  let max = -Infinity;

  for(let i = 0; i < arr.length; i++) {

    let compare = arr[i];

    if(compare > max){
      max = compare;
    }

      if(compare < min){
      min = compare;
    }
  }

  let differenceMaxMin = max - min;
  
  if (arr.length === 0) return 0;

  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {

}

function averageEvenElementsWorker(...arr) {

}

function makeWork (arrOfArr, func) {

}
