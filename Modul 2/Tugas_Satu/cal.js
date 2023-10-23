let result = document.getElementById("inputtext");
let Cal = (value) => {
  if (value === "." && result.value.includes(".")) {
    return;
  }
  result.value += value;
};

let Result = () => {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert("Error");
  }
};

function clr() {
  result.value = "";
}

function del() {
  result.value = result.value.slice(0, -1);
}
