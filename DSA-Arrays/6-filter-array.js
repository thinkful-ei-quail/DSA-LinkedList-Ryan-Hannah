const filterArray = function(array) {
    let result = []
    array.forEach((item) => {
        if(item >= 5) {
            return result.push(item)
        }
    })
    return result
}

console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(filterArray([1, 2, 3, 4]));
console.log(filterArray(["sadds", 4, "sdfsfd", 6, "nghjfg"]));