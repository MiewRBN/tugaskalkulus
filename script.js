function calculateDerivative() {
    const expressionInput = document.getElementById('expression');
    const resultOutput = document.getElementById('result');
  
    const expression = expressionInput.value;
  
    try {
      const derivative = math.derivative(expression, 'x');
      resultOutput.textContent = derivative.toString();
    } catch (error) {
      resultOutput.textContent = 'Terjadi kesalahan dalam perhitungan.';
    }
  }

function resetCalculator() {
   document.getElementById('expression').value = '';
   document.getElementById('result').textContent = '';
  }
  