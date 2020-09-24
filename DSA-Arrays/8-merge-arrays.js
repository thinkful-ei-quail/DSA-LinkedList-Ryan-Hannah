function mergeArrays(a, b) {
    let i = 0
    let j = 0
    const result = []

    while(i < a.length && j < b.length) {
        const valueA = a[i]
        const valueB = b[j]

        if(valueA === valueB) {
            result.push(valueA)
            result.push(valueB)
            i++
            j++
        } else if(valueA < valueB) {
            result.push(valueA)
            i++
        } else {
            result.push(valueB)
            j++
        }
    }
    return result
}

console.log(mergeArrays([1, 3, 6, 8, 11],[2, 3, 5, 8, 9, 10]))