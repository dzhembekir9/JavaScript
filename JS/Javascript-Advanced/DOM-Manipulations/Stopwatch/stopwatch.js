function stopwatch() {
    
    let time = document.querySelector('#time');
    let interval;

    const startTimer = () => {
        stopBtn.disabled = false;
        startBtn.disabled = true;

        interval = setInterval(function () {
            secs++

            if (secs === 60) {
                mins++;
                secs = 0;
            }

            time.innerHTML = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        }, 1000);

    }

    const stopTimer = () => {
        stopBtn.disabled = true;
        startBtn.disabled = false;

        window.clearInterval(interval);
    }

    let startBtn = document.querySelector('#startBtn');
    startBtn.addEventListener('click', startTimer);

    let stopBtn = document.querySelector('#stopBtn');
    stopBtn.addEventListener('click', stopTimer);

    let timeArr = document.querySelector('#time').innerHTML.split(':'); 
    let mins = Number(timeArr[0]);
    let secs = Number(timeArr[1]);
    

}