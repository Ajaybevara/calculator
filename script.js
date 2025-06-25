 const display = document.getElementById("display");
  const history = document.getElementById("history");

  function appendNumber(num) {
    display.value += num;
  }

  function appendOperator(op) {
    const lastChar = display.value.slice(-1);
    if ("+-*/".includes(lastChar)) return;
    if (display.value === "") return;
    display.value += op;
  }

  function appendDecimal() {
    const parts = display.value.split(/[\+\-\*\/]/);
    const lastPart = parts[parts.length - 1];
    if (!lastPart.includes(".")) {
      display.value += ".";
    }
  }

  function appendFunction(func) {
    let val = display.value;
    if (!val) return;

    if (func === 'sqrt') {
      display.value = `Math.sqrt(${val})`;
    } else if (func === 'square') {
      display.value = `Math.pow(${val},2)`;
    } else if (func === 'pow') {
      display.value += "**";
    } else if (func === '%') {
      display.value += "/100";
    }
  }

  function clearDisplay() {
    display.value = "";
  }

  function deleteLast() {
    display.value = display.value.slice(0, -1);
  }

  function calculate() {
    try {
      const result = eval(display.value);
      history.innerHTML += display.value + " = " + result + "<br>";
      display.value = result;
    } catch (e) {
      display.value = "Error";
    }
  }

  function toggleTheme() {
    document.body.classList.toggle("light");
  }