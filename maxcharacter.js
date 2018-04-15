function maxCharInString(str) {
    const strObj = {};

    for (let char of str) {
        if (strObj[char]) {
            strObj[char]++;
        } else {
            strObj[char] = 1;
        }
    }
    console.log(strObj);
}

var testCase = "aaaabbbbcccccfffffdddd"
var testCase2 = "aaaaaabbbbcccccdd"

maxCharInString(testCase);