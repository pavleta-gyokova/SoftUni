function solution() {
    let currentText = '';
    function append (string) {
        currentText += string
    }
    function removeStart (number) {
        currentText = currentText.substring(number);
    }
    function removeEnd (number) {
        currentText = currentText.substring(0, currentText.length - number)
    }
    function print () {
        console.log(currentText)
    }

    return {
        append,
        removeStart,
        removeEnd,
        print 
    }
}
let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();



