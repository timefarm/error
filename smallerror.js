const TKNS_PER_PHASE = 10, DIM_FROM = 0.9, DIM_TO = 0.1;

window.addEventListener("load", function() {
  let elements = document.getElementsByClassName("dimPaint");
  for (let i = 0; i < elements.length; i++) {
    paintWithDiminishment(elements[i]);
  }
});

function paintWithDiminishment(element) {
  let theTokens = sourceText.split(" ");
  let alpha = DIM_FROM, alphaDimPerTkn = (DIM_FROM - DIM_TO) / TKNS_PER_PHASE;
  element.innerHTML = "";
  for (let i = 0; i < theTokens.length; i++) {
    alpha = DIM_FROM;
    for (let j = 0; j < TKNS_PER_PHASE; j++) {
      let charElem = document.createElement("span");
      charElem.style.color = "rgba(0,0,0," + alpha + ")";
      alpha -= alphaDimPerTkn;
      let theToken = theTokens[i++];
      // making this test because theTokens
      // not necessarily divisible by TKNS_PER_PHASE
      if (theToken) {
        charElem.innerHTML = theToken + " ";
        element.appendChild(charElem);
      }
    }
  }
}
