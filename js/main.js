const buttons = document.getElementsByClassName("click-btn");

let count = 0;
for (let btn of buttons) {
  btn.addEventListener("click", function (e) {
    count++;
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
  });
}
