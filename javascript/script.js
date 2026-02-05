// ---------------MUSICA------------------

const playPauseBtn = document.getElementById("playPauseBtn");
const playPauseIcon = document.getElementById("playPauseIcon");
const music = document.getElementById("music");

playPauseBtn.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        playPauseIcon.classList.replace("fa-play", "fa-pause");
    } else {
        music.pause();
        playPauseIcon.classList.replace("fa-pause", "fa-play");
    }
});



// -----------TEMPORIZADOR----------------


// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Configura aquí la fecha y hora objetivo en el formato deseado
    const fechaObjetivo = new Date("March 7, 2026 21:30:00").getTime();

    function updateTimer() {
        const ahora = new Date().getTime();
        const tiempoRestante = fechaObjetivo - ahora;

        if (tiempoRestante <= 0) {
            document.querySelector('.temporizador__mensaje').textContent = "¡Ya llegó el gran día!";
            clearInterval(intervaloTemporizador);
            return;
        }

        const dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24));
        const horas = Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutos = Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60));
        const segundos = Math.floor((tiempoRestante % (1000 * 60)) / 1000);

        // Actualiza los valores del temporizador
        document.querySelectorAll('.temporizador__valor').forEach((elemento, indice) => {
            elemento.textContent = [dias, horas, minutos, segundos][indice].toString().padStart(2, '0');
        });
    }

    updateTimer(); // Actualiza el temporizador inicialmente
    const intervaloTemporizador = setInterval(updateTimer, 1000); // Actualiza cada segundo
});




//   -------------FOTOS---------------------------



document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
    });

    // Inicializar Fancybox
    $(".fancybox").fancybox({
        buttons: [
            "zoom",
            "slideShow",
            "fullScreen",
            "thumbs",
            "close"
        ],
        loop: true,
        infobar: true,
        arrows: true,
        protect: true,
        animationEffect: "fade",
        transitionEffect: "slide",
        transitionDuration: 500,
        touch: {
            vertical: false,
        },
        autoFocus: false,
    });
});




// --------------- confirmacion --------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    // Definir los números de teléfono
    const recipientNumber1 = '541139480646';
    const recipientNumber2 = '543816591298';

    const cantidadSelect = document.getElementById('cantidadPersonas');
    const personasContainer = document.getElementById('personasContainer');

    // Cuando cambie la cantidad
    cantidadSelect.addEventListener('change', function () {
        generarCamposPersonas(parseInt(this.value, 10));
    });

    function generarCamposPersonas(cantidad) {
        personasContainer.innerHTML = '';
        for (let i = 1; i <= cantidad; i++) {
            const card = document.createElement('div');
            card.className = 'persona-card';
            card.innerHTML = `
        <h6>Persona ${i}</h6>
        <div class="persona-fields">
          <div class="field-group">
            <label class="field-label" for="nombre${i}">Nombre <span>*</span></label>
            <input class="field-input" type="text" id="nombre${i}" placeholder="Ingresa el nombre" required>
          </div>
          <div class="field-group">
            <label class="field-label" for="apellido${i}">Apellido <span>*</span></label>
            <input class="field-input" type="text" id="apellido${i}" placeholder="Ingresa el apellido" required>
          </div>
        </div>
      `;
            personasContainer.appendChild(card);
        }
    }

    function obtenerDatosPersonas() {
        const cantidad = parseInt(cantidadSelect.value, 10);
        const lista = [];
        for (let i = 1; i <= cantidad; i++) {
            const nombre = document.getElementById(`nombre${i}`).value.trim();
            const apellido = document.getElementById(`apellido${i}`).value.trim();
            if (!nombre || !apellido) {
                alert(`Por favor, completa nombre y apellido de la Persona ${i}`);
                return null;
            }
            lista.push({ nombre, apellido });
        }
        return lista;
    }

    function sendMessage(phoneNumber) {
        // Validar si se ha seleccionado una cantidad de personas
        if (cantidadSelect.value === '0') {
            alert('Por favor, selecciona la cantidad de personas que asistirán.');
            return;
        }

        const datos = obtenerDatosPersonas();
        if (!datos) return;

        // Construir el mensaje de forma más clara
        let texto = `¡Hola! Quiero confirmar asistencia para el 15 de Maggie.\n\n`;
        texto += `Confirmamos ${datos.length} persona(s):\n`;

        datos.forEach((persona, index) => {
            texto += `\n*${index + 1}. ${persona.nombre} ${persona.apellido}*`;
        });

        // Añadir mensaje opcional si existe
        const customMsg = document.getElementById('customMessage').value.trim();
        if (customMsg) {
            texto += `\n\n*Mensaje adicional:*\n${customMsg}`;
        }

        // Abrir WhatsApp
        const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(texto)}`;
        window.open(link, '_blank');

        // Limpiar el formulario
        document.getElementById('customMessage').value = '';
        cantidadSelect.value = '0'; // Restablecer el selector
        personasContainer.innerHTML = ''; // Limpiar los campos de personas
    }

    // Eventos de click
    document.getElementById('btnConfirmacion1')
        .addEventListener('click', () => sendMessage(recipientNumber1));
    document.getElementById('btnConfirmacion2')
        .addEventListener('click', () => sendMessage(recipientNumber2));
});




// --------------PLAYLIST------------------


function enviarWhatsApp() {
    var nombre = document.getElementById("nombre").value;
    var recomendacion = document.getElementById("recomendacion").value;
    var url = '541131414183';

    if (nombre.trim() === "" || recomendacion.trim() === "") {
        alert("Por favor, completa ambos campos.");
        return;
    }

    var mensaje = `Hola, mi nombre es ${nombre} y mi tema recomendado es ${recomendacion}`;
    var whatsappUrl = `https://wa.me/${url}?text=${encodeURIComponent(mensaje)}`;
    window.open(whatsappUrl, "_blank");
}



// --------------------------------gift---------------------------------

document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('mostrarBoton');
    const textoDesplegable = document.getElementById('textoDesplegable');

    boton.addEventListener('click', function () {
        textoDesplegable.classList.toggle('mostrar');
    });
});


function copyText() {
    var aliasText = document.getElementById('alias').innerText; // Obtener el texto del alias
    var tempInput = document.createElement('input');
    tempInput.value = aliasText;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    // Mostrar el mensaje de "¡Copiado!"
    var copyMessage = document.getElementById('copyMessage');
    copyMessage.style.display = 'block';
    setTimeout(function () {
        copyMessage.style.display = 'none';
    }, 1500); // Ocultar el mensaje después de 1.5 segundos
}



function copyCbuText() {
    const aliasText = document.getElementById('cbuAlias').textContent;
    const copyMessage = document.getElementById('copyCbuMessage');

    const textarea = document.createElement('textarea');
    textarea.value = aliasText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    copyMessage.style.display = 'block';
    setTimeout(() => {
        copyMessage.style.display = 'none';
    }, 2000);
}
