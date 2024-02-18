var selectedSeats = [];

function keyBoardEvent(id) {
    const seatNumber = document.getElementById(id);
    seatNumber.addEventListener('click', function () {
        // declare a boolean variable to keep track of the match
        let match = false;
        // loop through the selectedSeats array
        for (seat of selectedSeats) {
            // compare each seat with the id
            if (id === seat) {
                // if they match, set the boolean variable to true and break the loop
                match = true;
                break;
            }
        }
        // check the value of the boolean variable
        if (!match) {
            // if it is false, push the id into the selectedSeats array
            selectedSeats.push(id);
        }
        // remove and add bg color to selected seat
        const clickedSeat = document.getElementById(id);
        clickedSeat.classList.remove('bg-[#bebebe]');
        clickedSeat.classList.add('bg-[#1DD100]');
        // decrease from total seat number
        let remainingSeat = getNumberbyId('total-seat');
        let presentRemainingSeat = remainingSeat - 1;
        let curentRemainingSeat = document.getElementById('total-seat');
        curentRemainingSeat.innerText = presentRemainingSeat;

        console.log(selectedSeats);
        const selectedSeatNumber = getNumberbyId('selected-seat');
    });
}
