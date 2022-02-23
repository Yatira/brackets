module.exports = function check(str, bracketsConfig) {
  // your solution
  let brackets = bracketsConfig.join('').replace(/,/g, '');
        let stack = [];
    for (let bracket of str) {
            let bracketsIndex = brackets.indexOf(bracket)

            if (bracketsIndex % 2 === 0) {
                stack.push(bracketsIndex)
                if (bracket === brackets[bracketsIndex+1]){
                    stack.pop();
                }
                
            } 
            else {
                if (stack.pop() !== bracketsIndex-1){
                    return false;
                }
            }
            
        }
        return stack.length === 0
    
}