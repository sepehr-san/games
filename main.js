// VERSION 0.9
// ADDED MOUSEUP EVENT


let order = [];
let userChoise = [];
let score = 0;
let level = 1;
var hardness = 3;
const button1 = document.getElementById("o1");
const button2 = document.getElementById("o2");
const button3 = document.getElementById("o3");
const button4 = document.getElementById("o4");
const button5 = document.getElementById("o5");
const button6 = document.getElementById("o6");
const button7 = document.getElementById("o7");
const button8 = document.getElementById("o8");
const button9 = document.getElementById("o9");
const submitButton = document.getElementById("submit");
const scoreText = document.getElementById("scoretext");
const levelText = document.getElementById("leveltext");

function arraysCheck(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  return arr1.every((element, index) => element === arr2[index]);
}

function generateOrder(number){
  order = [];
  for (let i = 1; i < number + 1; i++){
    let choise = "o"+String(Math.floor(Math.random() * 9) + 1);
    // UN-COMMENT IF YOU DONT WANT DUPPLICATIONS.
    // while (order.includes(choise)){
    //   choise = "o"+String(Math.floor(Math.random() * 9) + 1);
    // }
    order.push(choise);
  }
  return order;
}
async function buttonClick(button){
  if (button === button1){
    userChoise.push("o1");
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button2){
    userChoise.push("o2");
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button3){
    userChoise.push("o3");
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button4){
    userChoise.push("o4");
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button5){
    userChoise.push("o5");
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button6){
    userChoise.push("o6");
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button7){
    userChoise.push("o7");
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button8){
    userChoise.push("o8");
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button9){
    userChoise.push("o9");
    await new Promise((resolve) => setTimeout(resolve, 500));
    if (userChoise.length == order.length){
      submit();
    }
  }
}
function submit(){
  if (arraysCheck(userChoise, order)){
    alert("You Win!");
    userChoise = [];
    level += 1;
    score += 10;
    levelText.innerText = level;
    scoreText.innerText = score;
    newLevel(level);
  } else {
    alert("You lose");
    userChoise = [];
    newLevel(level)
  }
}

function newLevel(level){
  if (level % 3 === 0){
    hardness++;
  }
  order = generateOrder(hardness);
  iterateWithDelay(order);
}
async function iterateWithDelay(arr) {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Wait 500ms
  for (const element of arr) {
    await new Promise((resolve) => setTimeout(resolve, 50)); // Wait 0ms
    let circle = document.getElementById(element);
    circle.style.backgroundColor = "palevioletred";
    await new Promise((resolve) => setTimeout(resolve, 500)); // Wait 500ms
    circle.style.backgroundColor = "#9EC5AB";
  }
}




newLevel(1);

button1.addEventListener("mousedown", () => {
  buttonClick(button1);
  button1.style.backgroundColor = "papayawhip";
});
button1.addEventListener("mouseup", () => {
  button1.style.backgroundColor = "#9EC5AB";
});
button2.addEventListener("mousedown", () => {
  buttonClick(button2);
  button2.style.backgroundColor = "papayawhip";
});
button2.addEventListener("mouseup", () => {
  button2.style.backgroundColor = "#9EC5AB";
});
button3.addEventListener("mousedown", () => {
  buttonClick(button3);
  button3.style.backgroundColor = "papayawhip";
});
button3.addEventListener("mouseup", () => {
  button3.style.backgroundColor = "#9EC5AB";
});
button4.addEventListener("mousedown", () => {
  buttonClick(button4);
  button4.style.backgroundColor = "papayawhip";
});
button4.addEventListener("mouseup", () => {
  button4.style.backgroundColor = "#9EC5AB";
});
button5.addEventListener("mousedown", () => {
  buttonClick(button5);
  button5.style.backgroundColor = "papayawhip";
});
button5.addEventListener("mouseup", () => {
  button5.style.backgroundColor = "#9EC5AB";
});
button6.addEventListener("mousedown", () => {
  buttonClick(button6);
  button6.style.backgroundColor = "papayawhip";
});
button6.addEventListener("mouseup", () => {
  button6.style.backgroundColor = "#9EC5AB";
});
button7.addEventListener("mousedown", () => {
  buttonClick(button7);
  button7.style.backgroundColor = "papayawhip";
});
button7.addEventListener("mouseup", () => {
  button7.style.backgroundColor = "#9EC5AB";
});
button8.addEventListener("mousedown", () => {
  buttonClick(button8);
  button8.style.backgroundColor = "papayawhip";
});
button8.addEventListener("mouseup", () => {
  button8.style.backgroundColor = "#9EC5AB";
});
button9.addEventListener("mousedown", () => {
  buttonClick(button9);
  button9.style.backgroundColor = "papayawhip";
});
button9.addEventListener("mouseup", () => {
  button9.style.backgroundColor = "#9EC5AB";
});

submitButton.onclick = submit;






// THE FIRST FUNCTION WITHOUT WAITING BETWEEN BLINKS.
// function newLevel(hardness){
//   order = generateOrder(hardness);
//   for (let i = 0; i < order.length; i++){
//       let circle = document.getElementById(order[i]);
//       circle.style.filter = "saturate(1)";
//   }
// }
