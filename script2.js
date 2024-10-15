
let x = 0;
let y = 0; 

function coordenadasx(vx) {
    x = vx;
    document.getElementById("scorex").innerText = "eixo X: " + x
}

function coordenadasy(vy) {
    y = vy;
    document.getElementById("scorey").innerText = "eixo Y: " + y
}



function executeCommands() {
    let ball = document.getElementById("ball");
    if (x == 1 && y == 1) {
        ball.style.left = "50%"
        ball.style.top = "3%"
    }

    else if (x == -1 && y == 1) {
        ball.style.left = "50%"
        ball.style.top = "3%"


    }
    else if (x == -1 && y == -1) {
        ball.style.left = "50%"
        ball.style.top = "18%"

    }
    else if (x == 1 && y == -1) {
        ball.style.left = "50%"
        ball.style.top = "18%"


    }
}



// Removido a função de mover

// Removido a função updatePosition

// Removido a função checkWin

window.onload = function() {
    const modal = document.getElementById('welcome-modal');
    const modalContent = document.querySelector('.modal-content');

    // Adiciona o evento de clique para fechar o modal ao clicar fora do conteúdo
    modal.addEventListener('click', function(event) {
        if (event.target !== modalContent && !modalContent.contains(event.target)) {
            modal.style.display = 'none';  // Fecha o modal
        }
    });

    // Adiciona o evento de clique ao botão "Começar" para fechar o modal
    document.getElementById('start-button').addEventListener('click', function() {
        modal.style.display = 'none';  // Fecha o modal ao clicar em "Começar"
    });
};
