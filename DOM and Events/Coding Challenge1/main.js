const buttonLai = document.querySelector('.lai');

buttonLai.addEventListener('click', function() {
    let score = 20;
    let secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.message').textContent = 'Hãy đoán số!';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});