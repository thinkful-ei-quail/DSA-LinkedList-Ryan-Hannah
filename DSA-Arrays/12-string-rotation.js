function rotationChecker(str1, str2) {
    let rotations = []
    let str1Arr = str1.split('')
    
    for(let i = 1; i < str1Arr.length; i++) {
      const endSlice = str1Arr.slice(-i)
      const startSlice = str1Arr.slice(0, str1Arr.length - i)
      const merged = [...endSlice, ...startSlice]
      rotations.push(merged.join(''))
    }
    return rotations.includes(str2)
}
  
console.log(rotationChecker('amazon', 'azonma'))
console.log(rotationChecker('amazon', 'azonam'))