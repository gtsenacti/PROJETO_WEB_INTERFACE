function carregarProdutos() {
    fetch('http://127.0.0.1:5000/ProdutosLoja')
        .then(response => response.json())
        .then(data => {
            const tabela = document.querySelector("#tabelaProdutos tbody");
            tabela.innerHTML = "";

            data.forEach(prod => {
                const linha = document.createElement("tr");
                linha.innerHTML = `<td>${prod.produto}</td><td>${prod.preco.toFixed(2)}</td>`;
                tabela.appendChild(linha);
            });
        })
        .catch(error => {
            alert("Erro ao carregar produtos: " + error);
        });
}