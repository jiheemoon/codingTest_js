/** 2.암호문
- 편지 안에 내용은 문자열로 주어집니다.
- 문자열 중에 r, e, v 뒤에 나오는 값을 더하여 나온 최종 숫자에서 앞자리를 `월`로 뒷자리를 `일`로 판단합니다.
- r, e, v 뒤에 나오는 숫자는 1부터 10까지입니다. 이를 넘어가는 숫자가 나올 경우 앞 숫자만 뽑아냅니다.
 */

const testcases = ['adr10bb1d9ia10e33b7u88k3j1a3v11v9', 'r1rr2rrr3rrrrr4rrrrrre5', '12345r12345e90v90r90'];
const answers = [];
for (let index = 0; index < testcases.length; index++) {
    const testcase = testcases[index];
    var result = 0;

    let found = testcase.match(/(?:[rev]10)|(?:[rev][0-9])/g); // ?: 캡처없는 그룹화 | 혹은 [] 내부문자중에 하나가 포함되어 있을 경우 /g 모든패턴 찾기
    //console.log(found);
    for (let index = 0; index < found.length; index++) {
        result += found[index].substr(1)*1;
    }
    result = result.toString();
    //1.replace 사용
    //answers.push(result.replace(/(\d{1})(\d)/g ,'$1월 $2일'));
    //2.slice 사용
    //answers.push(result.slice(0,1)+'월 '+result.slice(1,2)+'일');
    //3.substring 사용
    answers.push(result.substring(0,1)+'월 '+result.substring(1,2)+'일');
}
console.log(answers);
//['2월 3일', '1월 5일', '2월 8일']