function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}

const cont = document.querySelector(".container");
const btnContainer = document.querySelector(".btn-container");
function createbtns() {
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
    ",",
    "%",
    "+",
    "=",
  ];

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
