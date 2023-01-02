//keeps track of whose turn it is
let activePlayer = 'X'
//stores an array of moves to determine win conditions
let selectedSquares = [];

//places an X or O in a square
function placeXOrO(squareNumber) {
    //ensures square hasnt been selected.
    //.some() checks each element of SelectSquare Array
    //to see if it contains the clicked-on number.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //variabl retrieves HTML element id that was clicked.
        let select = document.getElementById(squareNumber);
        //checks whose turn it is
        if (activePlayer === 'X') {
            //if it is player X, x.png is placed
            select.style.backgroundImage = 'url("images/x.png")';
            //else it is player O, so o.png is places instead
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated and added to array
        selectedSquares.push(squareNumber + activePlayer);
        //Checks for win conditions
        checkWinConditions();
        //changes turns
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        //plays placement sound.
        audio('./media/place.mp3')
        //checks if its computers turn (O's turn)
        if (activePlayer === 'O') {
            //disables clicking
            disableClick();
            //after 1 second, places an image and re-enables click
            setTimeout(function () { computersTurn(); }, 1000);
        }
        // returning true is needed for computersTurn() to work
        return true;
    }

    //computer selects random square
    function computersTurn() {
        //boolean needed for while loop
        let success = false;
        //stoes random number 0-8
        let pickASquare;
        //if already chosen, picks more until it finds an available square
        while (!success) {
            //number between 0-8 chosen
            pickASquare = String(Math.floor(Math.random() * 9));
            //if true, the square is available
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                //ends loop
                success = true;
            };
        }
    }
}

//Parses the selectedSquares array for win conditions.
//drawLine() draws a line on the screen if win condition is met.
function checkWinConditions() {
    //X 0, 1, 2 condition
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    //X 3, 4, 5 condition
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    //X 6, 7, 8 condition
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    //X 0, 3, 6 condition
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558) }
    //X 1, 4, 7 condition
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    //X 2, 5, 8 condition
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    //X 6, 4, 2 condition
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    //X 0, 4, 8 condition
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }

    //O 0, 1, 2 condition
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    //O 3, 4, 5 condition
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    //O 6, 7, 8 condition
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    //O 0, 3, 6 condition
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558) }
    //O 1, 4, 7 condition
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    //O 2, 5, 8 condition
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    //O 6, 4, 2 condition
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    //O 0, 4, 8 condition
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    
    //checks for tie, all squares filled in and no win conditions are met
    else if (selectedSquares.length >= 9) {
        //plays tie game sound
        audio('./media/tie.mp3');
        //0.3s later, resetGame is called
        setTimeout(function () { resetGame(); }, 500);
    }
    //checks if array includes 3 strings
    //used to check each win condition
    function arrayIncludes(squareA, squareB, squareC) {
        //variables used to check for 3 in a row
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        //if all 3 are included then true is returned
        //and the elseif draws the line
        if (a === true && b === true && c === true) { return true; }
    }
}

//this function makes body element temporarily unclickable
function disableClick() {
    //makes it unclickable
    body.style.pointerEvents = "none";
    //makes it clickable again after a second
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}

//this function takes string parameter of path set earlier for
//placement sound ('./media/place.mp3')
function audio(audioURL) {
    //create new audio object and pass the path as a parameter
    let audio = new Audio(audioURL);
    //play method plays the audio sound
    audio.play();
}

//This function utlizes HTML canvas to draw win lines.
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    //Accesses HTML canvas element
    const canvas = document.getElementById('win-lines');
    //Accesses methods and properties to use on canvas
    const c = canvas.getContext('2d');
    //Indicates start of the line on the x axis
    let x1 = coordX1,
        //indicates start of the line on the y axis.
        y1 = coordY1,
        //indicates end of the line on x axis
        x2 = coordX2,
        //indicates end of the line on y axis
        y2 = coordY2,
        //stores temporary x axis data we update in animation loop
        x = x1,
        //stores temporary y axis data
        y = y1;
    
    //interacts with the canvas
    function animateLineDrawing() {
        //creates a loop
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        //clears content from last loop iteration
        c.clearRect(0, 0, 608, 608);
        //starts new path
        c.beginPath();
        //moves us to starting point in line
        c.moveTo(x1, y1);
        //indicates end point of line
        c.lineTo(x, y);
        //sets width of line
        c.lineWidth = 10;
        //sets color of line
        c.strokeStyle = 'rgba(70, 255, 33, 0.8)';
        //draws the line laid out above
        c.stroke();
        //checks if we've reached the endpoints.
        if (x1 <= x2 && y1 <= y2) {
            //adds 10 to previous x endpoint
            if (x < x2) { x += 10; }
            //adds 10 to previous y endpoint
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
    
        //similar to one above, necessary for 6, 4, 2 win condition
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x+= 10; }
            if (y > y2) { y-= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //clears canvas after win line is drawn
    function clear() {
        //starts animation loop
        const animationLoop = requestAnimationFrame(clear);
        //clears canvas
        c.clearRect(0, 0, 608, 608);
        //stops animation loop
        cancelAnimationFrame(animationLoop);
    }
    //Disallows clicking while win sound is playing
    disableClick();
    //plays win sound
    audio('./media/winGame.mp3');
    //calls main animation loop
    animateLineDrawing();
    //waits 1 second, clears canvas, resets game, and allows clicking again.
    setTimeout(function () { clear(); resetGame(); }, 1000);
}

//this function resets the game after win or tie
function resetGame() {
    //iterates through each html square element.
    for (let i = 0; i < 9; i++) {
        //gets HTML element i
        let square = document.getElementById(String(i));
        //removes backgroundImage
        square.style.backgroundImage = '';
    }
    //resets array so it is empty and we can start over
    selectedSquares = [];
}