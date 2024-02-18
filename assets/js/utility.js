// Function for get and convert text to number
function getNumberbyId(id) {
    const text = document.getElementById(id).innerText;
    const number = parseInt(text);
    return number;
}


function keyBoardEvent(id) {
    const seatNumber = document.getElementById(id);
    seatNumber.addEventListener('click', function () {
        // remove and add bg color to selected seat
        const clickedSeat = document.getElementById(id);
        clickedSeat.classList.remove('bg-[#bebebe]');
        clickedSeat.classList.add('bg-[#1DD100]');
        // decrease from total seat number
        let remainingSeat = getNumberbyId('total-seat');
        let presentRemainingSeat = remainingSeat - 1;
        let curentRemainingSeat = document.getElementById('total-seat');
        curentRemainingSeat.innerText = presentRemainingSeat;

        
        const selectedSeatNumber = getNumberbyId('selected-seat');
    });
}