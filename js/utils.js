function setChild(id, html) {
  document.getElementById(id).appendChild(html);
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function getConvertedValue(id) {
  const valueText = document.getElementById(id).innerText;
  return Number(valueText);
}

function getGrandTotal() {
  const totalPrice = getConvertedValue("total-price");
  setInnerText("grand-total", totalPrice);
}
