export const calculator = (expression: string) => {
  let input = expression.split(/\s*([+\-\/*()])\s*/).filter(val => val !== "").join("");
  let result = 0;
  let currentNumber = '';
  let currentOperator = '';
  let i = 0;

  while (i < input.length) {
    let char = input[i].trim();
    if (char === '(') {
      let count = 1;
      let j = i + 1;
      while (count !== 0) {
        if (input[j] === '(') count++;
        if (input[j] === ')') count--;
        j++;
      }
      let subExpression = input.substring(i + 1, j - 1);
      let subResult = calculator(subExpression);
      if (currentOperator === '+') result += subResult;
      else if (currentOperator === '-') result -= subResult;
      else result = subResult;
      i = j;
      currentNumber = result.toString()
      continue;
    }

    if (char === '+' || char === '-') {
      if (currentNumber.length > 0) {
        if (currentOperator === '+') result += parseFloat(currentNumber);
        else if (currentOperator === '-') result -= parseFloat(currentNumber);
        else result = parseFloat(currentNumber);
        currentNumber = '';
      }
      currentOperator = char;
    } else if (char === '*' || char === '/') {
      let nextNumber = '';
      let j = i + 1;
      while (j < input.length && /\d/.test(input[j])) {
        nextNumber += input[j];
        j++;
      }
      if (char === '*' && nextNumber) {
        currentNumber = (parseInt(currentNumber) * parseFloat(nextNumber)).toString();
      } else if (nextNumber) {
        currentNumber = (parseInt(currentNumber) / parseFloat(nextNumber)).toString();
      }
      i = j - 1;
    } else {
      currentNumber += char;
    }
    i++;
  }

  if (currentNumber.length > 0) {
    if (currentOperator === '+') result += parseFloat(currentNumber);
    else if (currentOperator === '-') result -= parseFloat(currentNumber);
    else result = parseFloat(currentNumber);
  }

  return result;
}


export const findLastNumber = (n: number): number => {
  const nStr = n.toString();
  const length = nStr.length;

  let lastNumber = Number("1" + "9".repeat(length - 1));
  while (lastNumber > n) {
    lastNumber = Number("1" + (lastNumber % 10 - 1) + "9".repeat(length - 2));
  }

  return lastNumber;
}