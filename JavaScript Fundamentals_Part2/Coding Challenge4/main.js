const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

function calcTip(bill) {
    return bill >= 50 ? bill * 0.2 : bill * 0.15;
}

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(bills[i] + tip);
}

console.log(bills);
console.log(tips);
console.log(totals); 


const averageTip = calcAverage(tips);
const averageTotal = calcAverage(totals);

console.log(`Trung bình tiền boa: ${averageTip}`);
console.log(`Trung bình tổng số: ${averageTotal}`);