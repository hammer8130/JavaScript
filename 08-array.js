// 배열의 생성 : 방법 1. new 키워드
const v1 = new Array(10)        // 10개짜리 배열
const v2 = new Array()          // 빈 배열
const v3 = new Array(2024,"String",false) // 초기값이 있을 때 어떠한 데이터, 객체들 다 들어간다.

console.log(v1,v1.length, typeof v1)
console.log(v2,v2.length,typeof v2)
console.log(v3,v3.length,typeof v3)

// 배열의 생성 : 방법 2, 리터럴로 생성 -> 추천
const v4 = []
const v5 = ["red","blue","green","yellow"]

console.log(v4,v4.length, typeof v4)
console.log(v5,v5.length, typeof v5)