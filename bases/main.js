
// Leer HTML.
const nombreVariable = document.querySelector('Selector');

const h1 = document.querySelector('h1');
const pClass = document.querySelector('.paragraph');
const pId = document.getElementById('paragraphId');
const input = document.querySelector('input');


// Leer propiedades de las etiquetas HTML.
console.log({
	h1,
	pClass,
	pId,
	input
});


// Leer el texto y el valor de las etiquetas HTML.
console.log(h1.innerHTML);
console.log(pClass.innerHTML);
console.log(pId.innerHTML);
console.log(input.value);


// Cambiar o insertar texto a las etiquetas HTML.
h1.innerHTML = 'Texto'; // No muy bueno porque permite insertar HTML.
h1.innerText = 'Texto';
h1.textContent = 'Texto';


// Manipular atributos de las etiquetas HTML.
h1.setAttribute('atributo', 'Valor');

// Manipular clases de las etiquetas HTML.
h1.classList.add('clase'); // Agregar clase
h1.classList.remove('clase'); // Quitar clase
h1.classList.toggle('clase'); // Activar y desactivar clase para eventos
h1.classList.contains('clase'); 


// A los atributos también se pueden acceder con el nombre del mismo.
input.value = '123456';
h1.className = 'Clase';


// Crear elementos HTML.
const nombreVariable = document.createElement('elemento');

const subTitle = document.createElement('h2');


// 