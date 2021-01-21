var scores = [60, 50, 60, 58, 54, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18,
    41, 53, 55, 61, 51, 44];

var costs = [.25, .27, .25, .25, .25, .25,
    .33, .31, .25, .29, .27, .22,
    .31, .25, .25, .33, .21, .25,
    .25, .25, .28, .25, .24, .22,
    .20, .25, .30, .25, .24, .25,
    .25, .25, .27, .25, .26, .29];

printTests(scores);
printHighestScore(scores);
getTheMostEffectiveSolution(scores, costs);


function getTheMostEffectiveSolution(scores, costs) {

    var min = 100;
    var minIndex;;
    var max = 0;

    for (let index = 0; index < scores.length; index++) {

        if (scores[index] > max) {
            max = scores[index];
        }

    }


    for (let index = 0; index < scores.length; index++) {
       
        if (scores[index] == max) {
            if (min > costs[index]) {
                minIndex = index;
                min = costs[index];
            }
        }
        
    }

    console.log("Bubble Solution #" + minIndex + " is the most cost effective");

}

function printHighestScore(scores) {

    var max = 0;

    var highestSolutions = [];

    for (let index = 0; index < scores.length; index++) {

        if (scores[index] > max) {
            max = scores[index];
        }

    }

    for (let index = 0; index < scores.length; index++) {

        if (scores[index] == max) {
            highestSolutions.push("#" + index);    
        }

    }

    console.log("Highest bubble score: " + max);
    console.log("Solutions with highest score: " + highestSolutions);

}

function printTests(scores) {


    for (let index = 0; index < scores.length; index++) {

        console.log("Bubble solution #" + index + " score: " + scores[index]);
    }


    console.log("Bubbles tests: " + scores.length);

}

