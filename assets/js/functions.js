// Click event to scroll into Seat plan
const buyTicketBtn = document.getElementById('buy-ticket-btn');
buyTicketBtn.addEventListener('click', function () {
    const target = document.getElementById('seatPlancol-1');
    target.scrollIntoView({ behavior: "smooth" });
});

// Function for get and convert text to number
function getNumberbyId(id) {
    const text = document.getElementById(id).innerText;
    const number = parseInt(text);
    return number;
}

// Function for apend seat name
function apendSeatName(hide, apendContainer, i) {
    const seat = document.getElementById(hide);
    seat.classList.remove('hidden');
    const apend = document.getElementById(apendContainer);
    apend.innerText = selectedSeats[i];
    return apend;
}


// Function for keyboard event
var selectedSeats = [];
function keyBoardEvent(id) {
    const seatNumber = document.getElementById(id);
    seatNumber.addEventListener('click', function () {
        if (!selectedSeats.includes(id)) {
            if (selectedSeats.length < 4) {
                // push the selected seats to array
                selectedSeats.push(id);

                // remove and add bg color to selected seat
                const clickedSeat = document.getElementById(id);
                clickedSeat.classList.remove('bg-[#bebebe]');
                clickedSeat.classList.add('bg-[#1DD100]');

                // decrease from total seat number
                let remainingSeat = getNumberbyId('total-seat');
                let presentRemainingSeat = remainingSeat - 1;
                let curentRemainingSeat = document.getElementById('total-seat');
                curentRemainingSeat.innerText = presentRemainingSeat;

                // increase selected seat number
                let selectedSeatNumber = getNumberbyId('selected-seat');
                let presentSeat = selectedSeatNumber + 1;
                let curentSeatBooked = document.getElementById('selected-seat');
                curentSeatBooked.innerText = presentSeat;

                // display seat name, update total price and grand total
                // get total price value
                let totalPrice = document.getElementById('total-price');
                let totalPriceText = totalPrice.innerText;
                let totalPriceNumber = parseFloat(totalPriceText);

                // Get grand total value
                let grandTotal = document.getElementById('grand-total');
                if (selectedSeats.length == 1) {
                    apendSeatName('seat-1', 'seat-name-1', 0);
                    totalPriceNumber = totalPriceNumber + 550;
                    totalPrice.innerText = totalPriceNumber;
                    grandTotal.innerText = totalPriceNumber;
                }
                if (selectedSeats.length == 2) {
                    apendSeatName('seat-2', 'seat-name-2', 1);
                    totalPriceNumber = totalPriceNumber + 550;
                    totalPrice.innerText = totalPriceNumber;
                    grandTotal.innerText = totalPriceNumber;
                }
                if (selectedSeats.length == 3) {
                    apendSeatName('seat-3', 'seat-name-3', 2);
                    totalPriceNumber = totalPriceNumber + 550;
                    totalPrice.innerText = totalPriceNumber;
                    grandTotal.innerText = totalPriceNumber;
                }
                if (selectedSeats.length == 4) {
                    apendSeatName('seat-4', 'seat-name-4', 3);
                    totalPriceNumber = totalPriceNumber + 550;
                    totalPrice.innerText = totalPriceNumber;
                    grandTotal.innerText = totalPriceNumber;
                }

            }
            else {
                alert("You Cannot buy more than Four ticket at a time");
            }
        }

    });
}
// function for Decrease Cupon Discount from grandtotal
function applyCupon() {
    let grandTotal = document.getElementById('grand-total');
    let grandTotalText = grandTotal.innerText;
    let grandTotalNumber = parseFloat(grandTotalText);

    const cuponInputText = document.getElementById('cupon');
    const cuponInputValue = cuponInputText.value;
    if (cuponInputValue === 'NEW15') {
        // display Discount
        const discountContainer = document.getElementById('discount');
        document.getElementById('discount-div').classList.remove('hidden');
        const discountNumber = discountContainer.innerText = (grandTotalNumber * 15) / 100;
        console.log(discountNumber);

        // Update Grand Total
        document.getElementById('grand-total').innerText = grandTotalNumber - discountNumber;

        // Disable the Cupon Feild
        document.getElementById('cupon-field').classList.add('hidden');
    }
    else if (cuponInputValue === "Couple 20") {
        // display Discount
        const discountContainer = document.getElementById('discount');
        document.getElementById('discount-div').classList.remove('hidden');
        const discountNumber = discountContainer.innerText = (grandTotalNumber * 20) / 100;

        // Update Grand Total
        document.getElementById('grand-total').innerText = grandTotalNumber - discountNumber;

        // Disable the Cupon Feild
        document.getElementById('cupon-field').classList.add('hidden');
    }
    else {
        alert("This is Not a Valid Cupon, Please Try again with Another One");
    }
}


// Function for Next Button
function displaySuccess(){
    document.getElementById('next-hide-1').classList.add('hidden');
    document.getElementById('next-hide-2').classList.add('hidden');
    document.getElementById('next-hide-3').classList.add('hidden');
    document.getElementById('next-show').classList.remove('hidden');
}


// Function for calling keyboard events
function callKeyBoardEvents() {
    const alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const numbers = ['1', '2', '3', '4'];
    for (const alphabet of alphabets) {
        for (const number of numbers) {
            keyBoardEvent(alphabet + number);
        }
    }
}

callKeyBoardEvents();

// Function for continue button
function continueThePage(){
    location.reload();
}






