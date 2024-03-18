function initMenuMobile() {
    const menuButton = document.querySelector("[data-menu='button']");
    const menuList = document.querySelector("[data-menu='list']");
  
    menuButton.addEventListener('click', openMenu);
  
    function openMenu() {
        menuList.classList.toggle('active')
        menuButton.classList.toggle('active')
    }
  
  }
  
  function initTyping() {
    let letter = 0;
    const text = '     Jorge Willian';
  
    function typeWriter() {
        if(letter < text.length) {
            document.querySelector(".meu-nome").innerHTML += text.charAt(letter);
            letter++;
            setTimeout(typeWriter, 150)
        }
    }
  
    typeWriter();
  }
  
  function initMenuTransition() {
      
    function transitionMenu() {
        const nav = document.querySelector('nav');
        nav.classList.toggle("fixed", window.scrollY > 0)
    }
    window.addEventListener('scroll', transitionMenu)
  }
  
  function mostrarFrase() {
  
    let descTecnologias = document.querySelectorAll('.container-barra');
    let iconTecnologias = document.querySelectorAll('.icons');
    let inst = document.querySelector('#instrucao');
    
    for (let a = 0; a < iconTecnologias.length; a++) {
  
        iconTecnologias[a].addEventListener('mouseover', () => {
        descTecnologias[a].classList.remove('hide');
        inst.classList.add('hide');
  
        })
    
        iconTecnologias[a].addEventListener('mouseout', () => {
        descTecnologias[a].classList.add('hide');
        inst.classList.remove('hide');
  
        })
    }
  }
  
  initTyping();
  mostrarFrase(); 
  initMenuTransition();
  initMenuMobile();