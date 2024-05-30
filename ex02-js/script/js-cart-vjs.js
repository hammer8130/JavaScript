window.addEventListener("load", event => {
    // ul#list로부터 자식 li 모두 삭제
    let cartItems = document.querySelectorAll("#list li")
    console.log(cartItems)

    // 직접 찾기

    // let parents = document.getElementById("list")
    // console.log(parents)
    // // 자식 노드를 가지고 있습니까?
    // console.log("자식 노드 있나?",parents.hasChildNodes()) //true
    // // 자식 목록 확인
    // console.log("자식 목록:",parents.children)


    // 반복문 활용

    for (let i = 0; i < cartItems.length; i++) {
        let parent = cartItems[i].parentNode
        console.log(parent)

        parent.removeChild(cartItems[i])
    }

    // 추가 버튼(#btn=add)에 이벤트 처리 함수 연결
    document.getElementById("btn-add").addEventListener("click", addItem)


})

function addItem() {
    // input#item 으로부터 value 속성 값 가져옴
    const itemInput = document.getElementById("item")
    const item = itemInput.value.trim()

    if (item.length > 0) {
        console.log("추가아이템: ", item)

        // 추가할 요소 생성 (li)
        let itemNode = document.createElement("li")
        itemNode.innerHTML = item // 컨텐츠 추가 innerHTML / innerText
        let toolBar = document.createElement("div") // block요소는 전체 차지. 개행 이루어진다.
        toolBar.style.display = "inline"
        toolBar.style.cssFloat = "right"
        let btnDel = document.createElement("button")
        btnDel.innerText = "삭제"
        
        toolBar.append(btnDel)
        itemNode.append(toolBar)


        let container = document.getElementById("list")
        container.appendChild(itemNode)

        // 입력된 데이터 삭제
        itemInput.value = ""
        itemInput.focus() // 자동 커서 입력 준비
        btnDel.addEventListener("click",event =>{
            // 아벤트가 행해질 자식을 보는데 아주 용이!! 중요함
            console.log(event.target.parentNode.parentNode)  // 삭제 대상
            let removeItem = event.target.parentNode.parentNode
            container.removeChild(removeItem)
        })
    }

}