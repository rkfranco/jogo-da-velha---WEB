var turn = "X";

let jogo = new Map();

gameReset();

function gameReset() {
    jogo.set(1, " ");
    jogo.set(2, " ");
    jogo.set(3, " ");
    jogo.set(4, " ");
    jogo.set(5, " ");
    jogo.set(6, " ");
    jogo.set(7, " ");
    jogo.set(8, " ");
    jogo.set(9, " ");
    var bnt;
    for (var id = 1; id < 10; id++) {
        bnt = document.getElementById(id);
        bnt.textContent = "";
    }
}

function onBtnJogo(id, btnJogo) {
    if (jogo.get(id) == " ") {
        if (turn == "X") {
            jogo.set(id, "X");
            verificarGanhador()
            turn = "O";
        } else {
            jogo.set(id, "O");
            verificarGanhador()
            turn = "X";
        }
        btnJogo.textContent = jogo.get(id);
        verificarEmpate();
    } else {
        confirm("Posição já ocupada, tente outra posição!");
    }
}

function verificarGanhador() {
    var x = 1;
    for (var i = 0; i < 3; i++) {
        if (jogo.get(x) != " " && jogo.get(x) == jogo.get(x + 1) && jogo.get(x + 1) == jogo.get(x + 2)) {
            resetFinalGame();
        }
        x += 3;
    }
    x = 1;
    for (var j = 0; j < 3; j++) {
        if (jogo.get(x) != " " && jogo.get(x) == jogo.get(x + 3) && jogo.get(x + 3) == jogo.get(x + 6)) {
            resetFinalGame();
        }
        x++;
    }
    if (jogo.get(1) != " " && jogo.get(1) == jogo.get(5) && jogo.get(5) == jogo.get(9)) {
        resetFinalGame();
    }
    if (jogo.get(3) != " " && jogo.get(3) == jogo.get(5) && jogo.get(5) == jogo.get(7)) {
        resetFinalGame();
    }
}

function verificarEmpate() {
    var espaco = false;
    for (var id = 1; id < 10; id++) {
        if (jogo.get(id) == " ") {
            espaco = true;
        }
    }
    if (!espaco){
        if(confirm("Empate! Deseja jogar novamente?")){
            gameReset();
        }
    }
}

function resetFinalGame() {
    if (confirm("Jogador " + turn + " ganhou! Deseja jogar novamente?")) {
        gameReset();
    }
}