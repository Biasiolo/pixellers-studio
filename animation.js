$(document).ready(function () {
    // Crie os pontos luminosos com ícones de formigas
    createBubbles();

    // Animação constante dos pontos
    animateBubbles();
});

function createBubbles() {
    // Crie um contêiner para os pontos
    var dotsContainer = $("<div>").addClass("dots-container").appendTo(".div-container");

    // Adicione uma margem lateral
    dotsContainer.css({
        padding: "10px",
    });

    // Número de pontos
    var numberOfDots = 40;

    for (var i = 0; i < numberOfDots; i++) {
        var dot = $("<div>").addClass("dot").appendTo(dotsContainer);

        // Inicie cada ponto no centro da tela com opacidade aleatória
        dot.css({
            left: window.innerWidth / 2 - dot.width() / 2,
            top: window.innerHeight / 2 - dot.height() / 2,
            opacity: Math.random(),
        });
    }
}

function animateBubbles() {
    $(".dot").each(function (index) {
        var dot = $(this);

        // Limites do espaço permitido (90% da área central)
        var minX = window.innerWidth * 0.05;
        var maxX = window.innerWidth * 0.95 - dot.width();
        var minY = window.innerHeight * 0.05;
        var maxY = window.innerHeight * 0.95 - dot.height();

        // Animação de movimento aleatório dentro da área visível
        var randomX = Math.random() * (maxX - minX) + minX;
        var randomY = Math.random() * (maxY - minY) + minY;

        dot.animate(
            {
                left: randomX,
                top: randomY,
                opacity: Math.random(),
            },
            Math.random() * 8000 + 2000, // Tempo de animação 
            function () {
                // Chama a animação novamente
                animateBubbles();
            }
        );
    });
}
