function tForEach(){
    let source =["안녕","하세","요저","는우","찬임"]

    source.forEach(item =>{
        console.log(item)
    })

    source.forEach((item,index) => {
        console.log(`${index} -> ${item}`)
        // console.log(index,item)
    })

    source.forEach((item,index,arr)=>{
        console.log(`${index} -> ${item}`,arr)
    })
}
tForEach()