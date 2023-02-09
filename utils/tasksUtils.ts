export const calculator = (expression: string) => {
  if (expression) {
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
}

export const lastNumberWrittenByPeter = (num: number): number => {
  let str = num.toString();
  let len = str.length;
  let res = "";

  for (let i = 0; i < len; i++) {
    if (str[i] == "9") {
      res += "9";
    } else {
      res += (parseInt(str[i]) - 1).toString();
      for (let j = i + 1; j < len; j++) {
        res += "9";
      }
      break;
    }
  }

  return parseInt(res);
}

const infixToPostfix = (expression) => {
  const tokens = expression.split(" ");
  const stack = [];
  const output = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      output.push(token);
    } else if (token === "(") {
      stack.push(token);
    } else if (token === ")") {
      while (stack[stack.length - 1] !== "(") {
        output.push(stack.pop());
      }
      stack.pop();
    } else {
      while (
        stack.length &&
        ["+", "-", "*", "/"].includes(stack[stack.length - 1])
      ) {
        output.push(stack.pop());
      }
      stack.push(token);
    }
  }

  while (stack.length) {
    output.push(stack.pop());
  }

  return output.join(" ");
}
export interface Point {
  x: number,
  y: number
}

export const plotGraph = (expression: string): Point[] => {
  if (!expression.startsWith("y =")) {
    return;
  }

  let expressionSpilt = expression.split("=")[1];
  let result = expressionSpilt.split(/\s*([+\-\/*()])\s*/).filter(val => val !== "").join("");
  const postfixExpression = infixToPostfix(result);
  let resultPoint: Point[] = [];
  for (let x = -10; x <= 10; x++) {
    let term = postfixExpression.replace(/x/g, x.toString());
    let y = calculator(term);
    resultPoint.push({
      x: x,
      y: y
    })
  }
  return resultPoint
}
