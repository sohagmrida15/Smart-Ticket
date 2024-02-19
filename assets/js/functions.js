// Click event to scroll into Seat plan
const buyTicketBtn = document.getElementById('buy-ticket-btn');
buyTicketBtn.addEventListener('click', function(){
    const target = document.getElementById('seatPlancol-1');
    target.scrollIntoView({behavior: "smooth"});
});

// Function for get and convert text to number
function getNumberbyId(id) {
    const text = document.getElementById(id).innerText;
    const number = parseInt(text);
    return number;
}

// Function for apend seat name
function apendSeatName(hide, apendContainer, i){
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
            if(selectedSeats.length < 4) {
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
            let grandTotalText = grandTotal.innerText;
            

            if(selectedSeats.length == 1){
                apendSeatName('seat-1', 'seat-name-1', 0);
                totalPriceNumber = totalPriceNumber + 550;
                totalPrice.innerText = totalPriceNumber;
                grandTotal.innerText = totalPriceNumber;
            }
            if(selectedSeats.length == 2){
                apendSeatName('seat-2', 'seat-name-2', 1);
                totalPriceNumber = totalPriceNumber + 550;
                totalPrice.innerText = totalPriceNumber;
                grandTotal.innerText = totalPriceNumber;
            }
            if(selectedSeats.length == 3){
                apendSeatName('seat-3', 'seat-name-3', 2);
                totalPriceNumber = totalPriceNumber + 550;
                totalPrice.innerText = totalPriceNumber;
                grandTotal.innerText = totalPriceNumber;
            }
            if(selectedSeats.length == 4){
                apendSeatName('seat-4', 'seat-name-4', 3);
                totalPriceNumber = totalPriceNumber + 550;
                totalPrice.innerText = totalPriceNumber;
                grandTotal.innerText = totalPriceNumber; 
            }
            
            // 
            


            }
            else{
                alert("You Cannot buy more than Four ticket at a time");
            }
        }
        
    });
}

// Function for calling keyboard events
function callKeyBoardEvents() {
    const rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    const cols = ['1', '2', '3', '4'];

    for (const row of rows) {
        for (const col of cols) {
            keyBoardEvent(row + col);
        }
    }
}

callKeyBoardEvents();






