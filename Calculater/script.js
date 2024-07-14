let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('btn'));
let displayValue = '';

buttons.map(button => {
    button.addEventListener('click', (e) => {
        let buttonText = e.target.innerText;

        if (buttonText === 'C') {
            displayValue = '';
            display.innerText = '0';
        } else if (buttonText === '←') {
            displayValue = displayValue.slice(0, -1);
            display.innerText = displayValue || '0';
        } else if (buttonText === '=') {
            try {
                displayValue = eval(displayValue.replace(/×/g, '*').replace(/÷/g, '/')).toString();
                display.innerText = displayValue;
            } catch {
                display.innerText = 'Error';
                displayValue = '';
            }
        } else {
            if (display.innerText === '0') {
                displayValue = buttonText;
            } else {
                displayValue += buttonText;
            }
            display.innerText = displayValue;
        }
    });
});
