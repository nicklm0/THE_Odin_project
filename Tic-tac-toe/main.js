const TicTac = {
    cPlayer: "X", // Tracks current player (X or O)
    state: Array(9).fill(null),  // Board state (null for empty cells)
    gameOver : false,
    
    // Initialize the game

    int(){
        this.cBoard();
        document.getElementById(reset).addEventListener("click", () => this.reset());
    },


    //create the board dynamic

    cBoard(){
        const board = document.getElementById("board");
        board.innerHTML = ""; // Clear previous board
        this.state.forEach((_, i => {
            const cell = 
            document.createElement("div");
            cell.classlist.add("cell");
            cell.dataset.index = i;
            board.appendChild(cell);
        }));
        board.addEventListener("click", (e) => {
            this.handleCellClick(e);
            this.uMessage(`Player ${this.cPlayer}` `s turn` )
        }) 
        
    },
    //handle a cell click
    handleClick(e){
        const cell = e.target;
        const i = cell.dataset.index;

            // Ignore clicks if game is over or cell is taken
            if (this.gameOver || !cell.classList.contains("cell" ) || this.state[i])
                return;
            
            // Update board state and UI
            this.state[i] = this.cPlayer;
          cell.textContent = this.cPlayer;
          cell.classList.add("taken");  

          //check for winner or tie 
          const winCombo = this.checkwin();
          if(winCombo){
            this.highlight(winCombo);
            this.uMessage(`Player ${this.cPlayer} won!`);
            this.gameOver = true;
          }else if(this.state.every((cell) => cell)) {
            this.uMessage(`it's a tie`);
            this.message = true;
          } else {
            this.cPlayer = this.cPlayer === "X" ? "O" : "X";
            this.uMessage(`Player ${this.cPlayer}'s turn`);
          }
    }
    // Check if there's a winning combination
    checkWin() {
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8], // Rows
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8], // Columns
            [0, 4, 8],
            [2, 4, 6], // Diagonals
        ];
        return wins.find((combo) =>
            combo.every((i) => this.state[i] === this.cPlayer)
        );
        
    },
         // Highlight winning cells
    highlight(combo) {
        combo.forEach((i) => {
            document.getElementById("board").children[i].style.color = "red";
        });
    },

    // Reset the game
    reset() {
        this.state = Array(9).fill(null);
        this.cPlayer = "X";
        this.gameOver = false;
        this.cBoard();
    },

    // Update the game status message
    uMessage(msg) {
        document.getElementById("message").textContent = msg;
    },
    // Start the game
    TicTac.init();
};

