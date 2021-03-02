function solve(str) {
    
    let str1 = str.substring(0, str.length / 2);

    let str2 = str.substring(str.length / 2);

    console.log(str1.split('').reverse().join(''));
    console.log(str2.split('').reverse().join(''));

}

solve('tluciffiDsIsihTgnizamAoSsIsihT');