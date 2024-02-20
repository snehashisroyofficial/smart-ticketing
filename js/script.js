

let count = 0;
let seatLeft = document.getElementById('seat-left').innerText;



const allBtn = document.getElementsByClassName("all-btn");
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {

        if (count != 4) {
            count += 1
            setInnetText("cart-count", count);


            seatLeft = seatLeft - 1;
            setInnetText("seat-left", seatLeft);



            const ticketName = event.target.innerText;   //we get the button innertext value

            const ticketAdd = document.getElementById('ticket-add')    //we target where to add the ticket 

            const div = document.createElement("div");     // create div tag

            div.classList.add("text-style-full", "flex", "justify-between", "pt-4")   // we add class names under div tag


            const h1 = document.createElement("h1"); // create h1 tag

            h1.innerText = ticketName;    //set h1 tag value

            const h12 = document.createElement("h1");   // create h1 tag
            h12.innerText = "Economy"; //set h1 tag value

            const h13 = document.createElement("h1"); // create h1 tag
            h13.innerText = 550; //set h1 tag value


            // we push all h1 tag under div tag one by one
            div.appendChild(h1)
            div.appendChild(h12)
            div.appendChild(h13)


            // we push div tag under ticketadd 
            ticketAdd.appendChild(div);




            event.target.classList.add("bg-green-500", "text-white");



            // total Cost

            totalCost('total-price', h13.innerText);

        } else {
            popUp();
        }


    })
}


/**coupon section js*/

document.getElementById('apply-button').addEventListener('click', function (event) {
    let discountVal = document.getElementById('counpon-input').value;
    let totalPrice;
    if (discountVal == "NEW15") {
        discountCal(15);
    } else if (discountVal == "OFFER") {
        discountCal(30);
    } else {
        alert("sorry discount is wrong")
        document.getElementById("grand-total").innerText = document.getElementById("total-price").innerText;
    }
})

function discountCal(val) {
    totalPrice = document.getElementById('total-price').innerText * val / 100;
    grandPrice = document.getElementById('total-price').innerText - totalPrice;
    document.getElementById("grand-total").innerText = grandPrice;
    document.getElementById('coupon-hide').classList.add('hidden');  //ADDED BY ME
    document.getElementById('grand-red').classList.add('text-red-500');  //ADDED BY ME

}






function setInnetText(id, value) {
    document.getElementById(id).innerText = value;

}


// here we insert two parameter one"id" and another one is "value"
function totalCost(id, value, discount = "") {
    const totalCost = document.getElementById(id).innerText;  // we target total price 
    const convertedTotalCost = parseInt(totalCost);  //we converted to number
    const sum = convertedTotalCost + parseInt(value)  // we sum 
    setInnetText(id, sum);

};



function popUp() {
    alert("you have selected max seat!");
}
