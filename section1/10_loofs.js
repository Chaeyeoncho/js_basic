/**
 * loops
 * 1)for
 * 2)while
 */
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("----------------");

for (let i = 0; i < 3; i++) {
  for (let j = 3; j > 0; j--) {
    console.log(i, j);
  }
}

// *을 이용해서 6곱하기 6 정사각형을 출력해라

let square = "";
let side = 6;
for (let i = 0; i < side; i++) {
  for (let j = 0; j < side; j++) {
    square += "*";
  }
  square += "\n";
}
console.log(square);

/**
 * for ...in
 */
const yunjn = {
  name: "안유진",
  year: 2023,
  group: "아이브",
};
console.log("------------");

for (let key in yunjn) {
  console.log(key);
}

const ivemembersarray = ["안", "유", "진", "조", "채", "연"];

for (let key in ivemembersarray) {
  console.log(key);
  console.log(`${key}:${ivemembersarray[key]}`);
}

/**
 * for of loof
 */
for (let value of ivemembersarray) {
  console.log(value);
}

/**
 * while
 */
let number = 0;

while (number < 10) {
  number++;
}

console.log(number); //false가 되면 whileloop 끝나고 마지막 console실행 그래서 결국 1을 출력

/**
 * break 끝내고 loop를 나오는 것 contunue는 그것만 pass
 */
console.log("------------");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
/**
 * continue
 */
console.log("------------");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
