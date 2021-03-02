function solve(arr) {
    
    let text = arr[0].split(' ');
    let words = arr[1];


    for (let el in text) {
        if (text[el].includes('_')) {
            
            let underScoreArr = text[el].split('');
            let len = 0;

            for (let i in underScoreArr) {
                if (underScoreArr[i] === '_') {
                    len++;
                }
            }

            for (let i in words) {
                if (len === words[i].length) {
                    text[el] = words[i];
                }
            }

        }
    }

    console.log(text.join(' '));
    
}

solve(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
);