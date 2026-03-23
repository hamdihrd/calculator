// const cont = document.querySelector(".container");
const btnContainer = document.querySelector(".btn-container");

const btns = [
  "7",
  "8",
  "9",
  "/",
  "undo",
  "clear",
  "4",
  "5",
  "6",
  "*",
  "(",
  ")",
  "1",
  "2",
  "3",
  "-",
  "x²",
  "sqrt",
  "0",
  ".",
  "%",
  "+",
  "=",
];
function createbtns() {
  const buttons = btns.map((btntext) => {
    const btn = document.createElement("div");

    switch (btntext) {
      case "=":
        btn.className = "btn equal";
        btn.textContent = "=";
        break;
      case "clear":
        btn.className = "btn clear";
        btn.textContent = "C";
        break;
      case "undo":
        btn.className = "btn undo";
        btn.textContent = "⌫";
        break;
      case "sqrt":
        btn.className = "btn sqrt";
        btn.textContent = "√";
        break;
      case "x²":
        btn.className = "btn xsquare";
        btn.textContent = "x²";
        break;
      case "%":
        btn.className = "btn percent";
        btn.textContent = "%";
        break;
      default:
        btn.className = "btn";
        btn.textContent = btntext;
        break;
    }

    return btn;
  });

  btnContainer.append(...buttons);
}

createbtns();

const screen = document.querySelector("#screen");
const operators = ["+", "-", "*", "/"];
btnContainer.addEventListener("click", (e) => {
  const target = e.target;
  if (
    operators.includes(screen.value.slice(-1)) &&
    operators.includes(target.textContent)
  )
    return;

  if (target.classList.contains("btn")) {
    if (target.classList.contains("equal")) {
      const result = eval(screen.value);
      screen.value = result;
    } else if (target.classList.contains("undo")) {
      screen.value = screen.value.slice(0, -1);
    } else if (target.classList.contains("clear")) {
      screen.value = "0";
    } else if (target.classList.contains("sqrt")) {
      screen.value = Math.sqrt(screen.value);
    } else if (target.classList.contains("xsquare")) {
      screen.value = Math.pow(screen.value, 2);
    } else if (target.classList.contains("percent")) {
      screen.value = screen.value / 100;
    } else {
      if (screen.value === "0") {
        screen.value = "";
      }
      if (screen.value.slice(-1) === "." && target.textContent === ".") return;
      screen.value += target.textContent;
    }
  }
});

const domBtns = btnContainer.querySelectorAll(".btn");

document.addEventListener("keydown", (e) => {
  const target = e.key;

  if (operators.includes(screen.value.slice(-1)) && operators.includes(target))
    return;

  const btnIndex = btns.findIndex((btn) => {
    if (btn === "=" && target === "Enter") return true;
    if (btn === target) return true;
    if (btn === "undo" && target === "Backspace") return true;
    if (btn === "clear" && (target === "Escape" || target === "c")) return true;
    if (btn === "sqrt" && target === "s") return true;
    if (btn === "x²" && target === "x") return true;
    return false;
  });

  if (btnIndex !== -1) {
    domBtns[btnIndex].classList.add("btn-hover");
    setTimeout(() => {
      domBtns[btnIndex].classList.remove("btn-hover");
    }, 100);
  }

  switch (target) {
    case "=":
      screen.value = eval(screen.value);
      break;
    case "Enter":
      screen.value = eval(screen.value);
      break;
    case "Backspace":
      screen.value = screen.value.slice(0, -1);
      break;
    case "Escape":
      screen.value = "0";
      break;
    case "c":
      screen.value = "0";
      break;
    case "s":
      if (+screen.value <= 0) {
        alert("Please enter a positive number");
        return;
      }

      screen.value = Math.sqrt(screen.value).toString();
      break;
    case "x":
      screen.value = Math.pow(screen.value, 2).toString();
      break;
    case "%":
      screen.value = screen.value / 100;
      break;
    default:
      if ("0123456789xcs+-/*.".includes(target)) {
        if (screen.value === "0") {
          screen.value = "";
        }
        if (screen.value.slice(-1) === "." && target === ".") return;
        screen.value += target;
      }
      break;
  }
});
