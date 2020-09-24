function removeChars(str, chars) {
    let charArr = []
    let result = ''
    
    for(let i = 0; i < chars.length; i++) {
        charArr.push(chars[i])
    }
    for(let  i = 0; i< str.length; i++) {
        if(!charArr.includes(str[i])) {
            result += str[i]
        }
    }
    return result
}

console.log(removeChars('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'))