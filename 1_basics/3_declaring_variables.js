/**
 * variable 선언하기
 * 1)var - 더 이상 쓰지 않는다 !
 * 2)let
 * 3)const
 */
var name = "코드팩토리";
console.log(name);

var age = 32;
console.log(age);

let ive = "아이브";
console.log(ive);

/**
 * let과 var로 선언하면
 * 값을 추후 변경할 수 있다.
 */
ive = "안유진";
console.log(ive);

const newJeans = "뉴진스";
console.log(newJeans);

//newJeans = "코드팩토리";
// 이런식으로 const는 변수를 바꿀 때 에러가 난다 ..!

/**
 * 선언과 할당
 *
 * 1) 변수를 선언하는 것
 * 2) 할당
 *
 */
var name = "코드팩토리";
console.log(name);

// 변수를 선언하기만 하고 할당하지 않는 것
let girlfriend;
console.log(girlfriend);
