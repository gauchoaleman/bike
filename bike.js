const image = document.querySelector(".image-continer");

document.addEventListener("keydown", (e) => {
  const key = e.keyCode;
  const cs = getComputedStyle(image);

  const change = 15;
  const regex = /[\d\.]*/;

  const left = cs.left;

  const leftNumber = left.match(regex);

  // LEFT key pressed
  if (key === 37) {
    image.style.transform="scaleX(-1)";
    if (parseFloat(leftNumber[0])>change) {
      image.style.left = `${parseFloat(leftNumber[0]) - change}px`;
      image.style.display = "block";
    }
  }
  // RIGHT key pressed
  if (key === 39) {
    image.style.transform="scaleX(1)";
    if (parseFloat(leftNumber[0])+303-window.innerWidth+30<change) {
      image.style.left = `${parseFloat(leftNumber[0]) + change}px`;
      image.style.display = "block";
    }
  }
  
});