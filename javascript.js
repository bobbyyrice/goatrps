document.addEventListener('DOMContentLoaded', () => {
    let currentRound = 0;
    const maxRounds = 5;
    let humanScore = 0;
    let botScore = 0;
    let loadingInterval;

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function determineWinner(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return "its a tie";
        }

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            return "you win";
        } else {
            botScore++;
            return "bot wins";
        }
    }

    function handleGameInput(humanChoice) {
        if (currentRound >= maxRounds) {
            return;
        }

        lockInputs();
        showLoadingMessage();

        const delay = Math.floor(Math.random() * 4 + 1) * 1000;

        setTimeout(() => {
            const computerChoice = getComputerChoice();

            const result = determineWinner(humanChoice, computerChoice);

            currentRound++;

            const outputDiv = document.getElementById("output");
            const roundResult = document.createElement("p");
            roundResult.innerText = `round ${currentRound}: you chose: ${humanChoice}, bot chose: ${computerChoice}. ${result}`;
            outputDiv.appendChild(roundResult);

            document.getElementById("rounds").innerText = `round: ${currentRound}/${maxRounds}`;
            document.getElementById("score").innerText = `score: player ${humanScore} - bot ${botScore}`;

            hideLoadingMessage();
            unlockInputs();

            if (currentRound >= maxRounds) {
                showGameFinishedMessage();
            }

        }, delay);
    }

    function showLoadingMessage() {
        const outputDiv = document.getElementById("output");
        const loadingMessage = document.createElement("p");
        loadingMessage.id = "loadingMessage";
        loadingMessage.innerText = "bot is thinking";
        outputDiv.appendChild(loadingMessage);

        let dots = 1;
        loadingInterval = setInterval(() => {
            loadingMessage.innerText = `bot is thinking${'.'.repeat(dots)}`;
            dots = (dots % 3) + 1;
        }, 500);
    }

    function hideLoadingMessage() {
        clearInterval(loadingInterval);
        const loadingMessage = document.getElementById("loadingMessage");
        if (loadingMessage) {
            loadingMessage.remove();
        }
    }

    function lockInputs() {
        document.getElementById("rockButton").disabled = true;
        document.getElementById("paperButton").disabled = true;
        document.getElementById("scissorsButton").disabled = true;
    }

    function unlockInputs() {
        document.getElementById("rockButton").disabled = false;
        document.getElementById("paperButton").disabled = false;
        document.getElementById("scissorsButton").disabled = false;
    }

    function showGameFinishedMessage() {
        const outputDiv = document.getElementById("output");
        const gameFinishedMessage = document.createElement("p");
        gameFinishedMessage.id = "gameFinished";
        if (humanScore > botScore) {
            gameFinishedMessage.innerText = `game over final score: you ${humanScore} - bot ${botScore}`;
        } else if (humanScore < botScore) {
            gameFinishedMessage.innerText = `game over final score: you ${humanScore} - bot ${botScore}`;
        } else {
            gameFinishedMessage.innerText = `game over final score: you ${humanScore} - bot ${botScore}`;
        } 
        outputDiv.appendChild(gameFinishedMessage);
    }

    document.getElementById("rockButton").addEventListener("click", function() {
        handleGameInput("rock");
    });

    document.getElementById("paperButton").addEventListener("click", function() {
        handleGameInput("paper");
    });

    document.getElementById("scissorsButton").addEventListener("click", function() {
        handleGameInput("scissors");
    });

    document.getElementById("resetButton").addEventListener("click", function() {
        currentRound = 0;
        humanScore = 0;
        botScore = 0;
        document.getElementById("result").innerText = "";
        document.getElementById("rounds").innerText = "";
        document.getElementById("score").innerText = "";
        document.getElementById("gameFinished").innerText = "";
    
        const outputDiv = document.getElementById("output");
        const children = outputDiv.children;

        for (let i = children.length - 1; i >= 0; i--) {
            const child = children[i];
            if (child.id !== "result" && child.id !== "rounds" && child.id !== "score" && child.id !== "gameFinished") {
                outputDiv.removeChild(child);
            }
        }

        console.clear();
        console.log("Game reset");
    });
});
