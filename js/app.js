function alterarStatus(id) {
    let gameItem = document.getElementById(`game-${id}`);
    let imagem = gameItem.querySelector('.dashboard__item__img');
    let botao = gameItem.querySelector('.dashboard__item__button');

    imagem.classList.toggle('dashboard__item__img--rented');
    botao.classList.toggle('dashboard__item__button--return');

    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.textContent = 'Devolver';
    } else {
        botao.textContent = 'Alugar';
    }
}


