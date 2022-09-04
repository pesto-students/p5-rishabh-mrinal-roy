function createstack(){
    
    let items=[]

    function pushItem(item) {
        console.log('inside push: ')
        items.push(item)
        console.log(items)
    }

    function pop() {
        console.log('inside pop: ')
        items.pop()
        console.log(items)
    }
    return [pushItem, pop]
}

const [pushItem, pop] = createstack()
pushItem(10)
pushItem(6)
pushItem(13)
pop()
pop()
