/*
[문제]
대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
▣ 입력설명
첫 번째 줄에 문자열이 입력된다.
▣ 출력설명
첫 번째 줄에 바뀐 단어를 출력한다.
▣ 입력예제 1 BANANA
▣ 출력예제 1 B#N#N#
*/

/*
[풀이]
입력 값에서 A가 있으면 #으로 대체 한다.
*/

function question9(resp) {

    // 방법 1 : 문자를 한글자씩 받아오는 방법 (of 함수 사용)
    var result = '';

    for (var test of resp) {
        if(test == "A") {
            test = "#";
        }
        result += test;
    }

    console.log("result", result);

    // 방법 2 : 한 글자씩 잘라 배열에 넣어서 확인
    var arr = resp.split("");
    var result2 = '';

    for(var i = 0; i < arr.length; i++) {
        if(arr[i] == "A") {
            arr[i] = "#";
        }

        result2 += arr[i];
    }

    console.log("result2", result2);

    return result;
}

console.log(question9('BANANA'));