module.exports = function check(str, bracketsConfig) {
  // your solution
  function check(str, configs) {
    const rxArr = bracketsConfig.map(getPairRx);
    let testString = str;
    let checkedNumber;
    
    do {
      checkedNumber = testString.length;
      testString = removeAllPairs(rxArr, testString);
    } while(testString.length > 0 && testString.length !== checkedNumber);
    
    function escapeChars(string) {
      return string.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
    };
  
    function getPairRx(bracketsConfig) {
      return new RegExp(`${escapeChars(bracketsConfig.join(''))}`, 'g');
    }
    
    function removePair(rx, str) {
      return str.replace(rx, '');
    }
    
    function removeAllPairs(rxArr, str) {
      rxArr.forEach(rx => { str = removePair(rx, str); });
  
      return str;
    }
  
    return testString.length === 0;
  }
}

console.clear();
