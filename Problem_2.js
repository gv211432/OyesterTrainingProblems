// 2nd Given a time in 12-hr AM/PM format, convert it to
// military time(24hr) and you also need to add 45
// min &45 sec in the result and the display the output.

// E.g.: - Input – 12:01:00PM Output 12:46:45
// Input – 12:01:00AM Output 00:46:45

class Solution {
  solve(timeStr) {
    // spliting string into array using delimiter :
    let timeArr = timeStr.split(':');

    // pulling out time elements from timeArr
    let [hr, min, sec, mode] = [
      parseInt(timeArr[0]),
      parseInt(timeArr[1]),
      parseInt(timeArr[2].slice(0, 2)),
      timeArr[2].slice(2, 4),
    ];

    // new time elemets with 0 initial value
    let [newHr, newMin, newSec] = [0, 0, 0];

    newSec = sec + 45; // add 45 to newSec
    newMin = Math.trunc(newSec / 60) + min + 45;
    newSec %= 60;
    newHr = mode == 'AM' ? 0 : 12;

    if (hr == 12 && mode == 'AM') newHr = 12;
    else if (hr == 12 && mode == 'PM') newHr = 0;

    newHr += Math.trunc(newMin / 60) + hr;
    newMin %= 60;
    newHr %= 24;

    // return modified time string
    return `${newHr}:${newMin}:${newSec}`;
  }
}

let Time = new Solution();

console.log(Time.solve('12:01:00PM')); //12:46:45
console.log(Time.solve('12:01:00AM')); //0:46:45
console.log(Time.solve('11:01:00PM')); //23:46:45
console.log(Time.solve('9:01:00PM')); //21:46:45
console.log(Time.solve('1:47:50PM')); //14:33:35
console.log(Time.solve('11:51:30PM')); //0:37:15
console.log(Time.solve('2:21:30PM')); //15:7:15
console.log(Time.solve('12:59:50PM')); //13:45:35
console.log(Time.solve('2:59:50AM')); //3:45:35
console.log(Time.solve('8:3:30AM')); //8:49:15
