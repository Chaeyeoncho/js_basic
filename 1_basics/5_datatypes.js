/**
 * data types
 * 여섯개의 primitive type과
 * 한개의 오브젝트 타입이 있다.
 *
 * 1) Number (숫자)
 * 2) String(문자열)
 * 3) Boolean(불리언) 참과 거짓
 * 4) undefined
 * 5) null
 * 6) symbol
 *
 * 7) object(객체)
 *   function
 *   array
 *   object
 */
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof Infinity);
console.log(typeof nInfinity);

/**
 * string 타입
 */

const codefactory = "코드팩토리";
console.log(typeof codefactory);

const ive = "'아이브', 안유진";
console.log(ive);

/**
 * Template literal
 *
 * 1) newline >\n
 * 2) tab  > \t
 * 3) 백슬래시를 스트링을 표현하고 싶다면 두번 입력하면 된다.
 */
const iveYuJin = "아이브\\안유진";
console.log(iveYuJin);

const ivei = `아이브
장원영`;
console.log(ivei);

const groupName = "아이브";
console.log(groupName + "  안유진"); // 이런식으로 띄어쓰기도 가능하다 !
console.log(`${groupName} 안유진`); //간단하게 하는 법
console.log("--------------");
/**
 * BOOLean 타입
 **/

const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined
 *
 * 사용자가 직접 값을 초기화 하지 않았을 때
 * 지정되는 값이다.
 *
 * 직접 undegined로 값을 초기화하는 건 지양해야한다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 *
 * undefined와 값과 마찬가지로 값이 없다는 뜻이나
 * js에서 개발자가 명시적으로 값이 없는 값으로 초기화 할 때
 * 사용된다
 */

let init = null;
console.log(init);
console.log(typeof init);

/**
 * symbol 타입
 *
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 symbol 함수를
 * 호출해서 사용한다.
 */

const test1 = "1";
const test2 = "1";

console.log(test1 == test2);
console.log("----------------");

const symbol1 = Symbol("1");
const symbol2 = Symbol("1");

console.log(symbol1 == symbol2);
// symbol값은 각기 다르다

/**
 * object 타입
 *
 * map
 * 키 : 벨류의 쌍으로 이루어져있다.
 * key : value
 */
const dictionary = {
  red: "빨간색",
  orage: "주황색",
  yellow: "노란색",
};

console.log(dictionary);
console.log(dictionary["red"]);
console.log(dictionary["orage"]);
console.log(dictionary["yellow"]);

console.log(typeof dictionary);

/**
 * array 타입
 *
 * 값을 리스트로 나열할 수 있는 타입이다.
 */
const iveMembersArray = ["안유진", "가을", "레이", "장원영", "리즈", "이서"];
console.log(iveMembersArray);
console.log(iveMembersArray[0]);
