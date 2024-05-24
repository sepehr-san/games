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
    // while (order.includes(choise)){
    //   choise = "o"+String(Math.floor(Math.random() * 9) + 1);
    // }
    order.push(choise);
  }
  return order;
}
function buttonClick(button){
  if (button === button1){
    userChoise.push("o1");
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button2){
    userChoise.push("o2");
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button3){
    userChoise.push("o3");
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button4){
    userChoise.push("o4");
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button5){
    userChoise.push("o5");
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button6){
    userChoise.push("o6");
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button7){
    userChoise.push("o7");
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button8){
    userChoise.push("o8");
    if (userChoise.length == order.length){
      submit();
    }
  }
  if (button === button9){
    userChoise.push("o9");
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
    for (let tag of order){
      var circle = document.getElementById(tag);
      circle.style.backgroundColor = "saturate(0)";
    }
    newLevel(level);
  } else {
    alert("You lose");
    userChoise = [];
    for (let tag of order){
      var circle = document.getElementById(tag);
      circle.style.filter = "saturate(0)";
    }
    newLevel(level)
  }
}

async function iterateWithDelay(arr) {
  await new Promise((resolve) => setTimeout(resolve, 500)); // Wait 500ms
  for (const element of arr) {
    await new Promise((resolve) => setTimeout(resolve, 50)); // Wait 0ms
    let circle = document.getElementById(element);
    circle.style.filter = "saturate(1)";
    await new Promise((resolve) => setTimeout(resolve, 500)); // Wait 500ms
    circle.style.filter = "saturate(0)";
  }
}

function newLevel(level){
  if (level % 3 === 0){
    hardness++;
  }
  order = generateOrder(hardness);
  iterateWithDelay(order);
}


newLevel(1);


button1.addEventListener("click", () => {
  buttonClick(button1);
});
button2.addEventListener("click", () => {
  buttonClick(button2);
});
button3.addEventListener("click", () => {
  buttonClick(button3);
});
button4.addEventListener("click", () => {
  buttonClick(button4);
});
button5.addEventListener("click", () => {
  buttonClick(button5);
});
button6.addEventListener("click", () => {
  buttonClick(button6);
});
button7.addEventListener("click", () => {
  buttonClick(button7);
});
button8.addEventListener("click", () => {
  buttonClick(button8);
});
button9.addEventListener("click", () => {
  buttonClick(button9);
});

submitButton.onclick = submit;







// function newLevel(hardness){
//   order = generateOrder(hardness);
//   for (let i = 0; i < order.length; i++){
//       let circle = document.getElementById(order[i]);
//       circle.style.filter = "saturate(1)";
//   }
// }