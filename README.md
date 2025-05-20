# PROJETO_WEB_INTERFACE
Repositório para o projeto web, interface, no grupo do SENAC. Fins educacionais.

Seguir as instruções para executar a API antes da interface (front):
- Executar o script do banco SQL. 
- Lembrar de modificar a classe "conectar.py", na API,
para receber as informações do banco.

- MODIFICAR O FRONT PARA RECEBER A PAI COM DB EM MYSQL -
Copiar e colar o código abaixo nos devidos arquivos:

- script.js -

function carregarProdutos() {
    fetch('http://127.0.0.1:5000/railway')
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
