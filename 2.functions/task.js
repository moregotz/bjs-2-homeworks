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
  if (arr.length === 0) return 0;

  let elementsSum = 0;

  for(let i = 0; i < arr.length; i++) {
    let compare = arr[i];
    elementsSum += compare;
    }

    return elementsSum;
}

function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) return 0;

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

  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) return 0;

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for(let i = 0; i < arr.length; i++) {

    let compare = arr[i];

    if(compare % 2 === 0){
      sumEvenElement += compare;
    } else {
      sumOddElement += compare;
    }
  }

  let differenceEvenOdd = sumEvenElement - sumOddElement;

  return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) return 0;
  
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for(let i = 0; i < arr.length; i++) {

    let compare = arr[i];

    if(compare % 2 === 0){
      sumEvenElement += compare;
      countEvenElement += 1;
    }
  }

  let averageEvenElements = sumEvenElement / countEvenElement;

  return averageEvenElements;
}

function makeWork (arrOfArr, func) {

}
