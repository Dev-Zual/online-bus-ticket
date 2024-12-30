const buttons = document.getElementsByClassName("click-btn");

let count = 0;
for (let btn of buttons) {
  btn.addEventListener("click", function (e) {
    count++;
    // set clicked seat bg color
    const clickedBtn = e.target;
    // clickedBtn.style.backgroundColor = "#1dd100";
    clickedBtn.classList.add(
      "text-white",
      "bg-[#1dd100]",
      "hover:bg-[#1dd100]"
    );

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
            <td>550</td>`;

    setChild("show-seat-list", tr);

    // set total
    getTotal();
    // set grand total
    getGrandTotal();
  });
}
