const contenedor = document.querySelector("#content");

function doReservation() {
    //Cajas para almacenar la información
    let divReservation = document.createElement("div"),
        titleReservation = document.createElement("div"),
        pReservation = document.createElement("div"),
        formReservation = document.createElement("div");

    // Elementos para escribir texto principal en la reservación
    let hTitle = document.createElement("h1"),
        pMain = document.createElement("p");

    // Elementos para el formulario
    let formMainReservation = document.createElement("form"),
        contenedorInputs = document.createElement("div"),
        nameClient = document.createElement("input"),
        numberClient = document.createElement("input"),
        comentClient = document.createElement("input"),
        sendClient = document.createElement("input");

    // Añadir el tipo de input
    nameClient.type = "text";
    nameClient.placeholder = "Nombre Completo";
    numberClient.type = "number";
    numberClient.placeholder = "Número de Personas";
    comentClient.type = "text";
    comentClient.placeholder = "¿Algún comentario?";
    sendClient.type = "button";
    sendClient.value = "Reservar";

    sendClient.addEventListener("click", () => {
        alert("Tu reserva se hizo, vuelve a Inicio y sigue navegando");
    });

    // Añadir texto
    hTitle.textContent = "Reservaciones";
    pMain.textContent =
        "Recuerda que por la alarma mundial por Covid 19, manejamos una estricta norma de aforo permitido. Ten en cuenta esto al hacer tu reservación.";

    // Añadir diseño
    titleReservation.classList.add("titleReservation");
    pReservation.classList.add("pReservation");
    formReservation.classList.add("formReservation");
    contenedorInputs.classList.add("contenedorInputs");
    sendClient.classList.add("btnReservar");

    // Añadir hijos
    contenedorInputs.append(nameClient, numberClient, comentClient, sendClient);
    formMainReservation.appendChild(contenedorInputs);
    formReservation.appendChild(formMainReservation);
    titleReservation.appendChild(hTitle);
    pReservation.appendChild(pMain);
    divReservation.append(titleReservation, pReservation, formReservation);
    contenedor.appendChild(divReservation);
}

export default doReservation;
