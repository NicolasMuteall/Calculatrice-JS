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

// const inputCalc1 = document.getElementById("inputCalc1");
// const inputResult1 = document.getElementById("inputResult");

// const btnPourcent = document.getElementById("btnPourcent");
// const btnCE = document.getElementById("btnCE");
// const btnC = document.getElementById("btnC");
// const btnDelete = document.getElementById("btnDelete");

// const btnInverse = document.getElementById("btnInverse");
// const btnSquare = document.getElementById("btnSquare");
// const btnSquareRoot = document.getElementById("btnSquareRoot");
// const btnDivide = document.getElementById("btnDivide");

// const btn7 = document.getElementById("btn7");
// const btn8 = document.getElementById("btn8");
// const btn9 = document.getElementById("btn9");
// const btnMultiply = document.getElementById("btnMultiply");

// const btn4 = document.getElementById("btn4");
// const btn5 = document.getElementById("btn5");
// const btn6 = document.getElementById("btn6");
// const btnSoustraction = document.getElementById("btnSubstract");

// const btn1 = document.getElementById("btn1");
// const btn2 = document.getElementById("btn2");
// const btn3 = document.getElementById("btn3");
// const btnAdd = document.getElementById("btnAdd");

// const btnChangeSign = document.getElementById("btnChangeSign");
// const btn0 = document.getElementById("btn0");
// const btnComma = document.getElementById("btnComma");
// const btnEqual = document.getElementById("btnEqual");
// const btnLog = document.getElementById("btnLog");
// const btnLn = document.getElementById("btnLn");

// const btnPi = document.getElementById("btnPi");
// const btnE = document.getElementById("btnE");

/*-----------------------------------------------------------------------------------------------------*/

function disableInput() {
  inputCalc.readOnly = true;

  // inputResult.readOnly = true;
}
disableInput();

function Clear() {
  btnC.onclick = function () {
    inputCalc.value = "";
    // inputCalc1.value = "";
    // inputResult.value = "";
  };
}
Clear();

function DeleteLastChar() {
  btnDelete.onclick = function () {
    let chain = inputCalc.value;
    let newChain = chain.slice(0, -1);
    inputCalc.value = newChain;
    // console.log(newChain);
  };
}
DeleteLastChar();

function AddNumber(btn, content) {
  btn.onclick = function () {
    inputCalc.value += content;
  };
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
//  AddNumber(btnLog);
//  AddNumber(btnLn, Math.);

// AddNumber(btnPi, Math.PI);
// AddNumber(btnE, Math.E);

function AddOperator(btn, operator) {
  btn.onclick = function () {
    let chain = inputCalc.value;
    let lastChart = chain.charAt(chain.length - 1);
    /*console.log(lastChart);*/

    if (lastChart !== operator && lastChart !== "") {
      inputCalc.value += operator;
    }
  };
}

AddOperator(btnAdd, "+");
AddOperator(btnSubstract, "-");
AddOperator(btnDivide, "/");
AddOperator(btnMultiply, "*");
AddOperator(btnComma, ".");
AddOperator(btnPourcent, "%");

function result() {
  btnEqual.onclick = function () {
    /*-----------------------------------NICOLAS---------------------------------------------*/
    let chain = inputCalc.value;
    let chainDivide = chain.split(/[-+*/]/);
    let regEx = /^[0-9]+$/;

    // console.log(chainDivide);
    let tabTrueFalse = [];
    for (i = 0; i < chainDivide.length; i++) {
      function OnlyNumber(testChain) {
        tabTrueFalse.push(regEx.test(testChain));
      }
      OnlyNumber(chainDivide[i]);
    }
    // console.log(tabTrueFalse);
    // console.log(tabTrueFalse.includes(false));

    if (tabTrueFalse.includes(false) === false) {
      let result = eval(inputCalc.value);
      console.log(result);
      inputCalc.value = result;
    } else {
      for (i = 0; i < chainDivide.length; i++) {
        if (regEx.test(chainDivide[i]) === false) {
          console.log(chainDivide[i]);
        }
      }
    }
  };
}
result();

function calculate() {
  btnEqual.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(/[-+*/]/);
    let regEx = /^[0-9]+$/;

    let tabTrueFalse = [];
    for (let i = 0; i < chainDivide.length; i++) {
      function onlyNumber(testChain) {
        tabTrueFalse.push(regEx.test(testChain));
      }
      onlyNumber(chainDivide[i]);
    }

    if (tabTrueFalse.includes(false) === false) {
      let result = eval(inputCalc.value);
      inputCalc.value = result;
    } else {
      for (let i = 0; i < chainDivide.length; i++) {
        if (regEx.test(chainDivide[i]) === false) {
          console.log(chainDivide[i]);
        }
      }
    }
  };
}
calculate();

// Pour la calculatrice standard
const inputCalcStandard = document.getElementById("inputCalcStandard");

// Pour la calculatrice scientifique
const inputCalcScientific = document.getElementById("inputCalcScientific");

// ...

// Fonction Clear pour la calculatrice standard
function ClearStandard() {
  btnC.onclick = function () {
    inputCalcStandard.value = "";
  };
}
ClearStandard();

// Fonction Clear pour la calculatrice scientifique
function ClearScientific() {
  btnC.onclick = function () {
    result.value = "";
  };
}
ClearScientific();

// ...

// Fonction DeleteLastChar pour la calculatrice standard
function DeleteLastCharStandard() {
  btnDelete.onclick = function () {
    let chain = inputCalcStandard.value;
    let newChain = chain.slice(0, -1);
    inputCalcStandard.value = newChain;
  };
}
DeleteLastCharStandard();

// Fonction DeleteLastChar pour la calculatrice scientifique
function DeleteLastCharScientific() {
  btnDelete.onclick = function () {
    let chain = result.value;
    let newChain = chain.slice(0, -1);
    inputCalcScientific.value = newChain;
  };
}
DeleteLastCharScientific();

// ...

// Autres fonctions et événements pour la calculatrice standard et scientifique
// ...
