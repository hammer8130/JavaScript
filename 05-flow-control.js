console.log("----------for문")
let i=0
for(i=2;i<10;i++){
    console.log(" ")
    for(j=1;j<10;j++){

        console.log(i+"*"+j+"="+i*j)
    }
}

console.log("-----------while문")

while(i<10){
    i++
    let j =2
    while(j<10){
        j++
        console.log(i+"*"+j+"="+i*j)
    }
}


console.log("----------for문")

for (i = 5; i > 0; i--) {
        let x = '';
        // console.log('')
    for (j = 0; j < i; j++) {
        x += '*';
        // console.log('*')
    }
    console.log(x);
}

console.log("-----------while문")


let count=5
while(count>0){
    let stars = "";
    let col = 1;
    while(col<=count){
       stars +="*"
        col++
    }
    console.log(stars)
    count-- 
}


// TODO : for ... in , for ... of
//      array extended 수업 이후에 추가 진행