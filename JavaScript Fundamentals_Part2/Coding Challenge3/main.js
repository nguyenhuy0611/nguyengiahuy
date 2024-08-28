const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`BMI của ${mark.fullName} (${mark.bmi.toFixed(1)}) cao hơn của ${john.fullName} (${john.bmi.toFixed(1)})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`BMI của ${john.fullName} (${john.bmi.toFixed(1)}) cao hơn của ${mark.fullName} (${mark.bmi.toFixed(1)})!`);
} else {
    console.log(`BMI của ${mark.fullName} và ${john.fullName} là bằng nhau!`);
}