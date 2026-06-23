const addNome = document.getElementById("nome");
const addPreco = document.getElementById("preco");
const carrinho = document.getElementById("carrinho");
const totalElement = document.getElementById("total");
const historicoDiv = document.getElementById("historico");
const entrarBtn = document.getElementById("entrar");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const addEstoque = document.getElementById("estoque");
const addQuantidade = document.getElementById("quantidade");

let logadoAdmin = false;
function entrar() {
    let usuarioVal = usuario.value.trim();
    let senhaVal = senha.value.trim();

    if (usuarioVal === "admin" && senhaVal === "reduce") {
        logadoAdmin = true;

        alert("Login bem-sucedido!");

        usuario.value = "";
        senha.value = "";
        return;
    } else {
        logadoAdmin = false;

        alert("Usuário ou senha incorretos. Tente novamente.");
        logadoAdmin = false;
        usuario.value = "";
        senha.value = "";
    }
}
entrarBtn.addEventListener("click", entrar);

function temPermissão(role) {
    if (role === "admin") {
        return logadoAdmin;
    }
    return false;
}

//carrega do navegador
let produtos;

try {
    produtos = JSON.parse(localStorage.getItem("produtos"));
    if (!Array.isArray(produtos)) {
        produtos = [];
    }
} catch (e) {
    produtos = [];
}

function salvar() {
    localStorage.setItem("produtos", JSON.stringify(produtos));
}

function addProduto() {
    const nome = addNome.value.trim();
    const preco = parseFloat(addPreco.value);
    const quantidade = parseInt(addQuantidade.value);

    if (nome && !isNaN(preco) && !isNaN(quantidade)) {
        const produto = {
            nome: nome,
            preco: parseFloat(preco),
            estoque: quantidade
        };
        produtos.push(produto);
        alert(
            `Produto adicionado: ${produto.nome} - R$${produto.preco.toFixed(2)} - Estoque: ${produto.estoque}`,
        );
        salvar();
        
        addNome.value = "";
        addPreco.value = "";
        addQuantidade.value = "";

        produtosCadastrados();
    } else {
        alert("Por favor, preencha todos os campos: nome, preço e quantidade.");
    }
}

function produtosCadastrados() {
    if (!document.getElementById("produtos")) return;

    let div = document.getElementById("produtos");
    div.innerHTML = "";

    produtos.forEach((produto, index) => {

        let alerta = '';
        let className = produto.estoque <= 5 ? 'estoque-baixo' : '';

        if (produto.estoque <= 5) {
            alerta = ' - <span style="color: red;">⚠️ ESTOQUE BAIXO</span>';
        }

        div.innerHTML += `<p class="${className}">
        ${index + 1}. ${produto.nome} - R$${produto.preco.toFixed(2)} - Estoque: ${produto.estoque}${alerta}

        <button onclick="removerProduto(${index})">Excluir</button>
        <button onclick="addCarrinho(${index})">Comprar</button>
        </p>`;
    });
}

function removerProduto(index) {
    if (!temPermissão("admin")) {
        alert("Apenas o administrador pode Excluir produtos.");
        return;
    }

    produtos.splice(index, 1);

    salvar();
    produtosCadastrados();
}

produtosCadastrados();

function removerCarrinho(index) {
    let valorRemovido = Number(compras[index].preco);


    compras.splice(index, 1);

    let totalAtual = Number(totalElement.textContent);
    totalAtual -= valorRemovido;

    totalElement.textContent = totalAtual.toFixed(2);

    carrinho.innerHTML = "";
    compras.forEach((produto, indx) => {
        carrinho.innerHTML += `
            <p>${produto.nome} - R$${produto.preco.toFixed(2)}
            <button onclick="removerCarrinho(${indx})">Remover</button>
            </p>
            `;
    });

    salvarCompras();
    atualizarCarrinho();
}

let compras;

try {
    compras = JSON.parse(localStorage.getItem("compras"));
    if (!Array.isArray(compras)) {
        compras = [];
    }
} catch (e) {
    compras = [];
}
atualizarCarrinho();


function salvarCompras() {
    localStorage.setItem("compras", JSON.stringify(compras));
}

function addCarrinho(produtoIndex) {

    let produto = produtos[produtoIndex];

    if (produto.estoque <= 0) {
        alert(`⚠️ Produto esgotado: ${produto.nome}. Não é possível adicionar ao carrinho.`);
        return;
    }

    compras.push({
        nome: produto.nome,
        preco: produto.preco,
    });

    produto.estoque --;

    salvar();
    salvarCompras();

    produtosCadastrados();
    atualizarCarrinho();

    if (produto.estoque <= 5) {
        alert(`⚠️ Atenção! Estoque baixo de ${produto.nome}. Estoque atual: ${produto.estoque} unidades.`);
    }

}

function atualizarCarrinho() {
    if (!carrinho) return;

    carrinho.innerHTML = "";
    compras.forEach((produto, index) => {
        carrinho.innerHTML += `
            <p>${produto.nome} - R$${produto.preco.toFixed(2)}
            <button onclick="removerCarrinho(${index})">Remover</button>
            </p>
            `;
    });

    atualizarTotal();
}

function atualizarTotal() {
    let total = compras.reduce((acc, produto) => acc + Number(produto.preco), 0);
    totalElement.textContent = total.toFixed(2);
}

function finalizarVenda() {
    if (compras.length === 0) {
        alert("O carrinho está vazio.");
        return;
    }

    let total = compras.reduce((acc, produto) => acc + Number(produto.preco), 0);

    let historico = JSON.parse(localStorage.getItem("historico")) || [];
    historico.push({
        produtos: compras,
        total: total,
        data: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
    });
    localStorage.setItem("historico", JSON.stringify(historico));

    alert(`Venda finalizada! Total: R$${total.toFixed(2)}`);
    compras = [];
    salvarCompras();
    atualizarCarrinho();
}

function carregarHistorico() {
    let historico = JSON.parse(localStorage.getItem("historico")) || [];
    if (!historicoDiv) return;

    historicoDiv.innerHTML = "";
    historico.forEach((venda, index) => {
        historicoDiv.innerHTML += `
        <p>
        Venda ${index + 1}: R$${venda.total.toFixed(2)} - ${venda.data} ${venda.hora}
        <br>
        <button onclick="deletarVenda(${index})">Deletar</button>
        </p>`;
    });
}

function deletarVenda(index) {
    if (!temPermissão("admin")) {
        alert("Apenas o administrador pode deletar vendas.");
        return;
    }

    let historico = JSON.parse(localStorage.getItem("historico")) || [];
    historico.splice(index, 1);
    localStorage.setItem("historico", JSON.stringify(historico));
    carregarHistorico();
}

carregarHistorico();
