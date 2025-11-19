const jogador = document.querySelector('.jogador');
const bola = document.querySelector('.jogador img:nth-child(2)');

const cestaX = -800; 
const cestaY = -200; 
const duracaoArremesso = 2.5;

function arremessar() {  
    const tl = gsap.timeline({
        paused: true, 
        onComplete: resetarPosicao 
    });

    tl.to(jogador, {
        y: -10, 
        duration: 0.3,
        ease: "power2.out",
    }, 0) 
    .to(jogador, {
        y: 0, 
        duration: 0.4,
        ease: "power2.in"
    }, 0.3) 

    tl.to(bola, {
        physics2D: {
            velocity: 600,
            angle: -70, 
            gravity: 1000 
        },
        x: cestaX, 
        y: cestaY, 
        duration: duracaoArremesso,
        ease: "none", 
    }, 0);    
    tl.play();
}
function resetarPosicao() {
    gsap.set(bola, { x: 0, y: 0 }); 
}


jogador.addEventListener('click', arremessar);


