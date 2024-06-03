// Boolean 
// - 비교 연산의 결과
// - 논리 연산의 결과
// - 논리 조합 : AND(&&), OR(||), NOT(!)
let v1
let v2 = null
console.log(typeof v1, typeof v2) // undefined, object
// undefined - 비어있음. 할당 자체가 되지 않은 것. javascript가 사용
// null - 비어있음. null 객체가 할당된 것. 개발자가 직접 할당.
console.log(v2,typeof v2,v2==null)

v2 = undefined // 개발자가 임의로 설정 이전의 상태로 돌리기도 한다.

console.log(v2,typeof v2, v2==undefined)

// == : 타입과 상관 없이 값을 비교
// === : 타입과 값 함께 비교
console.log(123 == "123") // true -> 값만 비교
console.log(123 === "123") // false -> 값과 타입을 함께 비교

// number, string의 값이 있으면 true
//                  값이 없으면 false
console.log(Boolean("Javascript"),Boolean("")) //  
console.log(Boolean(2024),Boolean(0)) // 

//  Short-circuit
console.log(true && "Test") //  Test ==> true 일때만 Test를 호출
console.log(false && "Test") // F && T

console.log(true || "Test") // True
console.log(false || "Test") // Test


