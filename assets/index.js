
const jogador = document.getElementById('bolaImg');
const bola = document.getElementById('jogadorImg')
const scoreElement = document.getElementById('score');
const mensagemVitoria = document.getElementById('mensagem-vitoria');

const cestaX = -980; 
const cestaY = -400; 
const duracaoArremesso = 2.0;
let pontos = 0;
let arremessando = false; 


function arremessar() {
    
    if (arremessando) return;
    arremessando = true;


    if(mensagemVitoria) gsap.set(mensagemVitoria, { display: "none" });

    const tl = gsap.timeline({
        onComplete: resetarPosicao
    });

   
    tl.to(jogador, {
        y: -50,
        duration: 0.3,
        ease: "power2.out",
        yoyo: true,
        repeat: 1
    }, 0);


    tl.fromTo(bola, 
        {
          
            opacity: 1,
            scale: 1,
            x: 0,
            y: 0,
            rotation: 0
        },
        {
            
            physics2D: {
                velocity: 600,
                angle: -75,
                gravity: 1200
            },
            x: cestaX,
            y: cestaY,
            rotation: -720,
            scale: 0, 
            opacity: 0, 
            duration: duracaoArremesso,
            ease: "none"
        }, 
        0
    );
}


function resetarPosicao() {
    
    if(scoreElement) {
        pontos++;
        scoreElement.innerText = pontos;

       
        if (pontos === 3 && mensagemVitoria) {
            gsap.to(mensagemVitoria, {
                display: "block",
                scale: 1,
                opacity: 1,
                duration: 0.5,
                ease: "back.out(1.7)"
            });
        
            pontos = 0;
            scoreElement.innerText = 0;
        }
    }

   //reset bola
    gsap.set(bola, { x: 0, y: 0, rotation: 0, scale: 1, opacity: 1 });
    

    arremessando = false;
}

//jogar
if(jogador) {
    jogador.addEventListener('click', arremessar);
} else {
    console.error("ERRO: Não encontrei o elemento .jogador no HTML");
}

//efeito de aparecer o texto
gsap.from(".intro-headline .word", { 
    y: 50,             //valor abaixo da posicao final
    opacity: 0,         // comeca invisivel e vai aparecendo k
    duration: 0.8,      // duracao da animation de cada p
    stagger: 0.15,      
    ease: "power2.out"  // velocidade no final
});

// Animação da seta
gsap.to(".scroll-down", {
    y: 10,
    opacity: 0.5,
    duration: 1, // tempo
    ease: "power1.inOut",
    repeat: -1, // infinito
    yoyo: true  // pulinho da seta 
});