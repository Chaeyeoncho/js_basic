// 1. 콜백함수
function main(value){
    value();
    console.log(value);
}

main(()=>{
    console.log("iam sub");
}); 

// 2. 콜백함수  
function repeat(count){
 for(let i=0; i<= count; i++){
     callback(i);
 }  
}

function repeatDouble(count){
    for(let i=0; i<= count; i++){
        console.log(i*2);
    }  
   }
 
repeatDouble(5);

// 이렇게 하면 중복함수 발생 따라서 콜백함수 

function rabbit(count, callback){
    for(let i=0; i<= count; i++){
        callback(i);
    }  
}

rabbit(5, function(i){
    console.log(i*2);
})


