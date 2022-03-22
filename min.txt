function min(A, B, C) {
	let num;

	if (A > B) {
		if (B > C) {
			B = C;
			num += B;
		} else {
			num += B;
		}
	} else { 
		if (C > A) {
			A = C;
			num += A;
		} else {
			num += C;
		}
	}
	return num;
}
console.log(min(6, 9, 11));

/*function solution(a, b, c){
	let answer;
	if(a<b) answer=a;
	else answer=b;
	if(c<answer) answer=c;
	
	return answer;
}

console.log(solution(6, 9, 11));
*/
