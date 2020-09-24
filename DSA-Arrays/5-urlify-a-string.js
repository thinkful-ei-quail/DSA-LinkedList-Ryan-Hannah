const urlifyString = function(str) {
    const strArray =  str.split("")
    const urlArray = strArray.map((char) => {
        if(char === " ") {
            return (char = "%20")
        }
        return char;
    })
    return urlArray.join("")
}
console.log(urlifyString("tauhida parveen"));
console.log(urlifyString("www.thinkful.com /tauh ida parv een"));