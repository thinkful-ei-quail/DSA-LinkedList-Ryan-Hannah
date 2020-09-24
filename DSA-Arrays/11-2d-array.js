function twoDArray(arr) {
    const numOfRows = arr.length
    const numOfColumns = arr[0].length
    const result = []
    const zeroColumn = []
    const zeroRow = []

    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === 0) {
                zeroColumn.push(j)
                zeroRow.push(i)
            }
        }
    }
    for(let i = 0; i < numOfRows; i++) {
        let row = Array(numOfColumns)
        if(zeroRow.includes(i)) {
            row.fill(0)
        } else {
            for(let j = 0; j < numOfColumns; j++) {
                if(!zeroColumn.includes(j)) {
                    row[j] = 1
                } else {
                    row[j] = 0
                }
            }
        }
        result.push(row)
    }
    return result
}


console.log(twoDArray([
    [1,0,1,1,0],
    [0,1,1,1,0],
    [1,1,1,1,1],
    [1,0,1,1,1],
    [1,1,1,1,1]
]))