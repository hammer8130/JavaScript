// String 
const s1 = "Hello Woochan Jung Woochan" // 리터럴 생성
const s2 = String("Hello Woochan Jung") // 타입 함수 이용 생성
const s3 = 123
console.log(typeof s1, typeof s2)

// .length : 문자열의 길이
console.log(s1.length) // 18

// 문자열 추출 메서드
console.log(s1.charAt(7))  
// ES는 문자열도 배열처럼 활용.
console.log(s1[7]) 
// console.log(s1.substr(7,10)) // deprecated
console.log(s1.substring(7,16))
console.log(s1.substring(7)) // 특정 순번부터 끝까지 출력

// 문자열 검색
let position = s1.indexOf("Woochan")
console.log("1st search:"+position)
position += 7
position = s1.indexOf("Woochan",position) // (검색어, 검색시작위치)
console.log("2nd search:"+position)

console.log("no keyword: "+s1.indexOf("money"))

console.log("lastIndexOf: "+s1.lastIndexOf("Woochan")) // 검색 방향: 뒤부터

// 문자열 치환
console.log(s1.replace("Woochan","Hammer"))

// 내부 데이터 변경이 아닌, 변경된 문자열을 새로 생성 반환. 바꾸려면 재할당 필요.
console.log(s1) 

// 변경 데이터를 뒤에서도 사용하고자 한다면 재할당 후 사용
const s1_changed = s1.replace("Woochan","Raymond")
// s1의 Javascript를 JS로 치환환 결과를 재할당
console.log(s1,s1_changed)

console.log("------------------trim")
// 화이트스페이스(공백) 제거
console.log("                    Hello                         ".trim()) 

console.log("------------------Escape 문자")
// 이스케이프
//  -> 키보드로 입력 불가하거나 특수한 의미를 가진 문자 (\)
// \n , \t , \' , \" 
// \` : 백틱
// \$ : 템플릿 문자

let message= 'She said, "Hello"'
console.log(message)
message = "She said, \"Hello\""
console.log(message)

message = "I'm going"
console.log(message)
message = 'I\'m going'
console.log(message)

// 여러 줄 문자열
message ="예전에는 \n"+
         "여러줄 문자열을 만드는 것이 \n"+
         "쉽지 않았습니다."

console.log(message)

message = `하지만 ES6이상에서는 백틱을 이용하여
아주 손쉽게
여러 줄 문자열을 만들 수 있습니다.`
console.log(message)

console.log("-------------------------")

