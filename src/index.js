import { doHeader, doFooter, doBody } from "./home.js";
import "./style.css";
import icon from "./Images/icon.png";
import image from "./Images/main.jpg";
import doMenu from "./menu.js";

const contenedor = document.querySelector("#content");

doHeader(icon);
doFooter();

const btnInicio = document.querySelector("#btnInicio"),
    btnReservation = document.querySelector("#btnReservation"),
    btnMenu = document.querySelector("#btnMenu");

btnInicio.addEventListener("click", () => {
    doBody(image);
});

btnReservation.addEventListener("click", () => {
    alert("Esta es la página de reservaciones");
});

btnMenu.addEventListener("click", () => {
    doMenu();
});
