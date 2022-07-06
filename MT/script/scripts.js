let nombre, correo, mensaje;

let formulario = document.querySelector('#form')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    LeerDatos()
})

function LeerDatos() {
    nombre = document.getElementById('nombre').value
    correo = document.getElementById('correo').value
    mensaje = document.getElementById('textarea').value
    ValidadData(nombre, correo, mensaje)
    GuardarLocalStorange(nombre, correo, mensaje)
}

function ValidadData(nombre, correo, mensaje) {
    if (nombre.length == 0 || correo.length == 0 || mensaje.length == 0) {
        swal("¡ERROR!", "¡Campos incompletos!", "error");
    }
}

function GuardarLocalStorange(nombre, correo, mensaje) {
    localStorage.setItem('Nombre', nombre)
    localStorage.setItem('Correo', correo)
    localStorage.setItem('Mensaje', mensaje)
    ListarData()
}

function ListarData() {
    let nombreUsu = localStorage.getItem('Nombre')
    let CorreoUsu = localStorage.getItem('Correo')
    let MensajeUsu = localStorage.getItem('Mensaje')
}