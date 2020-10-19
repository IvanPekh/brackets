module.exports = function check(str, bracketsConfig) {
  const rules = bracketsConfig.join('').replace(/[\s.,%]/g, '');

  let brackets = rules;
  let stack = [];
  let duplicate = Array.from(brackets).filter((item, index) => Array.from(brackets).indexOf(item) != index);

  for(let bracket of str) {
    
    let bracketsIndex = brackets.indexOf(bracket);

    // exception for identical elements | or 7 or 8
    if (stack.includes(bracketsIndex + 1) && duplicate.includes(bracket)) { 
      bracketsIndex = bracketsIndex + 1;
    }

    if(bracketsIndex % 2 === 0) {
      stack.push(bracketsIndex + 1);
      
    } else {
      
      if(stack.pop() !== bracketsIndex) {
        return false;
      }
    }
  }
  return stack.length === 0;
  }
