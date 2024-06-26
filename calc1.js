
        const display = document.getElementById('display');

        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (e) {
                display.value = 'Error';
            }
        }

        document.getElementById('calc-form').addEventListener('keydown', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                calculate();
            }
        });