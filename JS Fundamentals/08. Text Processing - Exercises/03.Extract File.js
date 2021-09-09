function solve(input) {
    let lastIndexOfDash = input.lastIndexOf('\\');
    let fileInfo = input.substring(lastIndexOfDash + 1);
    let lastIndexOfDot = fileInfo.lastIndexOf('.');
    let fileName = fileInfo.substring(0,lastIndexOfDot);
    let fileExtention = fileInfo.substring(lastIndexOfDot + 1);
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileExtention}`);
}
solve('C:\\Projects\\Data-Structures\\LinkedList.cs')