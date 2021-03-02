function solve(str) {

    let strArr = str.split(/(?=[A-Z])/);
    
    console.log(strArr.join(', '));

}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan');