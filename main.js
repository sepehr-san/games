// VERSION 0.96
// Fix timing


let order = [];
let userChoise = [];
let score = 0;
let level = 1;
var hardness = 3;
let versiontext = 0.96;
const showDelayTime = 200;

let isTouchDevice = false;
// Check for touch device
if ("ontouchstart" in document.documentElement) {
  isTouchDevice = true;
}


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
const versionText = document.getElementById("versiontext");

versionText.innerHTML = versiontext;

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
    button1.style.backgroundColor = "papayawhip";
    await new Promise((resolve) => setTimeout(resolve, showDelayTime));
    button1.style.backgroundColor = "#9EC5AB";
    if (userChoise.length == order.length){
      await new Promise((resolve) => setTimeout(resolve, 100));
      submit();
    }
  }
  if (button === button2){
    userChoise.push("o2");
    button2.style.backgroundColor = "papayawhip";
    await new Promise((resolve) => setTimeout(resolve, showDelayTime));
    button2.style.backgroundColor = "#9EC5AB";
    if (userChoise.length == order.length){
      await new Promise((resolve) => setTimeout(resolve, 100));
      submit();
    }
  }
  if (button === button3){
    userChoise.push("o3");
    button3.style.backgroundColor = "papayawhip";
    await new Promise((resolve) => setTimeout(resolve, showDelayTime));
    button3.style.backgroundColor = "#9EC5AB";
    if (userChoise.length == order.length){
      await new Promise((resolve) => setTimeout(resolve, 100));
      submit();
    }
  }
  if (button === button4){
    userChoise.push("o4");
    button4.style.backgroundColor = "papayawhip";
    await new Promise((resolve) => setTimeout(resolve, showDelayTime));
    button4.style.backgroundColor = "#9EC5AB";
    if (userChoise.length == order.length){
      await new Promise((resolve) => setTimeout(resolve, 100));
      submit();
    }
  }
  if (button === button5){
    userChoise.push("o5");
    button5.style.backgroundColor = "papayawhip";
    await new Promise((resolve) => setTimeout(resolve, showDelayTime));
    button5.style.backgroundColor = "#9EC5AB";
    if (userChoise.length == order.length){
      await new Promise((resolve) => setTimeout(resolve, 100));
      submit();
    }
  }
  if (button === button6){
    userChoise.push("o6");
    button6.style.backgroundColor = "papayawhip";
    await new Promise((resolve) => setTimeout(resolve, showDelayTime));
    button6.style.backgroundColor = "#9EC5AB";
    if (userChoise.length == order.length){
      await new Promise((resolve) => setTimeout(resolve, 100));
      submit();
    }
  }
  if (button === button7){
    userChoise.push("o7");
    button7.style.backgroundColor = "papayawhip";
    await new Promise((resolve) => setTimeout(resolve, showDelayTime));
    button7.style.backgroundColor = "#9EC5AB";
    if (userChoise.length == order.length){
      await new Promise((resolve) => setTimeout(resolve, 100));
      submit();
    }
  }
  if (button === button8){
    userChoise.push("o8");
    button8.style.backgroundColor = "papayawhip";
    await new Promise((resolve) => setTimeout(resolve, showDelayTime));
    button8.style.backgroundColor = "#9EC5AB";
    if (userChoise.length == order.length){
      await new Promise((resolve) => setTimeout(resolve, 100));
      submit();
    }
  }
  if (button === button9){
    userChoise.push("o9");
    button9.style.backgroundColor = "papayawhip";
    await new Promise((resolve) => setTimeout(resolve, showDelayTime));
    button9.style.backgroundColor = "#9EC5AB";
    if (userChoise.length == order.length){
      await new Promise((resolve) => setTimeout(resolve, 100));
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
    await new Promise((resolve) => setTimeout(resolve, 50)); // Wait 50ms
    let circle = document.getElementById(element);
    circle.style.backgroundColor = "palevioletred";
    await new Promise((resolve) => setTimeout(resolve, 500)); // Wait 500ms
    circle.style.backgroundColor = "#9EC5AB";
  }
}




newLevel(1);



if (!isTouchDevice){
  button1.addEventListener("mousedown", () => {
    buttonClick(button1);
  });
  button2.addEventListener("mousedown", () => {
    buttonClick(button2);
  });
  button3.addEventListener("mousedown", () => {
    buttonClick(button3);
  });
  button4.addEventListener("mousedown", () => {
    buttonClick(button4);
  });
  button5.addEventListener("mousedown", () => {
    buttonClick(button5);
  });
  button6.addEventListener("mousedown", () => {
    buttonClick(button6);
  });
  button7.addEventListener("mousedown", () => {
    buttonClick(button7);
  });
  button8.addEventListener("mousedown", () => {
    buttonClick(button8);
  });
  button9.addEventListener("mousedown", () => {
    buttonClick(button9);
  });

} else {

  button1.addEventListener("touchstart", () => {
    buttonClick(button1);
  });
  button2.addEventListener("touchstart", () => {
    buttonClick(button2);
  });
  button3.addEventListener("touchstart", () => {
    buttonClick(button3);
  });
  button4.addEventListener("touchstart", () => {
    buttonClick(button4);
  });
  button5.addEventListener("touchstart", () => {
    buttonClick(button5);
  });
  button6.addEventListener("touchstart", () => {
    buttonClick(button6);
  });
  button7.addEventListener("touchstart", () => {
    buttonClick(button7);
  });
  button8.addEventListener("touchstart", () => {
    buttonClick(button8);
  });
  button9.addEventListener("touchstart", () => {
    buttonClick(button9);
  });
}






submitButton.onclick = submit;






// THE FIRST FUNCTION WITHOUT WAITING BETWEEN BLINKS.
// function newLevel(hardness){
//   order = generateOrder(hardness);
//   for (let i = 0; i < order.length; i++){
//       let circle = document.getElementById(order[i]);
//       circle.style.filter = "saturate(1)";
//   }
// }
