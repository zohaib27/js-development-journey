//5. Create a program that prints the day of the week based on a user-entered number (1 for Sunday, 2 for Monday, etc.).

var inputNo = 6;

switch (inputNo) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
}

if (inputNo === 1) {
  console.log("sunday");
} else if (inputNo === 2) {
  console.log("monday");
} else if (inputNo === 3) {
  console.log("tuesday");
} else if (inputNo === 4) {
  console.log("wednesday");
} else if (inputNo === 5) {
  console.log("thursday");
} else if (inputNo === 6) {
  console.log("friday");
} else {
  console.log("saturday");
}

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(days[inputNo - 1]);

function weekOfDayBySwitch(day) {


  let result;
  switch (day) {
    case 1:
      result = "sunday";
      break;
    case 2:
      result = "Monday";
      break;
    case 3:
      result = "Tuesday";
      break;
    case 4:
      result = "Wednesday";
      break;
    case 5:
      result = "Thursday";
      break;
    case 6:
      result = "Friday";
      break;
    case 7:
      result = "Saturday";
      break;
  }

  return result;
}

function weekOfDayByIf(day) {
    // Definition
    if(day===1){
      
    }
}

function weekOfDayByArray(day) {
    // Definition
    const dayList=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
}

var userInput = 4;
var dayListResult = weekOfDayByArray(4);

console.log(dayListResult);
//console.log(weekOfDayByArray(userInput));
//console.log(weekOfDayByArray(4));