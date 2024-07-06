function comprar() {
    //recuperar o tipo de ingresso, quantidade comprada, quantidade dispoinível e a quantidade restante após a compra
    let tipoIngresso = document.getElementById('tipo-ingresso').value;
    let quantidadeComprada = parseInt(document.getElementById('qtd').value);
    let quantidadeDisponivel = parseInt(document.getElementById(`qtd-${tipoIngresso}`).textContent);
    let quantidadeRestante = quantidadeDisponivel - quantidadeComprada;

    //verifica se a quantidade comprada é menor ou igual a zero ou se o campo não foi preenchido
    if (quantidadeComprada <= 0 || isNaN(quantidadeComprada)) {
        alert('Informe a quantidade corretamente!');
        document.getElementById('qtd').value = 0;
        return;
    //verifica se a subtração resultou um valor menor que zero, ou seja, não havia ingressos suficientes
    } else if (quantidadeRestante < 0) {
        alert('Não há ingressos suficientes disponíveis!');
        document.getElementById('qtd').value = 0;
        return;
    }

    //indica que a compra foi realizada, atualiza o valor disponível após a compra e esvazia o campo 'Quantidade'
    alert('Compra realizada com sucesso!');
    document.getElementById(`qtd-${tipoIngresso}`).textContent = quantidadeRestante;
    document.getElementById('qtd').value = 0;

}