function product(arr) {
    let result = []
    for(let i = 0; i < arr.length; i++) {
      let product = 1
      for(let j = 0; j < arr.length; j++) {
        if(j === i) {
          product *= 1
        } else {
          product *= arr[j]
        }
      }
      result.push(product)
    }
    return result
}


console.log(product([1, 3, 9, 4]))