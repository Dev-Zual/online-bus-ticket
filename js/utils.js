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

function getTotal() {
  const totalPrice = getConvertedValue("total-price");
  const price = totalPrice + 550;
  setInnerText("total-price", price);
}

function getGrandTotal(status) {
  const coupon = document.getElementById("coupon-input").value;
  const totalPrice = getConvertedValue("total-price");
  if (coupon === "NEW15") {
    const discount = totalPrice * 0.15;
    const price = totalPrice - discount;
    setInnerText("grand-total", price);
    const couponBtn = document.getElementById("coupon-btn");
    couponBtn.setAttribute("disabled", false);
    document.getElementById("coupon-input").value = "";
  } else if (coupon === "Couple 20") {
    const discount = totalPrice * 0.2;
    const price = totalPrice - discount;
    setInnerText("grand-total", price);
    const couponBtn = document.getElementById("coupon-btn");
    couponBtn.setAttribute("disabled", false);
    document.getElementById("coupon-input").value = "";
  } else {
    setInnerText("grand-total", totalPrice);
  }
}
