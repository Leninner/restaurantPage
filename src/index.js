import { doHeader, doFooter, doBody } from "./home.js";
import "./style.css";
import icon from "./Images/icon.png";
import image from "./Images/main.jpg";

doHeader(icon);
doFooter();
doBody(image);

const btnInicio = document.querySelector("#btnInicio"),
    btnReservation = document.querySelector("#btnReservation"),
    btnMenu = document.querySelector("#btnMenu");

btnInicio.addEventListener("click", () => {
    alert("Esta es la página de Inicio");
});

btnReservation.addEventListener("click", () => {
    alert("Esta es la página de reservaciones");
});

btnMenu.addEventListener("click", () => {
    alert("Esta es la página del Menú");
});
