function validarFormulario() {
    let contrasena = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    // Validar que las contraseñas coincidan
    if (contrasena !== confirmPassword) {
        alert("Las contraseñas no coinciden");
        return false; // Evita el envío del formulario
    }


    // Si todo está bien, puedes enviar el formulario
    alert("¡Formulario enviado con éxito!");
    return true;
}