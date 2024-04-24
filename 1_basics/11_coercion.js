/**
 * 타입 변환
 * type conversion
 *
 * 1) 명시적
 * 2) 암묵적
 */
let age = 32;
//명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

//암묵적
let test = age + "";
console.log(typeof test, test);
//숫자 더하기 문자 > 문자

console.log("98" + 2);
//문자에 숫자를 더한거니까 문자

console.log("98" * 2);
//문자에는 곱한다는 개념이 없기 때문에 곱할때는 문자가 숫자로 인식하게 됨 196

//암묵적으로 하는 것은 썩 좋지 않음

/**
 * 명시적 변환 몇가지 더 배우기 toString 하면 스트링 값으로 변함
 */
console.log("-------------------------");
console.log(typeof (99).toString());
console.log(typeof true.toString());

//숫자 타입으로 변환 parseInt 는 정수로 변환하는 것
console.log(typeof parseInt("0"), parseInt("0"));
console.log(typeof parseFloat("0.99"), parseFloat("0.99"));
console.log(typeof +"1", "1");

//boolean 타입으로 변환
console.log("---------------");
console.log(!!"x");
// !!하고 뒤에 문자 있으면 true다
console.log(!!"");
//!! 하고 뒤에 문자 없으면 false다
console.log(!!0);
console.log(!!"0");
console.log(!!undefined);
//값이 존재하면 true고, 값이 존재 하지 않으면 false다 라고 이해 ..!

console.log(!!{}); //object는 값이 있든 없든 true다
console.log(!![]); //리스트는 값이 있든 없든 tur다.

/**
 * 1)아무 글자도 없는 string
 * 2) 값이 없는 경우
 * 3) 0
 *
 * 모두 false를 반환한다.
 */
