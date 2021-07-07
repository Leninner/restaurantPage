const contenedor = document.querySelector("#content");

function doMenu() {
    let div = document.createElement("div");
    div.style.height = "150px";
    div.style.width = "150px";
    div.style.background = "Red";

    contenedor.appendChild(div);
}

export default doMenu;
