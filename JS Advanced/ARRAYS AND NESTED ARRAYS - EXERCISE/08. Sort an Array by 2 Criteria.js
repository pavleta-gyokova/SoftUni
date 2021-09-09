function solve(input) {
    let result = (cur, next) => cur.length - next.length || cur.localeCompare(next);
    input.sort(result);
    console.log(input.join('\n'));

}
solve(['test',
    'Deny',
    'omen',
    'Default']
)