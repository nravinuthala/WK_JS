function displayVal() {
  var val = document.getElementById("one").value;
  document.getElementById("screen").value = val;
  var rand_array = ["one", 1, "two", 2, "three", 3, "four", 4];
  console.log(rand_array);
  last_elem = rand_array.pop();
  first_elem = rand_array.shift();
  console.log(rand_array);
}

function getData() {
  alert("calc form submitted");
}
let expression = "";
function display(clicked_id) {
  // alert(clicked_id);
  expression += document.getElementById(clicked_id).value;
  document.getElementById("screen").value = expression;
  // getResult(expression);
}

function getResult() {
  result = eval(expression);
  document.getElementById("screen").value = result;
  // alert(result);
}

function evaluate(exp) {
  // debugger;
  operators = ["+", "-", "*", "/"];
  for (op of operators) {
    // console.log(exp.indexOf(op));
    // if (exp.indexOf(op) )
  }
}
evaluate("1+2");

const student = {
  name: "Sreekar",
  school: "TIME",
  college: "BITS",
  // greet: function () {
  //   console.log("Good morning");
  // },
};

console.table(student);

console.log(document.querySelector("input"));

window.onerror = function () {
  alert("Invalid Expression");
};
