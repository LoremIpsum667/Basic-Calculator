// inisialisation
const buttons = document.querySelectorAll('.btn');
const result = document.getElementById('result');

// buttons display
buttons.forEach((buttons) => {
    buttons.addEventListener('click', (e) => {
        result.textContent += e.target.id;
    });
});

// function calculator
equal.addEventListener('click', () => {
    result.textContent = eval(result.textContent);
});

// clear calculator
clear.addEventListener('click', () => {
    result.textContent = '';
})