/** 3.출정인원 선발
- 기술자의 이름, 체력, 정신력, 기술력, 방어력이 담긴 배열을 입력받습니다.
- 체력, 정신력, 기술력, 방어력의 총합을 구했을 때 상위 30%의 지원자만 전투에 참가할 수 있습니다.
- 기술자의 이름은 점수의 내림차순으로 출력합니다.
- 동일한 점수의 기술자가 있을 경우 알파벳의 역순으로 출력합니다. 
0 ≤ 체력, 정신력, 기술력, 방어력 ≤ 25
 */

const testcases = [
    [['A', 25, 24, 11, 12], ['B', 13, 22, 16, 14]],
    [['A', 25, 24, 11, 12], ['B', 13, 22, 16, 14], ['C', 12, 22, 16, 14], ['D', 13, 22, 16, 14], ['E', 12, 25, 16, 19], ['F', 23, 15, 16, 14], ['G', 13, 14, 3, 5], ['H', 25, 22, 11, 14], ['I', 13, 12, 14, 23], ['J', 13, 22, 15, 14]],
    [['A', 11, 23, 17, 15], ['B', 15, 22, 17, 22], ['C', 13, 22, 16, 14], ['D', 18, 22, 16, 25], ['E', 8, 13, 23, 21]],
    [['A', 25, 25, 25, 25], ['B', 25, 25, 25, 25], ['C', 25, 25, 25, 25], ['J', 13, 22, 16, 14]],
];
const answers = [];
for (let index = 0; index < testcases.length; index++) {
    const testcase = testcases[index];
    const answer = [];
    if(testcase.length > 3){
        //알파벳 오름차숨 정렬
        testcase.sort(function(a, b){
            return (b[0] - a[0]).reverse();
        });
        //점수 내림차순으로 정렬
        testcase.sort(function(a, b){
            return (b[1]+b[2]+b[3]+b[4]) - (a[1]+a[2]+a[3]+a[4]);
        });
        console.log(testcase);
        //상위 몇 퍼센트에 해당하는지 계산
        const percentileIndex = Math.floor((30 / 100) * testcase.length);
        //상위 퍼센트에 해당하는 값을 반환
        const topPercentageValue = testcase[percentileIndex - 1][1]; // 0-based index를 고려하여 -1
    
    
        answers.push(answer);
    }else{
        answers.push(answer);
    }
}
//console.log(answers);
//[[], ['H', 'E', 'A'], ['D'], []]