/**
 * Operators
 *
 * 연산자
 */
/**
 * 산술 연산자
 *
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */
console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);

console.log("--------------");

console.log(10 * (10 + 10));

/**
 * 증가와 감소
 */
var number = 1;

number++;
console.log(number);

number--;
console.log(number);

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number++;
console.log(result, number);

result = number--;
console.log(result, number);

result = ++number;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +,-를 사용하면 어떻게 될까?
 */
let sample = "99";

console.log(+sample);
console.log(typeof +sample);
// string에 +를 붙이면 type이 number로 출력된다

console.log(sample);
console.log(typeof sample);

sample = true;
console.log(+sample);
console.log(typeof +sample);

sample = "조채연";
// NAN > Not a number
console.log(+sample);

/**
 * 할당연산자
 */
number = 100;
console.log(number);

number += 10;
console.log(number);

number *= 10;
console.log(number);

/**
 * 비교 연산자
 *
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 *
 */
console.log(5 == 5); // 값의 비교 T,T,T
console.log(5 == "5");
console.log(0 == " ");

console.log(5 === 5); // 값과 타입의 비교 T,F,F
console.log(5 === "5");
console.log(0 === " ");
console.log("--------------");
/**
 * 대소 관계 비교 연산자
 */
console.log(100 > 1);
console.log(100 < 1);

/**
 * 삼항 조건 연산자
 */
console.log(10 > 0 ? "10이 0보다 크다" : "10이 0보다 작다");

/**
 * 논리 연산자
 *
 * 1)&&
 * 2)||
 */
// && 조건은 모두 true여야 true를 반환한다.
console.log(true && true); // 둘중 하나가 false이면 false반환
console.log(true && false);

console.log("---------------");
console.log(true || false); // 둘 중 하나가 true면 true 반환

/**
 * 단축평가
 *
 * &&를 사용했을 떄 좌측이 ture면 우측값 반환
 * &&를 사용했을 때 좌측이 false면 좌측값 반환
 * ||를 사용했을 때 좌측이 true면 좌측값 반환
 * ||를 사용했을 때 좌측이 false면 우측값 반환
 */

console.log("----------");
console.log(true || "아이브");
console.log(false || "아이브");
console.log(true || "아이브");
console.log(false || "아이브");

/**
 * 지수연산자
 */
console.log(2 ** 2);
