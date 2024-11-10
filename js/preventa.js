document.addEventListener("DOMContentLoaded", function() {
    AOS.init();
});

function validateForm() { 
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const correoElectronico = document.getElementById("correoElectronico").value;
    const plataforma = document.getElementById("platform").value;
    const metodoPago = document.getElementById("paymentMethod").value;
   
    if (nombreCompleto && correoElectronico && plataforma && metodoPago) {
        const confirmationModal = new bootstrap.Modal(document.getElementById('confirmationModal'));
        confirmationModal.show();
    } else {
        alert("Por favor, completa todos los campos del formulario antes de continuar.");
    }
}
