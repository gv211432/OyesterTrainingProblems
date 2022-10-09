// 1st Given an array of bird where every element represents a bird type id, determine the ids of the most
// frequently and least frequently sighted type. If more than 1 type has been spotted that maximum
// amount, return the smallest of their ids & If more than 1 type has been spotted that minimum amount,
// return the smallest of their ids.

// E.g.: - Input – [1,1,2,2,4,4,4,4,5] Output – [4, 5]
// Input – [2,2,2,2,4,4,4,4,5] Output – [2, 5]
// Input – [1,2,2,4,4,4,4,5] Output – [4, 1]

class Solution {
  solve(birdsArr) {
    // edge cases :
    // array without ids
    if (birdsArr.length == 0) return [];

    // array with 1 id
    if (birdsArr.length == 1) return [birdsArr[0], birdsArr[0]];

    // array with 2 ids
    if (birdsArr.length == 2) {
      if (birdsArr[0] < birdsArr[1]) return [birdsArr[0], birdsArr[0]];
      else return [birdsArr[1], birdsArr[1]];
    }

    let birdsMap = new Map(); // birdsMap to track frequency of birds
    let maxId = Infinity; // maxId is the id having most frequency
    let minId = Infinity; // minId is the id having least frequency
    let [maxFrequency, minFrequency] = [0, Infinity]; // most frequency and least frequency

    // counting birds frequency in birdsMap
    birdsArr.forEach((id) => {
      if (birdsMap.has(id)) {
        birdsMap.set(id, birdsMap.get(id) + 1);
      } else {
        birdsMap.set(id, 1);
      }
    });

    birdsMap.forEach((freq, id) => {
      // if current frequency is greater than max frequeny, update
      if (freq > maxFrequency) {
        maxFrequency = freq;
        maxId = id;
      } else if (freq == maxFrequency) {
        if (id < maxId) {
          maxFrequency = freq;
          maxId = id;
        }
      }

      // if current frequency is lesser than min frequeny, update
      if (freq < minFrequency) {
        minFrequency = freq;
        minId = id;
      } else if (freq == minFrequency) {
        if (id < minId) {
          minFrequency = freq;
          minId = id;
        }
      }
    });
    return [maxId, minId];
  }
}

let BirdProblems = new Solution();
console.log(BirdProblems.solve([1, 1, 2, 2, 4, 4, 4, 4, 5]));
console.log(BirdProblems.solve([2, 2, 2, 2, 4, 4, 4, 4, 5]));
console.log(BirdProblems.solve([1, 2, 2, 4, 4, 4, 4, 5]));
console.log(BirdProblems.solve([1, 2]));
console.log(BirdProblems.solve([5]));
console.log(
  BirdProblems.solve([1, 2, 2, 4, 4, 4, 4, 5, 7, 9, 11, 11, 89, 89, 89, 89, 89])
);
console.log(
  BirdProblems.solve([
    1, 2, 2, 4, 4, 4, 4, 5, 23, 23, 45, 45, 45, 45, 45, 45, 45,
  ])
);
