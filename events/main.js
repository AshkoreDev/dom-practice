const numberOne = document.getElementById('numberOne');
const numberTwo = document.getElementById('numberTwo');
const btnOperation = document.getElementById('btnOperation');
const pResult = document.getElementById('pResult');

// Escuchar eventos desde JS.
btnOperation.addEventListener('click', operation);

function operation() {

	const result = numberOne + numberTwo;
	pResult.innerText = 'Resultado: ' + result;
}
