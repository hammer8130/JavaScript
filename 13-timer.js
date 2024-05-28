// timer 관련 함수
// 특정 시간이 흐른 후 특정 기능 수행
// setTimeout(() => { }, milliseconds)

function timerTest() {
    console.log("3초 후 인사합니다.")
    setTimeout(() => {
        console.log("안녕하세요!!")
    }, 3000) // 3초
}
// timerTest()

// 특정 시간간격마다 특정 함수 실행
// setInterval (() => {},실행간격)

function intervalTest() {
    let count = 10
    console.log("카운트 다운")
    let timer = setInterval(() => {
        console.log(count)
        count--
        if (count < 0) {
            clearInterval(timer)
            console.log("타이머를 종료합니다")
        }
    }, 1000);
}
intervalTest()