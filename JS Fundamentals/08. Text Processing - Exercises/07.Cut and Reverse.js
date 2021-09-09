function solve(input) {
    let halfLength = input.length / 2;
    let firstHalf = input.substring(0,(halfLength))
    let secondHalf = input.substring(halfLength);
   
    let firstHalfArr = [...firstHalf];
    let secondHalfArr = [...secondHalf];
    console.log(firstHalfArr.reverse().join(""));
    console.log(secondHalfArr.reverse().join(""));

}
    solve('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')