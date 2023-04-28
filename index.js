const containerEl = document.querySelector(".container");

for (i = 0; i < 20; i++) {
  const colorContainerEl = document.createElement("div");
  colorContainerEl.classList.add("color-container");
  containerEl.appendChild(colorContainerEl);
}

const colorItems = document.querySelectorAll(".color-container");
colorItems.forEach((item) => {
  let colorText = "";
  const colorCode = randomCodeGenerator();
  item.style.backgroundColor = "#" + colorCode;
  item.innerText = "#" + colorCode;
});

function randomCodeGenerator() {
  const charSet = "0123456789abcdef";
  let charLength = 6;
  let newColorCode = "";
  for (i = 0; i < charLength; i++) {
    let randomNum = Math.floor(Math.random() * charSet.length);
    let randomColorCode = charSet.substring(randomNum, randomNum + 1);
    newColorCode += randomColorCode;
  }
  return newColorCode;
}
