function funcA(){
    console.log('funcA');
}

let varA = funcA;

console.log(varA); // funcA
varA(); // funcA

let varB = function(){
    console.log('funcB');
}

varB(); // funcB

//함수 선언문은 첫 함수 , 함수 표현식은 두번째 함수를 출력한다. 
// 함수 선언문은 호이스팅이 되지만 함수 표현식은 호이스팅이 되지 않는다.   

let varC = (value) => {
    console.log(value);
    return value +1;
}

console.log(varC(1)); // 1