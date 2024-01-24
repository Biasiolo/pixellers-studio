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

        // Animação de movimento aleatório dentro da área visível
        var randomX = Math.random() * (window.innerWidth - dot.width());
        var randomY = Math.random() * (window.innerHeight - dot.height());

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
