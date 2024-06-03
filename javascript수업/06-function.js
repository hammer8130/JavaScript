// 함수 선언문
function sum(a,b){
    console.log(typeof a, typeof b)
    return a+b
}
console.log(sum(7,7))

console.log("----------------함수 표현식")
console.log(" ")
// 함수 표현식 -> 익명 함수
//      -다른 객체들과 동등한 권리와 지위
//      -변수에 할당 가능
//      -다른 함수의 매개변수로 전달 가능
const f = function(a,b){
    return a+b
}
console.log(f,typeof f)
console.log(f(10,20))

console.log("---------------------함수의 매개변수")
console.log("    ")

// 함수의 매개변수
// ES의 함수는 선언부에 선언된 매개변수의 개수와 맞지 않게 호출 가능
console.log(sum())

// 매개변수가 없는 함수
function getNumT(){
    // ES 특성상 전달되는 모든 매개변수는 arguments 함수 객체에 모두 전달
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        if(typeof arguments[i] ==="number"){
            sum += arguments[i]
        }
    }
    return sum
}
// 숫자 데이터만 합산하거나, 문자 데이터를 casting 하거나 둘 중 하나 선택
console.log(getNumT(1,2,3,4,5))
console.log(getNumT(1,2,"3",4,5))

// 함수는 객체 -> 변수에 할당되거나 다른 함수의 매개변수로 전달 가능
function calculator(a,b,func){ // func 계산식 함수
    if(typeof func === "function"){
        console.log(func (a,b))
    }else{
        console.log("함수아님")
    }
}

calculator(10,20) // argument에 func가 없다. 최종값 else
calculator(10,20,function(v1,v2){
    return v1+v2
})
// 사용 예시: 한 버튼을 구현했을때, callback 함수를 부여해서 click했을 때 어떠한 event가 발생.


// 함수 보충
console.log("=============== 화살표 표기법") // 매개변수 목록 => 구현 내용
console.log(" ")

const f1 = function(){
    return "hello"
}
// 매개변수 X , 리턴 O
console.log(f1())
const f1_arrow = () => "hello"
console.log(f1_arrow())

// 매개변수 O , 리턴 O
const f2 = function(name){
    return "Hello, "+name
}
console.log(f2("정우찬"))

const f2_arrow =name => "Hello, "+name // 1개의 매개변수 일 경우 ()생략 가능
console.log(f2_arrow("정우찬"))

// 매개변수 여러개
const f3 = function(a,b){
    return a+b
}
console.log(f3(10,20))
const f3_arrow = (a,b) => {
    // 여러 개의 로직 수행할 시, 블록{}을 잡을 수 있다.
    // 블록이 잡히면 return문 필수. 생략 불가
    console.log("화살표 함수")
    return a+b
}
console.log(f3_arrow(7,10))

// Callback 함수를 화살표 함수로 정의
calculator(10,20,(v1,v2) => v1+v2)
calculator(10,20,(v1,v2) => v1*v2)

// 콜백 함수 활용 -> Array 추가 정의


