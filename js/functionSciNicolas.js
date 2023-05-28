let rowMemory = ["MC", "MR", "M+", "M-", "MS"];

const tableCalculator = document.getElementById("tableCalc");

function CreateMemoryLine() {
    let memoryLine = document.createElement("tr");
    memoryLine.setAttribute("id", "memoryLine");
    tableCalc.appendChild(memoryLine);

    for (i = 0; i < rowMemory.length; i++) {
        let memoryCell = document.createElement("td");
        memoryCell.setAttribute("id", "memoryCell" + i);
        memoryLine.appendChild(memoryCell);
        memoryCell.innerHTML += rowMemory[i];
    }
}
CreateMemoryLine();

/*--------------------------------------------------------------------------------------------------------------------------*/

const inputCalc = document.getElementById("inputCalc");
const inputResult = document.getElementById("inputResult");

const btnPourcent = document.getElementById("btnPourcent");
const btnCE = document.getElementById("btnCE");
const btnC = document.getElementById("btnC");
const btnDelete = document.getElementById("btnDelete");

const btnInverse = document.getElementById("btnInverse");
const btnSquare = document.getElementById("btnSquare");
const btnSquareRoot = document.getElementById("btnSquareRoot");
const btnDivide = document.getElementById("btnDivide");

const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btnMultiply = document.getElementById("btnMultiply");

const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btnSoustraction = document.getElementById("btnSubstract");

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btnAdd = document.getElementById("btnAdd");

const btnChangeSign = document.getElementById("btnChangeSign");
const btn0 = document.getElementById("btn0");
const btnComma = document.getElementById("btnComma");
const btnEqual = document.getElementById("btnEqual");
const btnLog = document.getElementById("btnLog");
const btnLn = document.getElementById("btnLn");

const btnPi = document.getElementById("btnPi");
const btnE = document.getElementById("btnE");
const btnAbs = document.getElementById("btnAbs");
const btnExp = document.getElementById("btnExp");
const btnFactorial = document.getElementById("btnFactorial");

const btnMod = document.getElementById("btnMod");
const btnXPowerY = document.getElementById("btnXPowerY");
const btnParenthesisIn = document.getElementById("btnParenthesisIn");
const btnParenthesisOut = document.getElementById("btnParenthesisOut");
const btn10PowerX = document.getElementById("btn10PowerX");



const btnMc = document.getElementById("memoryCell0");
const btnMr = document.getElementById("memoryCell1");
const btnMPlus = document.getElementById("memoryCell2");
const btnMMinus = document.getElementById("memoryCell3");
const btnMs = document.getElementById("memoryCell4");

/*-----------------------------------------------------------------------------------------------------*/

function lastElement() {
    let chain = inputCalc.value;
    let chainDivide = chain.split(/[-+*/]/);
    let lastElement = chainDivide[chainDivide.length - 1];
    return parseInt(lastElement);
}
lastElement();

function memory() {
    let memory = 0;

    btnMc.onclick = function () {
        memory = 0;
    };

    btnMs.onclick = function () {
        memory = lastElement();
    };

    btnMr.onclick = function () {
        if (inputCalc.value != '') {
            inputCalc.value = '';
            inputCalc.value = memory;
        } else {
            inputCalc.value += memory;
        }
    };

    btnMPlus.onclick = function () {
        let result = eval(inputCalc.value);
        memory += result;
        console.log("New memory : " + memory);
    };

    btnMMinus.onclick = function () {
        let result = eval(inputCalc.value);
        memory -= result;
        console.log("New memory : " + memory);
    };
}
memory();
/*function disableInput() {
    inputCalc.readOnly = true;
    inputResult.readOnly = true;
}
disableInput();*/

function Clear() {
    btnC.onclick = function () {
        inputCalc.value = "";
        inputResult.value = "";
    };
}
Clear();

function DeleteLastChar() {
    btnDelete.onclick = function () {
        let chain = inputCalc.value;
        let newChain = chain.slice(0, -1);
        inputCalc.value = newChain;
        console.log(newChain);
    };
}
DeleteLastChar();

function AddNumber(btn, content) {
    btn.onclick = function () {
        inputCalc.value += content;
        /*console.log(inputCalc.value);*/
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
//AddNumber(btnLog);
// AddNumber(btnLn, Math.);

AddNumber(btnPi, Math.PI);
AddNumber(btnE, Math.E);

function AddOperator(btn, operator) {
    btn.onclick = function () {
        let chain = inputCalc.value;
        let lastChart = chain.charAt(chain.length - 1);
        /*console.log(lastChart);*/

        if (lastChart !== operator && lastChart !== "") {
            inputCalc.value += operator;
        }
    }
}

AddOperator(btnAdd, ' + ');
AddOperator(btnSubstract, ' - ');
AddOperator(btnDivide, ' / ');
AddOperator(btnMultiply, ' * ');
AddOperator(btnComma, '.');
AddOperator(btnPourcent, '%');
AddOperator(btnMod, 'mod');
AddOperator(btnXPowerY, '^');
AddOperator(btnParenthesisIn, ' ( ');
AddOperator(btnParenthesisOut, ' ) ');

btnPourcent.onclick = function () {
    let chain = inputCalc.value;
    chainDivide = chain.split(" ");
    console.log(chainDivide);
    lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    let temp = lastElement / 100;
    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    let contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
}

btnSquare.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    let temp = eval(lastElement * lastElement);
    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
}

btnSquareRoot.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    let temp = Math.sqrt(lastElement);
    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
}

btnInverse.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    let temp = 1 / lastElement;
    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
}

btnAbs.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    let temp = Math.abs(lastElement);
    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
}

btnExp.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    let temp = Math.exp(lastElement);
    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
}

btnLog.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    let temp = Math.log10(lastElement);
    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
}

btnLn.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    let temp = Math.log10(lastElement) * Math.LN10;
    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
}

btnFactorial.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    function fnFactorial(num) {
        console.log(num);
        if (num === 0 || num === 1) return 1;
        for (let i = num - 1; i >= 1; i--) {
            num = num * i;
        }
        return num;
    }
    let temp = fnFactorial(lastElement);
    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
}

btn10PowerX.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    let temp = Math.pow(10, lastElement);
    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
}

btnChangeSign.onclick = function () {
    function plusMinus() {
        if (inputCalc.value.charAt(0) === "-") {
            inputCalc.value = inputCalc.value.slice(1);
        } else {
            inputCalc.value = "-" + inputCalc.value;
        }
    }
    plusMinus();
}

function result() {

    btnEqual.onclick = function () {

        let inputContent = inputCalc.value;
        let newInputContent = inputContent.replace("mod", "%");
        console.log(newInputContent);

        let chainDivide = newInputContent.split(" ");
        console.log(chainDivide);

        for (i = 0; i < chainDivide.length; i++) {

            let estPresent = chainDivide[i].includes("^");
            console.log(estPresent);

            if (estPresent) {
                powerChain = chainDivide[i].split("^");
                console.log(powerChain);

                chainDivide[i] = Math.pow(powerChain[0], powerChain[1]);
                console.log(chainDivide[i]);

            }

        }
        console.log(chainDivide);
        contentTab = chainDivide.join(" ");
        console.log(contentTab);

        let result = eval(contentTab);
        console.log(result);
        inputResult.value = result;
    }

}
result();
