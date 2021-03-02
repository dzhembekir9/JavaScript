class Song {
    constructor(typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }

    printName() {
        console.log(this.name);
    }
}

function solve(arr) {
    arr.join().split(',');
    const type = arr[arr.length - 1];
    
    for (let i = 0; i <= arr[0]; i++) {

        const currentType = arr[i + 1].split('_')[0];
        const name = arr[i + 1].split('_')[1];
        const time = arr[i + 1].split('_')[2];

        if (type === currentType || type === 'all') {
            const song = new Song(currentType, name, time);
            song.printName();
        }

    }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
);