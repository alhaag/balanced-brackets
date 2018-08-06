/**
 * We say a sequence of brackets is valid if the following conditions are met:
 * It contains no unmatched brackets.
 * The subset of brackets enclosed within the confines of a matched pair of brackets is
 * also a matched pair of brackets.
 *
 * Examples:
 * (){}[] is valid
 * [{()}](){} is valid
 * []{() is not valid
 * [{)] is not valid
 */

const TOKENS = [ ['{','}'] , ['[',']'] , ['(',')'] ]

/**
 * Check if character is an opening bracket
 */
function isOpenParenthesis(parenthesisChar) {
  for (let i = 0; i < TOKENS.length; i++) {
    if (TOKENS[i][0] === parenthesisChar) return true
  }
  return false
}

/**
 * Check if opening bracket matches closing bracket
 */
function matches(topOfStack, closedParenthesis) {
  for (let i = 0; i < TOKENS.length; i++) {
    if (TOKENS[i][0] === topOfStack && TOKENS[i][1] === closedParenthesis) {
      return true
    }
  }
  return false
}

/**
 * Checks if item is any sort of paranthesis
 */
function isParanthesis(char) {
  var str = '{}[]()'
  return (str.indexOf(char) > -1) ? true : false
}

/**
 * We excute this function upon the event
 */
function isBalanced(inputStr) {
  if (inputStr === '' || inputStr === null) return true

  let expression = inputStr.split('')
  let stack = []

  for (let i = 0; i < expression.length; i++) {
    if (isParanthesis(expression[i])) {
      if (isOpenParenthesis(expression[i])) {
        stack.push(expression[i])
      } else {
        if (stack.length === 0) return false
        let top = stack.pop() // pop off the top element from stack
        if (!matches(top, expression[i])) return false
      }
    }
  }
  return stack.length === 0 ? true : false
}

console.log(' TRUE ----------------')
console.log(isBalanced('{}[]()'))
console.log(isBalanced('{}'))
console.log(isBalanced('[]'))
console.log(isBalanced('()'))
console.log(isBalanced('()[]{}'))
console.log(isBalanced('{[()]}'))
console.log(isBalanced('word{[(word)]}word'))
console.log(isBalanced('[{()}](){}'))
console.log(' FALSE ----------------')
console.log(isBalanced('[()]}'))
console.log(isBalanced('{[()]'))
console.log(isBalanced('{()]}'))
console.log(isBalanced('([]{}'))
console.log(isBalanced('([]{)}'))
