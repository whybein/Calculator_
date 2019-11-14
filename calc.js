function add(char) {
  var display = document.getElementById("display");
  display.value = display.value + char;
}

function calculate() {
  var display = document.getElementById("display");
  var result = eval(display.value);
  document.getElementById("result").value = result;
}

function reset() {
  document.getElementById("display").value = "";
  document.getElementById("result").value = "";
}

function back() {
  var value = document.getElementById("display").value;
  document.getElementById("display").value = value.substr(0, value.length - 1);
}
