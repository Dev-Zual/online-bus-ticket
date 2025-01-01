const buttons = document.getElementsByClassName("click-btn");

let count = 0;

for (let btn of buttons) {
  btn.addEventListener("click", function (e) {
    count++;
    if (count > 4) {
      alert("You can not buy  more then 4 tickets !");
      return;
    }
    // set clicked seat bg color
    const clickedBtn = e.target;
    // clickedBtn.style.backgroundColor = "#1dd100";
    clickedBtn.disabled = true;
    clickedBtn.classList.add(
      "text-white",
      "bg-[#1dd100]",
      "hover:bg-[#1dd100]"
    );

    //checking if ticket 4 then coupon btn active
    const couponBtn = document.getElementById("coupon-btn");
    if (count === 4) {
      couponBtn.disabled = false;
    }

    // set total seats left
    const totalSeats = getConvertedValue("seats-left");
    setInnerText("seats-left", totalSeats - 1);

    // set count btn value
    setInnerText("count-btn", count);
    const seatNumber = e.target.innerText;
    const tr = document.createElement("tr");
    tr.innerHTML = `
            <th>${count}</th>
            <td>${seatNumber}</td>
            <td>Economy</td>
            <td>550</td>
            <td><button class="cancel-btn btn bg-red-400">&#10539;</button></td>`;

    setChild("show-seat-list", tr);

    // Attach event listener to all "Cancel Ticket" buttons
    const cancelButton = tr.querySelector(".cancel-btn");

    cancelButton.addEventListener("click", function (e) {
      const elementToDelete = e.target.parentNode.parentNode;
      elementToDelete.remove();

      // Adjust the seat count
      count--;
      setInnerText("count-btn", count);

      // Adjust the total seats left
      const totalSeats = getConvertedValue("seats-left");
      setInnerText("seats-left", totalSeats + 1);

      // Disable coupon button if less than 4 tickets
      if (count < 4) {
        couponBtn.disabled = true;
      }

      // make available the canceled ticket
      clickedBtn.disabled = false;
      clickedBtn.classList.remove(
        "text-white",
        "bg-[#1dd100]",
        "hover:bg-[#1dd100]"
      );

      console.log("Ticket removed:", elementToDelete);
      e.stopPropagation();
    });

    // set total
    getTotal();
    // set grand total
    getGrandTotal();
  });
}

// checking name & phone provide
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const nextBtn = document.getElementById("next-btn");

function validInputs(e) {
  const isNameValid = nameInput.value.trim() !== "";
  const isPhoneValid = phoneInput.value.trim() !== "";
  const isCorrectNumber = phoneInput.value.length === 11;
  nextBtn.disabled = !(isNameValid && isPhoneValid && isCorrectNumber);
}

nameInput.addEventListener("input", validInputs);
phoneInput.addEventListener("input", validInputs);
