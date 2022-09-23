const numberOne = document.getElementById('numberOne');
const numberTwo = document.getElementById('numberTwo');
const btnOperation = document.getElementById('btnOperation');
const pResult = document.getElementById('pResult');

const form = document.getElementById('form');
const inputName = document.getElementById('inputName');
const inputLastName = document.getElementById('inputLastName');
const pResultOne = document.getElementById('pResultOne');


// Escuchar eventos desde JS.
elemento.addEventListener('evento', funcion);


// Evento Click para botones.
btnOperation.addEventListener('click', operation);

function operation() {

	const result = numberOne + numberTwo;
	pResult.innerText = 'Resultado de la operación: ' + result;

}


// Evento Submit para formularios. 
form.addEventListener('submit', (e) => {

	e.preventDefault(); // Prevenir que se recargue la página, en caso de que el botón del formulario en HTML no tenga el type="submit".

	pResultOne.innerText = `Hola, ${inputName} ${inputLastName}`;

});