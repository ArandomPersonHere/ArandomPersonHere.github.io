// Bubble Sort Demo

let someList = [5, 15, 3, 8, 9, 20, 7, 54,52];

// function bubbleSort(list){
//   let anySwaps = true;
//   while (anySwaps){
//     anySwaps = false;
//     let position  = 0;
//     for (let i = 0; i<list.length-1; i++){

//       if (list[i] > list[i+1]){
//         anySwaps = true;
//         let temp = list[i];
//         list[i] = list[i+1];
//         list[i+1] = temp;
//       }
     
//     }
//     console.log(list);
//   }
//   return list;
// }

function setup() {
  createCanvas(windowWidth, windowHeight);
  console.log(selectionSort(someList));
}

function draw() {
}

function selectionSort (list){
  
  let endLoc = list.length - 1;
 

  while (endLoc >0){
    let highestLoc = 0;

    for (let currentLoc= 0; currentLoc <= endLoc ; currentLoc++){
      if (list[currentLoc] > list[highestLoc]){
        highestLoc = currentLoc;

      }
    }
    let temp = list[endLoc];
    list[endLoc] = list[highestLoc];
    list[highestLoc]= temp;
    console.log(list);
    endLoc--;
  }
  return list;
}
