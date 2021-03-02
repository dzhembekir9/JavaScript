function solve(arr) {
    const first = parseInt(arr[0]);
    const second = parseInt(arr[1]);
    const third = parseInt(arr[2]);
    let students = parseInt(arr[3]);

    let hoursNeeded = 0;

    while (true) {
        
        if (students > 0) {
            hoursNeeded++;
            if (hoursNeeded % 4 != 0) {
                students -= first + second + third;
            }
        }
        else {
            break;
        }
    }
    
    console.log('Time needed: ' + hoursNeeded + 'h.');
}

solve(['5','6','4','20']);
solve(['1','2','3','45']);
solve(['3','2','5','40']);