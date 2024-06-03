window.addEventListener("load",event =>{

    // cart-list에 있는 모든 li 불러오기
    let cartItems = document.querySelectorAll("li")
    console.log(cartItems)

    // cart-list 길이만큼 변수 할당
    for(let i=0;i<cartItems.length;i++){
        let parent = cartItems[i].parentNode
        console.log(parent)

        parent.removeChild(cartItems[i])
    }
    // 추가버튼에 addItems()를 심어넣어 버튼과 동작 연결
    document.getElementById("btn-add").addEventListener("click",addItems)
})

function addItems(){
    const inputItem = document.getElementById("item")
    const item = inputItem.value.trim()

    // list를 추가함과 동시에 공간 할당 (div) 와 button생성
    if(item.length>0){
        let itemNode = document.createElement("li")
        itemNode.innerHTML = item // 추가할 내용을 저장.
        let toolBar = document.createElement("div")

        let itemDel = document.createElement("button")
        itemDel.innerHTML = "삭제"
        

        
        let container = document.getElementById("list")
        // list에 li 추가? child를 이용해서 자식 만든다.
        container.appendChild(itemNode)

        // 값이 입력되었을 때 지우기
        inputItem.value=""
        // 편의성 추가. 커서 자동 준비
        inputItem.focus()

        itemDel.addEventListener("click",event =>{
            console.log(event.target.parentNode)
        })


        
    }
}