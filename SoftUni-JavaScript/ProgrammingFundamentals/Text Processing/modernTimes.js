function solve(str) {

    let magical = new Set();

    // split the string to array
    let strArr = str.split(' ');

    // check if each element contains '#' and consists of just letters
    for (let el in strArr) {
        // log all special words
        
        for (let l of strArr[el]) {
            
            if ((l.charCodeAt(0) >= 65 && l.charCodeAt(0) <= 90) || (l.charCodeAt(0) >= 97 && l.charCodeAt(0) <= 122)) {
                if (strArr[el].charCodeAt(0) === 35) {
                    magical.add(strArr[el].substring(1));
                }
            }
        }
    }


    for (let item of magical) {
        console.log(item);
    }

}

solve('Nowadays everyone uses # to tag a #special ##word in #socialMedia');