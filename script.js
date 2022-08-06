const area = document.getElementById('area');
let win;
let turn = 0; 
const collectionOfBoxes = document.getElementsByClassName('box');
let arrOfBoxes = [];
console.log(document.getElementsByClassName('hamburger').length);
area.addEventListener('click', e => {
    if (e.target.className = 'box' ) {
        
    }
        if(e.target.id != "added") {
            e.target.id = "added";
        turn % 2 === 0 ? e.target.innerHTML = 'X' : e.target.innerHTML = 'O';
        turn++;

        checkWhoWin();

        checkForDraw();
    }
});
function checkWhoWin() {

    const boxes = document.getElementsByClassName('box');
    
    const winCondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(i = 0; i < winCondition.length; i++) {
        if (boxes[winCondition[i][0]].innerHTML === 'X' && 
            boxes[winCondition[i][1]].innerHTML === 'X' && 
            boxes[winCondition[i][2]].innerHTML === 'X') {
                win = true;
                document.location.reload();
                alert("крестики выиграли");
                
            } else if  (boxes[winCondition[i][0]].innerHTML === 'O' && 
                        boxes[winCondition[i][1]].innerHTML === 'O' && 
                        boxes[winCondition[i][2]].innerHTML ==='O' ) {
                            win = true;
                            document.location.reload();
                            alert("нолики выиграли"); 
                            
                            
            }  
        }
}

function checkForDraw() {
    arrOfBoxes = Array.prototype.slice.call(collectionOfBoxes);
    if (arrOfBoxes.every(elem => elem.innerHTML != '' && win != true)) {
        document.location.reload();
        alert ('ничья');
        
       }
}
