function Series(Name,arg2,arg3,arg4){
    let Seasons = Number(arg2);
    let Episodes = Number(arg3);
    let WithoutComm = Number(arg4);
    let Commercial = WithoutComm * 0.2;
    let OneEpisode = WithoutComm + Commercial;
    let Additional = Seasons * 10;
    let TotalTime = OneEpisode * Episodes * Seasons + Additional;
    console.log(`Total time needed to watch the ${Name} series is ${Math.floor(TotalTime)} minutes. `);

}
Series("Lucifer",3,18,55)