document.getElementById('proceedButton').addEventListener('click', function() {
    window.location.href = 'presentes.html'; // Substitua pelo nome da sua próxima página
});

function carregarCarrinho() {
    const carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || [];
    const carrinhoContainer = document.getElementById('selected-items');
    carrinhoContainer.innerHTML = '';

    if (carrinho.length > 0) {
        carrinho.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = 'item';
            itemElement.innerHTML = `
                ${item} 
                <button class="remove-button" onclick="removerDoCarrinho(${index})">Remover</button>`;
            carrinhoContainer.appendChild(itemElement);
        });
    } else {
        const vazioElement = document.createElement('p');
        vazioElement.textContent = 'Seu carrinho está vazio.';
        carrinhoContainer.appendChild(vazioElement);
    }
}
