// 함수 선언
 function greeting() {
    console.log('안녕하세요!');
 }

 greeting();

 //함수 
 function getArea(width, height){ // 함수의 변수를 매개변수

    function another(){ // 중첩함수
        console.log('another'); 
    }
    another();
    // let width = 10;
    // let height = 20; 
    let area = width * height;

    return area; // 함수의 결과값을 반환
 }

 let area1 =  getArea(10, 20); // 인수 
 console.log(area1);
 getArea(20,30);