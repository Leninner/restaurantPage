(() => {
    "use strict";
    const e = document.querySelector("#content");
    !(function () {
        let t = document.createElement("div");
        (t.style.width = "150px"),
            (t.style.height = "150px"),
            (t.style.background = "red"),
            t.classList.add("hello"),
            e.appendChild(t);
    })()();
})();
