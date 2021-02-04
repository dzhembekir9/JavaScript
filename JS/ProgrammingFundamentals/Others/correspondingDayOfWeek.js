function solve(weekDay) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thirsday', 'Friday', 'Saturday', 'Sunday'];

    if (weekDay >= 1 && weekDay <= 7) {
        console.log(days[weekDay - 1]);
    }
    else {
        console.log('Invalid day');
    }
}

solve(7);