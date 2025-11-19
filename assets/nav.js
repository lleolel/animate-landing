document.addEventListener("DOMContentLoaded", () => {
  const btnMobile = document.getElementById('mobo-btn');
  const nav = document.getElementById('nav');

  function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    nav.classList.toggle('ativar'); 
    const menuAtivo = nav.classList.contains('ativar');
    event.currentTarget.setAttribute('aria-expanded', menuAtivo);
    if (menuAtivo) {
      event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
      event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
  }
  if (btnMobile && nav) {
    btnMobile.addEventListener('click', toggleMenu);
    btnMobile.addEventListener('touchstart', toggleMenu);
  } else {
    console.warn("Aviso: Elementos (mobo-btn ou nav) não encontrados MESMO DEPOIS de o DOM carregar.");
  }

});