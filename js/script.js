const allBtn = document.getElementsByClassName("all-btn");

let count = 0;
let seatLeft = document.getElementById("seat-left")

for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        event.target.classList.add("bg-green-400")
        count = count + 1;
        setTextInner("cart-count", count);

    })
}


function setTextInner(id, value) {
    document.getElementById(id).innerText = value;
}