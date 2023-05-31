let isStandard = true;
const decimal = 7;

function setDecimal(num) {
    // Denis
    return Math.floor(num * Math.pow(10, decimal)) / Math.pow(10, decimal);
}

function toggleInterface() {
    let standardInterface = document.getElementById("btnStd");
    let scientificInterface = document.getElementById("btnSci");

    if (isStandard) {
        standardInterface.style.display = "none";
        scientificInterface.style.display = "block";
        isStandard = false;
    } else {
        standardInterface.style.display = "block";
        scientificInterface.style.display = "none";
        isStandard = true;
    }
}

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
const btnMc = document.getElementById("memoryCell0");
const btnMr = document.getElementById("memoryCell1");
const btnMPlus = document.getElementById("memoryCell2");
const btnMMinus = document.getElementById("memoryCell3");
const btnMs = document.getElementById("memoryCell4");

inputCalc.value = "0";
/*-----------------------------------------------------------------------------------------------------*/
function DeleteLeftZero() {
    if (inputCalc.value === "0") inputCalc.value = "";
}

// function lastElement() {
//     let chain = inputCalc.value;
//     let chainDivide = chain.split(/[-+*/]/);
//     // console.log("lastElement  chainDivide : " + chainDivide);
//     let lastElement = chainDivide[chainDivide.length - 1];
//     // console.log("lastElement  lastElement : " + lastElement);
//     // console.log("lastElement  parseFloat : " + parseFloat(lastElement));
//     return parseFloat(lastElement); // Denis
// }

function memory() {
    let memory = 0;

    btnMc.onclick = function () {
        memory = 0;
    };

    btnMs.onclick = function () {
        memory = eval(inputCalc.value);
    };

    btnMr.onclick = function () {
        DeleteLeftZero();

        let chain = inputCalc.value;
        let chainDivide = chain.split(/[-+*/]/);
        let lastElement = chainDivide[chainDivide.length - 1];

        // console.log("typeof lastElement:  " + typeof lastElement);
        // console.log("isNaN(lastElement) :  " + typeof parseFloat(lastElement));

        if (isNaN(parseFloat(lastElement))) {
            // lastElement is not a number
            inputCalc.value += memory;
        } else {
            // Replace lastElement()
            let lastIndex = chain.lastIndexOf(lastElement) + 1;
            const replacement = memory.toString();
            inputCalc.value =
                chain.slice(0, lastIndex) +
                replacement +
                chain.slice(lastIndex + replacement.length);
        }
    };

    btnMPlus.onclick = function () {
        let result = eval(inputCalc.value);
        memory += result;
    };

    btnMMinus.onclick = function () {
        let result = eval(inputCalc.value);
        memory -= result;
    };
}
memory();

function Clear() {
    btnC.onclick = function () {
        inputCalc.value = "0"; // Denis
        inputResult.value = "";
    };
}
Clear();

function ClearCE() {
    btnCE.onclick = function () {
        let chain = inputCalc.value;
        let chainDivide = chain.split(" ");
        chainDivide[chainDivide.length - 1] = "";
        let contentTab = chainDivide.join(" ");
        inputCalc.value = contentTab;
    };
}
ClearCE();

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
        DeleteLeftZero();
        inputCalc.value += content;
        /*console.log(inputCalc.value);*/
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

function AddParenthesis(btn, operator) {
    btn.onclick = function () {
        let chain = inputCalc.value;
        console.log(chain);

        let lastChart = chain.charAt(chain.length - 1);
        console.log(lastChart);

        if ((lastChart == operator || lastChart !== "") && operator == " ( ") {
            DeleteLeftZero();
            console.log(lastChart);
            inputCalc.value += operator;
        } else if (lastChart !== operator && lastChart !== "") {
            console.log(lastChart);
            console.log(lastChart !== operator);
            inputCalc.value += operator;
        }
    };
}

function AddOperator(btn, operator) {
    btn.onclick = function () {
        let chain = inputCalc.value;
        let lastChart = chain.charAt(chain.length - 1);
        console.log("chain : " + chain);
        console.log("lastChart : " + lastChart);

        if (lastChart !== operator && lastChart !== "") {
            console.log(lastChart);
            console.log(lastChart !== operator);

            inputCalc.value += operator;
        }
    };
}

AddOperator(btnAdd, " + ");
AddOperator(btnSubstract, " - ");
AddOperator(btnDivide, " / ");
AddOperator(btnMultiply, " * ");
AddOperator(btnComma, ".");

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
};

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
};

btnSquareRoot.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);

    let temp = 0;
    if (lastElement >= 0) {
        temp = Math.sqrt(lastElement);
        temp = setDecimal(temp); // Denis
    } else {
        temp = lastElement;
    }

    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
};

btnInverse.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    let temp = 0;
    if (parseFloat(lastElement) !== 0) {
        temp = 1 / lastElement;
        result = setDecimal(temp); // Denis
    } else {
        result = lastElement;
    }
    console.log(result);
    console.log(temp);
    chainDivide[chainDivide.length - 1] = result;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
};

btnChangeSign.onclick = function () {
    function plusMinus() {
        if (inputCalc.value.charAt(0) === "-") {
            inputCalc.value = inputCalc.value.slice(1);
        } else {
            inputCalc.value = "-" + inputCalc.value;
        }
    }
    plusMinus();
};

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
    };
}
result();

/* ------------ SCIENTIFIQUE ------------ */

const btnPourcentS = document.getElementById("btnPourcentS");
const btnCES = document.getElementById("btnCES");
const btnCS = document.getElementById("btnCS");
const btnDeleteS = document.getElementById("btnDeleteS");
const btnInverseS = document.getElementById("btnInverseS");
const btnSquareS = document.getElementById("btnSquareS");
const btnSquareRootS = document.getElementById("btnSquareRootS");
const btnDivideS = document.getElementById("btnDivideS");
const btn7S = document.getElementById("btn7S");
const btn8S = document.getElementById("btn8S");
const btn9S = document.getElementById("btn9S");
const btnMultiplyS = document.getElementById("btnMultiplyS");
const btn4S = document.getElementById("btn4S");
const btn5S = document.getElementById("btn5S");
const btn6S = document.getElementById("btn6S");
const btnSoustractionS = document.getElementById("btnSubstractS");
const btn1S = document.getElementById("btn1S");
const btn2S = document.getElementById("btn2S");
const btn3S = document.getElementById("btn3S");
const btnAddS = document.getElementById("btnAddS");
const btnChangeSignS = document.getElementById("btnChangeSignS");
const btn0S = document.getElementById("btn0S");
const btnCommaS = document.getElementById("btnCommaS");
const btnEqualS = document.getElementById("btnEqualS");
const btnLog = document.getElementById("btnLog");
const btnLn = document.getElementById("btnLn");
const btnPiS = document.getElementById("btnPiS");
const btnES = document.getElementById("btnES");
const btnAbs = document.getElementById("btnAbs");
const btnExp = document.getElementById("btnExp");
const btnFactorial = document.getElementById("btnFactorial");
const btnMod = document.getElementById("btnMod");
const btnXPowerY = document.getElementById("btnXPowerY");
const btnParenthesisIn = document.getElementById("btnParenthesisIn");
const btnParenthesisOut = document.getElementById("btnParenthesisOut");
const btn10PowerX = document.getElementById("btn10PowerX");

AddNumber(btn0S, 0);
AddNumber(btn1S, 1);
AddNumber(btn2S, 2);
AddNumber(btn3S, 3);
AddNumber(btn4S, 4);
AddNumber(btn5S, 5);
AddNumber(btn6S, 6);
AddNumber(btn7S, 7);
AddNumber(btn8S, 8);
AddNumber(btn9S, 9);

AddParenthesis(btnParenthesisIn, " ( ");
AddParenthesis(btnParenthesisOut, " ) ");

function AddFn2Var(btn, operator) {
    btn.onclick = function () {
        let chain = inputCalc.value;
        let chainDivide = chain.split(/[-+*/]/);
        let lastElement = chainDivide[chainDivide.length - 1];
        console.log(lastElement);
        console.log(lastElement.includes(operator));

        if (lastElement.includes(operator)) {
            let lastESplit = lastElement.split(operator);
            console.log(lastESplit);
            if (lastESplit[1] !== "") {
                inputCalc.value += operator;
            }
        } else {
            inputCalc.value += operator;
        }
    };
}
AddFn2Var(btnXPowerY, "^");
AddFn2Var(btnMod, "mod");

function AddConstant(btn, content) {
    btn.onclick = function () {
        DeleteLeftZero();

        let chain = inputCalc.value;
        let chainDivide = chain.split(/[-+*/]/);
        let lastElement = chainDivide[chainDivide.length - 1];

        if (isNaN(parseFloat(lastElement))) {
            // lastElement is not a number
            inputCalc.value += content;
        } else {
            // Replace lastElement()
            let lastIndex = chain.lastIndexOf(lastElement) + 1;
            const replacement = content.toString();
            inputCalc.value =
                chain.slice(0, lastIndex) +
                replacement +
                chain.slice(lastIndex + replacement.length);
        }
    };
}

function ClearS() {
    btnCS.onclick = function () {
        inputCalc.value = "0";
        inputResult.value = "";
    };
}
ClearS();

function DeleteLastCharS() {
    btnDeleteS.onclick = function () {
        let chain = inputCalc.value;
        let newChain = chain.slice(0, -1);
        inputCalc.value = newChain;
        console.log(newChain);
    };
}
DeleteLastCharS();

AddConstant(btnPiS, Math.PI.toFixed(decimal));
AddConstant(btnES, Math.E.toFixed(decimal));

AddOperator(btnAddS, " + ");
AddOperator(btnSubstractS, " - ");
AddOperator(btnDivideS, " / ");
AddOperator(btnMultiplyS, " * ");
AddOperator(btnCommaS, ".");

btnPourcentS.onclick = function () {
    let chain = inputCalc.value;
    chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    let temp = lastElement / 100;
    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    let contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
};

btnSquareS.onclick = function () {
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
};

btnSquareRootS.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    let temp = 0;
    if (lastElement >= 0) {
        temp = Math.sqrt(lastElement);
        temp = setDecimal(temp); // Denis
    } else {
        temp = lastElement;
    }

    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
};

btnInverseS.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    let temp = 0;
    if (parseFloat(lastElement) !== 0) {
        temp = 1 / lastElement;
        temp = setDecimal(temp); // Denis
    } else {
        temp = lastElement;
    }
    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
};

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
};

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
};

btnLog.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    let temp = 0;
    if (lastElement > 0) {
        temp = Math.log10(lastElement).toFixed(decimal);
    } else {
        temp = lastElement;
    }
    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
};

btnLn.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);

    let temp = 0;
    if (lastElement > 0) {
        temp = (Math.log10(lastElement) * Math.LN10).toFixed(decimal);
    } else {
        temp = lastElement;
    }
    console.log(temp);
    chainDivide[chainDivide.length - 1] = temp;
    contentTab = chainDivide.join(" ");
    inputCalc.value = contentTab;
};

btnFactorial.onclick = function () {
    let chain = inputCalc.value;
    let chainDivide = chain.split(" ");
    console.log(chainDivide);
    let lastElement = chainDivide[chainDivide.length - 1];
    console.log(lastElement);
    function fnFactorial(num) {
        console.log(num);
        if (num == 0 || num == 1) return 1;
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
};

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
};

btnChangeSignS.onclick = function () {
    function plusMinus() {
        if (inputCalc.value.charAt(0) === "-") {
            inputCalc.value = inputCalc.value.slice(1);
        } else {
            inputCalc.value = "-" + inputCalc.value;
        }
    }
    plusMinus();
};

function resultS() {
    btnEqualS.onclick = function () {
        let inputContent = inputCalc.value;

        console.log(inputCalc.value.includes("mod"));

        // if (inputCalSc.value.includes("mod")) {
        //     let chainDivide = inputCalc.value.split(" ");
        //     console.log(chainDivide);
        // }

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
    };
}
resultS();
