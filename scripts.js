
//seleccionar los elementos de la interfaz//

const name = document.querySelector('#name');
const mail = document.querySelector('#email');
const comment = document.querySelector('#comment');
const form = document.querySelector('#form1');

// Asignar eventos

name.addEventListener('blur', validar); 
mail.addEventListener('blur', validar);
comment.addEventListener('blur', validar);

function validar (e) {
    if(e.target.value.trim() === '') {
        mostrarAlerta('El campo es obligatorio');
    } else {
        console.log('si hay algo...')
     } 
    };

function mostrarAlerta() {
 
    const error = document.createElement('P')
    error.textContent = 'El campo email es obligatorio';

    //Inyectar el error el formulario//

    form.appendChild(error);

}