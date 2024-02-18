// Click event to scroll into Seat plan
const buyTicketBtn = document.getElementById('buy-ticket-btn');
buyTicketBtn.addEventListener('click', function(){
    const target = document.getElementById('seatPlancol-1');
    target.scrollIntoView({behavior: "smooth"});
});





keyBoardEvent('a1');
keyBoardEvent('a2');
keyBoardEvent('a3');
keyBoardEvent('a4');
keyBoardEvent('b1');
keyBoardEvent('b2');
keyBoardEvent('b3');
keyBoardEvent('b4');


