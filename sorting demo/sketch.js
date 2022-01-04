// Bubble Sort Demo

let someList = [5, 15, 3, 8, 9, 20, 7, 54,52];

function bubbleSort(list){
  let anySwaps = true;
  while (anySwaps){
    anySwaps = false;
    let position  = 0;
    for (let i = 0; i<list.length-1; i++){

      if (list[i] > list[i+1]){
        anySwaps = true;
        let temp = list[i];
        list[i] = list[i+1];
        list[i+1] = temp;
      }
     
    }
    console.log(list);
  }
  return list;
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(bubbleSort(someList));
}

function draw() {
}


