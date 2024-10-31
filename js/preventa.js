document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
});

function validateForm() {
    // Obtener los valores de los campos
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const correoElectronico = document.getElementById("correoElectronico").value;
    const plataforma = document.getElementById("platform").value;
    const metodoPago = document.getElementById("paymentMethod").value;

    // Verificar si todos los campos están completos
    if (nombreCompleto && correoElectronico && plataforma && metodoPago) {
        // Mostrar la modal si el formulario está completo
        const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        confirmationModal.show();
    } else {
        // Mostrar mensaje de error si faltan campos
        alert("Por favor, completa todos los campos del formulario antes de continuar.");
    }
}
