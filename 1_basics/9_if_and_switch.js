/**
 * if and switch
 */
let number = 5;

if (number % 2 === 0) {
  console.log("number 변수는 짝수입니다.");
} else {
  console.log("number은 홀수 입니다.");
}

if (number % 2 === 0) {
  console.log("2의 배수입니다.");
} else if (number % 3 === 0) {
  console.log("3의 배수입니다");
} else if (number % 4 === 0) {
  console.log("4의 배수입니다.");
} else {
  console.log("2,3,4의 배수가 아닙니다.");
}

const englishDay = "monday";
let koreanday;

switch (englishDay) {
  case "monday":
    koreanday = "월요일";
    break;
  case "thuesday":
    koreanday = "화요일";
    break;
  case "wednesday":
    koreanday = "수요일";
    break;
  default:
    koreanday = "주말";
    break;
}

console.log(koreanday);
