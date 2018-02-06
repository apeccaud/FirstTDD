const ROMANNUMERALMAP = [
    {key: 50, value: "L"},
    {key: 10, value: "X"},
    {key: 5, value: "V"},
    {key: 1, value: "I"},
];

function returnRomanNumeralForDigit(number) {
    let result = "";
    let remain = number;

    for (let i of ROMANNUMERALMAP) {
        while (remain / i["key"] >= 1) {
            result += i["value"];
            remain -= i["key"];
        }
    }

    return result;
}

module.exports = returnRomanNumeralForDigit;