// Seleciona o botão pelo ID
const botaoTema = document.getElementById('mudarTema');
const corpo = document.body;

// Quando clicar no botão, ativa/desativa o modo escuro
botaoTema.addEventListener('click', () => {
    corpo.classList.toggle('dark-mode');

    // Atualiza o texto do botão conforme o modo atual
    if (corpo.classList.contains('dark-mode')) {
        botaoTema.textContent = 'Modo Claro';
    } else {
        botaoTema.textContent = 'Modo Escuro';
    }
});