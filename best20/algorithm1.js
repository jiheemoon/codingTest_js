/** 왕좌에 앉으려는 자! 자격을 증명하라!
- 65 ≤ 주어진 숫자 ≤ 122
- 문자열은 `+`, `-`, `공백` 외에는 주어지지 않습니다.
- 각각의 문자열은 1차원 리스트로 주어집니다.
- 공백은 주어질 수도 있고, 주어지지 않을 수도 있습니다.
 */

var testCases = [['  + + - + -+-', '  ++--+-+  ', '++ -+ -+-', '+++- +-+'], ['++-- -++', '++-- --+', '+++- +--'], ['++-++--', '++-+--+', '++-++++', '++-+++-']];
var answers = [];
for (let index = 0; index < testCases.length; index++) {
    const testCase = testCases[index];
    var stringArray = '';
    for (let index = 0; index < testCase.length; index++) {
        // 대체
        const binary = testCase[index].replaceAll(' ', '').replaceAll('+', '1').replaceAll('-', '0');
        // 2진수(binary) -> 10진수(decimal)로
        const decimal = binaryToDecimal(binary);
        // 10진수 아스키코드표 문자로
        stringArray += String.fromCharCode(decimal);
    }   
    answers.push(stringArray);
}
console.log(answers);

function binaryToDecimal(binary){
    binary = binary.split('').reverse();
    
    let decimal = 0;
    // 각 자리의 2의 제곱 값을 더해주기
    for (let index = 0; index < binary.length; index++) {
        if(binary[index] === '1') decimal += Math.pow(2, index);
    }

    return decimal;
}