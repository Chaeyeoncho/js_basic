//1. falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = '';
let f7 = 0n;

if(!f1){
    console.log('f1은 falsy한 값입니다.');
}
//2. truthy한 값
let t1 = 1;
let t2 = 'hello';
let t3 = {};
let t4 = [];
let t5 = function(){};

if(t1){
    console.log('t1은 truthy한 값입니다.');
}

//3. 활용 사례

// let person = {
//     name: 'Lee'
// };  

function printName(person){
    if(!person){
        console.log('person이 없습니다.');
        return;
    }
    console.log(person.name);
}
let person;
printName(person); //undefined
