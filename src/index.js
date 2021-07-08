import { doHeader, doFooter, doBody } from "./home.js";
import "./style.css";
import icon from "./Images/icon.png";
import image from "./Images/main.jpg";
import doMenu from "./menu.js";
import doReservation from "./reservation.js";
import comidaUno from "./Images/chinchu.jpg";
import comidaDos from "./Images/caldo.jpg";
import comidaTres from "./Images/Librillo.jpg";

const contenedor = document.querySelector("#content");

doHeader(icon);
doFooter();

function borrar() {
    console.log(contenedor.childNodes);
    if (contenedor.childNodes[2]) {
        return contenedor.removeChild(contenedor.childNodes[2]);
    } else {
        return;
    }
}

const btnInicio = document.querySelector("#btnInicio"),
    btnReservation = document.querySelector("#btnReservation"),
    btnMenu = document.querySelector("#btnMenu");

btnInicio.addEventListener("click", () => {
    borrar();
    doBody(image);
});

btnReservation.addEventListener("click", () => {
    borrar();
    doReservation();
});

btnMenu.addEventListener("click", () => {
    borrar();
    doMenu(comidaUno, comidaDos, comidaTres);
});
