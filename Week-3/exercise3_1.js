function addNums(...data) {
    let result = 0;
    data.forEach(element => {
        result = element + result
    });
    // console.log('in addnUms: ', result)
    return result;
}

function memo(fn){
    let cache = new Map();
    return function (...args) {
        // console.log(Array.isArray(args))
        // console.log(args.map(each=>each))
        let key = args.toString();
        if(cache.has(key)){
            return cache.get(key)
        } else {
            cache.set(key, fn(...args))
        }
        // console.log('in memo: ',cache.get(key))
        return cache.get(key)
    }
}
console.time()
addNums(2, 3)
console.timeEnd()
console.time()
memo(addNums)(2,3)
console.timeEnd()
console.time()
memo(addNums)(2,3,8)
console.timeEnd()
console.time()
memo(addNums)(2,3,8)
console.timeEnd()
console.time()
memo(addNums)(2,3, 9)
console.timeEnd()