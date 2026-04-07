// ============================================================
// PORTAFOLIO PERSONAL — main.js
// Autor: David
// Descripción: Lógica del formulario de contacto con EmailJS
// ============================================================


// ── CONFIGURACIÓN DE EMAILJS ──
const SERVICE_ID  = "service_wqq3b68";   
const TEMPLATE_ID = "template_pz40foh";  
const PUBLIC_KEY  = "g2Ki3TrvLg-qZEKkD";   
emailjs.init(PUBLIC_KEY);


// ── FORMULARIO DE CONTACTO ──
const form      = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");
const btnText   = document.getElementById("btn-text");
const status    = document.getElementById("form-status");

form.addEventListener("submit", function (event) {

  // Evita que la página se recargue al enviar
    event.preventDefault();

  // Cambia el botón a estado de carga
    submitBtn.disabled = true;
    btnText.textContent = "Enviando...";
    status.textContent  = "";
    status.className    = "";

    // Envía el formulario a EmailJS
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
        .then(function () {
        // Éxito
        status.textContent = "✓ Mensaje enviado. ¡Gracias por escribir!";
        status.className   = "success";
        form.reset();
        })
        .catch(function (error) {
        // Error
        status.textContent = "✗ Algo salió mal. Intenta de nuevo.";
        status.className   = "error";
        console.error("EmailJS error:", error);
        })
        .finally(function () {
        // Restaura el botón sin importar el resultado
        submitBtn.disabled  = false;
        btnText.textContent = "Enviar mensaje →";
    });

});