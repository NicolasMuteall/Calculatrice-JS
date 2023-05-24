function fnPi() {
  return Math.PI;
}

function fnMultiply(a, b) {
  return a * b;
}

function fnDivide(numerator, denominator) {
  if (denominator !== 0) {
    return numerator / denominator;
  } else {
    return "Divided by 0 not allowed";
  }
}
function fnPlus(a, b) {
  return a + b;
}

function fnMinus(a, b) {
  return a - b;
}

function fnChangeSign(a) {
  return -a;
}

function fnAbs(a) {
  return Math.abs(arguments);
}

function fnInverse(a) {
  if (a !== 0) {
    return 1 / a;
  } else {
    return "Divided by 0 not allowed";
  }
}

function fnSquareRoot() {
  return Math.SQRT1_2;
}

console.log(fnSquareRoot(25));
