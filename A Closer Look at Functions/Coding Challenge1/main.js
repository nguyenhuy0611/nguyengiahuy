const poll = {
        question: 'What is your favorite programming language?',
        options: ['JavaScript', 'Python', 'Rust', 'C++'],
        answers: new Array(4).fill(0),

        registerNewAnswer() {
            const answer = prompt(`${this.question}\n${this.options.map((option, index) => `${index}: ${option}`).join('\n')}\n(Ghi số tùy chọn)`);
        const parsedAnswer = Number(answer);

        if (isNaN(parsedAnswer)) {
            console.log('Vui lòng nhập một số hợp lệ.');
        } else if (parsedAnswer >= 0 && parsedAnswer < this.options.length) {
            this.answers[parsedAnswer]++;
            this.displayResults();
        } else {
            console.log('Số tùy chọn không hợp lệ.');
        }
    },

    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        } else if (type === 'string') {
            console.log(`Kết quả thăm dò là ${this.answers.join(', ')}`);
        }
    }
};

// Gọi phương thức registerNewAnswer khi có sự kiện click
document.getElementById('submitAnswer').addEventListener('click', () => {
    poll.registerNewAnswer();
});