let rowMemory = ["MC", "MR", "M+", "M-", "MS"];

const tableCalculator = document.getElementById("tableCalc");

function CreateMemoryLine() {
  let memoryLine = document.createElement("tr");
  memoryLine.setAttribute("id", "memoryLine");
  tableCalc.appendChild(memoryLine);

  for (i = 0; i < rowMemory.length; i++) {
    let memoryCell = document.createElement("td");
    memoryLine.appendChild(memoryCell);
    memoryCell.innerHTML += rowMemory[i];
  }
}
CreateMemoryLine();

/*--------------------------------------------------------------------------------------------------------------------------*/

const inputCalc = document.getElementById("inputCalc");
const inputResult = document.getElementById("inputResult");

const btnPourcent = document.getElementById("c1l1");
const btnCE = document.getElementById("c2l1");
const btnC = document.getElementById("c3l1");
const btnDelete = document.getElementById("c4l1");

const btn1x = document.getElementById("c1l2");
const btnX2 = document.getElementById("c2l2");
const btnRacinex = document.getElementById("c3l2");
const btnDivision = document.getElementById("c4l2");

const btn7 = document.getElementById("c1l3");
const btn8 = document.getElementById("c2l3");
const btn9 = document.getElementById("c3l3");
const btnMultiplicate = document.getElementById("c4l3");

const btn4 = document.getElementById("c1l4");
const btn5 = document.getElementById("c2l4");
const btn6 = document.getElementById("c3l4");
const btnSoustraction = document.getElementById("c4l4");

const btn1 = document.getElementById("c1l5");
const btn2 = document.getElementById("c2l5");
const btn3 = document.getElementById("c3l5");
const btnAddition = document.getElementById("c4l5");

const btnPlusMinus = document.getElementById("c1l6");
const btn0 = document.getElementById("c2l6");
const btnComma = document.getElementById("c3l6");
const btnResult = document.getElementById("c4l6");

function Clear() {
  btnC.onclick = function () {
    inputCalc.value = '';
    inputResult.value = '';
  }
}
Clear();

function DeleteLastChar() {
  btnDelete.onclick = function () {
    let chain = inputCalc.value;
    let newChain = chain.slice(0, -1);
    inputCalc.value = newChain
    console.log(newChain);
  }
}
DeleteLastChar();

function AddNumber(btn, content) {

  btn.onclick = function () {
    inputCalc.value += content;
    console.log(inputCalc.value);
  }

}
AddNumber(btn0, 0);
AddNumber(btn1, 1);
AddNumber(btn2, 2);
AddNumber(btn3, 3);
AddNumber(btn4, 4);
AddNumber(btn5, 5);
AddNumber(btn6, 6);
AddNumber(btn7, 7);
AddNumber(btn8, 8);
AddNumber(btn9, 9);

function AddOperator(btn, operator) {
  btn.onclick = function () {
    let chain = inputCalc.value;
    let lastChart = chain.charAt(chain.length - 1);
    /*console.log(lastChart);*/

    if (lastChart !== operator && lastChart !== '') {
      inputCalc.value += operator;
    }
  }
}
AddOperator(btnAddition, '+');
AddOperator(btnSoustraction, '-');
AddOperator(btnDivision, '/');
AddOperator(btnMultiplicate, 'x');
AddOperator(btnComma, '.');

function result() {
  btnResult.onclick = function () {
    let result = eval(inputCalc.value);
    console.log(result);
    inputResult.value = result;
  }
}
result();



