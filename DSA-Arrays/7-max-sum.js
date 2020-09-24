const findMaxSum = function (array) {
    let currentSum = 0
    let currentMax = 0
    for (let i = 0; i < array.length; i++) {
        currentSum += array[i]
        if (currentMax < currentSum) {
            currentMax = currentSum;
        } else if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return currentMax;
}

console.log(findMaxSum([[4, 6, -3, 5, -2, 1]]))