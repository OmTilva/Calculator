let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");
let answer = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (i) => {
    if (i.target.innerHTML == "=") {
      answer = eval(answer);
      answer = (answer * 1).toFixed(4);
      input.value = answer;
    } else if (i.target.innerHTML == "AC") {
      answer = "";
      input.value = answer;
    } else if (i.target.innerHTML == "DEL") {
      answer = answer.slice(0, answer.length - 1);
      input.value = answer;
    } else {
      answer += i.target.innerHTML;
      input.value = answer;
    }
  });
});
