// Function for get and convert text to number
function getNumberbyId(id) {
    const text = document.getElementById(id).innerText;
    const number = parseInt(text);
    return number;
}

// Empty array for selected seats
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

            // display sit name and price
            const seat1 = document.getElementById('seat-1');
            seat1.classList.remove('hidden');
            const append =



            
            }
            else{
                alert("You Cannot buy more than Four ticket at a time");
            }
        }
        
    });
}
