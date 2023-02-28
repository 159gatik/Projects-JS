const container = document.querySelector(".container");

const refreshBtn = document.querySelector(".refresh-btn");

const maxPaletteBoxes = 24;

const generatePalette = () => {
  container.innerHTML = "";

  for (let i = 0; i < maxPaletteBoxes; i++) {
    //genera un codigo de colores hexadecimal
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    // se crea un elemento li
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `
    <div class="rect-box" style = "background: ${randomHex} "></div>
        <span class="hex-value"> ${randomHex} </span>
`;
    // se añade un evento click para copiar el elemento li

    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};

const copyColor = (elem, hexVal) => {
  const colorElement = elem.querySelector(".hex-value");
  // copia el valor hexadecimal y cambia al text original despues de 1 segundo
  navigator.clipboard
    .writeText(hexVal)
    .then(() => {
      colorElement.innerText = "Copiado";
      setTimeout(() => (colorElement.innerHTML = hexVal), 1000);
    })
    .catch(() => alert("Falla al copiar el codigo"));
};

refreshBtn.addEventListener("click", generatePalette());
