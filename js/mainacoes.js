function updateContainerClass() {
    const container = document.getElementById('flex-container');

    if (window.innerWidth <= 768) {
        container.classList.add('container'); // Adiciona a classe para mobile
    } else {
        container.classList.remove('container'); // Remove a classe para telas maiores
    }
}

// Chama a função na carga inicial e em resize
window.onload = updateContainerClass;
window.onresize = updateContainerClass;

function checkScreenSize() {
    const div = document.querySelector('.containers'); // Substitua pelo seletor correto
    if (window.innerWidth <= 768) { // Defina o limite de largura para mobile
        div.classList.add('container');
    } else {
        div.classList.remove('container');
    }
}

window.addEventListener('resize', checkScreenSize);
window.addEventListener('load', checkScreenSize); // Para aplicar na carga inicial

(function() {
    const updateContainerClass = () => {
        const div = document.getElementById('myDiv');
        if (window.innerWidth <= 768) { // Largura desejada para mobile
            div.classList.add('container');
            div.classList.remove('containers');
        } else {
            div.classList.remove('container');
            div.classList.add('containers');
        }
    };

    const init = () => {
        updateContainerClass(); // Atualiza a classe na carga inicial
        window.addEventListener('resize', updateContainerClass); // Atualiza ao redimensionar
    };

    // Observa mudanças no DOM para garantir que o script seja acionado após a adição da div
    const observer = new MutationObserver(init);
    observer.observe(document.body, { childList: true, subtree: true });

    // Execute a inicialização
    init();
})();