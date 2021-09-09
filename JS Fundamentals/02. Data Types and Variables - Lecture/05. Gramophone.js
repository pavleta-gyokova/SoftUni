function gramophone(nameOfBand,album,song){
    let totalTime = (album.length * nameOfBand.length) * song.length / 2;
    let totalRotaions = Math.ceil(totalTime / 2.5);
    console.log(`The plate was rotated ${totalRotaions} times.`)
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')