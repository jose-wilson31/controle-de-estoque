const a0_0x14d8d4 = a0_0x48bd;
(function (_0x1f17f2, _0x1b82c2) {
  const _0x158d5a = a0_0x48bd,
    _0x189835 = _0x1f17f2();
  while (!![]) {
    try {
      const _0x1cdca9 =
        parseInt(_0x158d5a(0x182)) / 0x1 +
        (parseInt(_0x158d5a(0x194)) / 0x2) *
          (-parseInt(_0x158d5a(0x17c)) / 0x3) +
        -parseInt(_0x158d5a(0x19d)) / 0x4 +
        parseInt(_0x158d5a(0x170)) / 0x5 +
        (parseInt(_0x158d5a(0x174)) / 0x6) *
          (parseInt(_0x158d5a(0x177)) / 0x7) +
        parseInt(_0x158d5a(0x187)) / 0x8 +
        -parseInt(_0x158d5a(0x173)) / 0x9;
      if (_0x1cdca9 === _0x1b82c2) break;
      else _0x189835["push"](_0x189835["shift"]());
    } catch (_0x56c40e) {
      _0x189835["push"](_0x189835["shift"]());
    }
  }
})(a0_0x4642, 0xdc16e);
const addNome = document[a0_0x14d8d4(0x19c)](a0_0x14d8d4(0x18d)),
  addPreco = document["getElementById"](a0_0x14d8d4(0x17d)),
  carrinho = document[a0_0x14d8d4(0x19c)]("carrinho"),
  totalElement = document[a0_0x14d8d4(0x19c)](a0_0x14d8d4(0x172)),
  historicoDiv = document["getElementById"](a0_0x14d8d4(0x19b)),
  entrarBtn = document[a0_0x14d8d4(0x19c)]("entrar"),
  usuario = document[a0_0x14d8d4(0x19c)](a0_0x14d8d4(0x183)),
  senha = document[a0_0x14d8d4(0x19c)](a0_0x14d8d4(0x1b1)),
  addEstoque = document["getElementById"](a0_0x14d8d4(0x193)),
  addQuantidade = document[a0_0x14d8d4(0x19c)](a0_0x14d8d4(0x1bb)),
  buscarInput = document[a0_0x14d8d4(0x19c)](a0_0x14d8d4(0x1ab));
let logadoAdmin = ![];
function entrar() {
  const _0x41cd07 = a0_0x14d8d4;
  if (logadoAdmin) {
    ((logadoAdmin = ![]),
      (entrarBtn[_0x41cd07(0x180)] = _0x41cd07(0x1ba)),
      alert(_0x41cd07(0x198)),
      entrarBtn["blur"]());
    return;
  }
  let _0xdf8cb9 = usuario[_0x41cd07(0x18b)][_0x41cd07(0x1af)](),
    _0x3a8ea9 = senha[_0x41cd07(0x18b)][_0x41cd07(0x1af)]();
  _0xdf8cb9 === _0x41cd07(0x181) && _0x3a8ea9 === _0x41cd07(0x17e)
    ? ((logadoAdmin = !![]),
      (entrarBtn["textContent"] = _0x41cd07(0x18a)),
      alert("Login\x20realizado\x20com\x20sucesso!"),
      (usuario[_0x41cd07(0x18b)] = ""),
      (senha[_0x41cd07(0x18b)] = ""),
      entrarBtn["blur"]())
    : (alert("Usuário\x20ou\x20senha\x20incorretos!"),
      (usuario["value"] = ""),
      (senha[_0x41cd07(0x18b)] = ""));
}
entrarBtn["addEventListener"](a0_0x14d8d4(0x1a4), entrar);
function temPermissão(_0x52118c) {
  const _0x5425f0 = a0_0x14d8d4;
  if (_0x52118c === _0x5425f0(0x181)) return logadoAdmin;
  return ![];
}
let produtos;
function a0_0x48bd(_0x57037c, _0x1fdf1f) {
  _0x57037c = _0x57037c - 0x170;
  const _0x464228 = a0_0x4642();
  let _0x48bd3c = _0x464228[_0x57037c];
  return _0x48bd3c;
}
try {
  ((produtos = JSON[a0_0x14d8d4(0x1a3)](
    localStorage[a0_0x14d8d4(0x199)](a0_0x14d8d4(0x1ae)),
  )),
    !Array[a0_0x14d8d4(0x1b8)](produtos) && (produtos = []));
} catch (a0_0x485e09) {
  produtos = [];
}
function salvar() {
  const _0x21dd4f = a0_0x14d8d4;
  localStorage[_0x21dd4f(0x1a9)](_0x21dd4f(0x1ae), JSON["stringify"](produtos));
}
function addProduto() {
  const _0x112484 = a0_0x14d8d4;
  if (!temPermissão("admin")) {
    (alert(_0x112484(0x19f)), document[_0x112484(0x171)]["blur"]());
    return;
  }
  const _0x4903db = addNome[_0x112484(0x18b)][_0x112484(0x1af)](),
    _0x16045c = parseFloat(addPreco["value"]),
    _0x24c6a1 = parseInt(addQuantidade[_0x112484(0x18b)]);
  if (_0x4903db && !isNaN(_0x16045c) && !isNaN(_0x24c6a1)) {
    const _0x54ed3d = {
      nome: _0x4903db,
      preco: parseFloat(_0x16045c),
      estoque: _0x24c6a1,
    };
    (produtos["push"](_0x54ed3d),
      alert(
        _0x112484(0x197) +
          _0x54ed3d[_0x112484(0x18d)] +
          _0x112484(0x18e) +
          _0x54ed3d[_0x112484(0x17d)][_0x112484(0x18c)](0x2) +
          _0x112484(0x1b7) +
          _0x54ed3d[_0x112484(0x193)],
      ),
      addNome[_0x112484(0x17b)](),
      addPreco[_0x112484(0x17b)](),
      addQuantidade[_0x112484(0x17b)](),
      salvar(),
      (addNome[_0x112484(0x18b)] = ""),
      (addPreco["value"] = ""),
      (addQuantidade[_0x112484(0x18b)] = ""),
      renderizarProdutos(produtos),
      document[_0x112484(0x171)][_0x112484(0x17b)]());
  } else alert(_0x112484(0x1ac));
}
function a0_0x4642() {
  const _0x388ac4 = [
    "forEach",
    "8983569niCrKJ",
    "filter",
    "find",
    "\x0a\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22removerProduto(",
    "blur",
    "12SyZKvm",
    "preco",
    "reduce",
    "includes",
    "textContent",
    "admin",
    "115873snUOur",
    "usuario",
    "estoque-baixo",
    "Venda\x20finalizada!\x20Total:\x20R$",
    "O\x20carrinho\x20está\x20vazio.",
    "5766848LojBDG",
    "⚠️\x20Atenção!\x20Estoque\x20baixo\x20de\x20",
    ")\x22>Remover</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "Logout",
    "value",
    "toFixed",
    "nome",
    "\x20-\x20R$",
    ")\x22>Deletar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>",
    "\x20-\x20",
    "\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20",
    ".\x20Não\x20é\x20possível\x20adicionar\x20ao\x20carrinho.",
    "estoque",
    "577306GWdiiE",
    "compras",
    ")\x22>Excluir</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22addCarrinho(",
    "Produto\x20adicionado:\x20",
    "Logout\x20realizado\x20com\x20sucesso!",
    "getItem",
    "push",
    "historico",
    "getElementById",
    "660128dZLfOK",
    "\x20-\x20<span\x20style=\x22color:\x20red;\x22>⚠️\x20ESTOQUE\x20BAIXO</span>",
    "Apenas\x20o\x20administrador\x20pode\x20adicionar\x20produtos.",
    "toLowerCase",
    "Apenas\x20o\x20administrador\x20pode\x20Excluir\x20produtos.",
    "⚠️\x20Produto\x20esgotado:\x20",
    "parse",
    "click",
    "addEventListener",
    "input",
    "\x20unidades.",
    "stringify",
    "setItem",
    "hora",
    "buscar",
    "Por\x20favor,\x20preencha\x20todos\x20os\x20campos:\x20nome,\x20preço\x20e\x20quantidade.",
    "toLocaleTimeString",
    "produtos",
    "trim",
    "Apenas\x20o\x20administrador\x20pode\x20deletar\x20vendas.",
    "senha",
    "<p\x20class=\x22",
    "innerHTML",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22removerCarrinho(",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>",
    "splice",
    "\x20-\x20Estoque:\x20",
    "isArray",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Venda\x20",
    "Logar",
    "quantidade",
    "7473730NuCkpI",
    "activeElement",
    "total",
    "12543408jJZZzg",
    "6WCPviv",
    "toLocaleDateString",
  ];
  a0_0x4642 = function () {
    return _0x388ac4;
  };
  return a0_0x4642();
}
function renderizarProdutos(_0x27bca1) {
  const _0x576bfd = a0_0x14d8d4;
  let _0xf3c6e7 = document[_0x576bfd(0x19c)](_0x576bfd(0x1ae));
  if (!_0xf3c6e7) return;
  const _0x343029 = buscarInput["value"]["toLowerCase"]();
  ((_0xf3c6e7[_0x576bfd(0x1b3)] = ""),
    _0x27bca1[_0x576bfd(0x176)]((_0x118399, _0x459f54) => {
      const _0x37d247 = _0x576bfd;
      if (
        !_0x118399[_0x37d247(0x18d)][_0x37d247(0x1a0)]()["includes"](_0x343029)
      )
        return;
      let _0x211d91 = "",
        _0x212f27 = _0x118399[_0x37d247(0x193)] <= 0x5 ? _0x37d247(0x184) : "";
      (_0x118399[_0x37d247(0x193)] <= 0x5 && (_0x211d91 = _0x37d247(0x19e)),
        (_0xf3c6e7[_0x37d247(0x1b3)] +=
          _0x37d247(0x1b2) +
          _0x212f27 +
          _0x37d247(0x191) +
          (_0x459f54 + 0x1) +
          ".\x20" +
          _0x118399["nome"] +
          "\x20-\x20R$" +
          _0x118399[_0x37d247(0x17d)][_0x37d247(0x18c)](0x2) +
          _0x37d247(0x1b7) +
          _0x118399[_0x37d247(0x193)] +
          _0x211d91 +
          _0x37d247(0x17a) +
          _0x459f54 +
          _0x37d247(0x196) +
          _0x459f54 +
          ")\x22>Comprar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>"));
    }));
}
function removerProduto(_0x571276) {
  const _0x865ade = a0_0x14d8d4;
  if (!temPermissão(_0x865ade(0x181))) {
    alert(_0x865ade(0x1a1));
    return;
  }
  (produtos[_0x865ade(0x1b6)](_0x571276, 0x1),
    salvar(),
    renderizarProdutos(produtos));
}
renderizarProdutos(produtos);
function removerCarrinho(_0x2ef3d3) {
  const _0x402cdb = a0_0x14d8d4;
  let _0x12608d = compras[_0x2ef3d3],
    _0x1dc4de = produtos[_0x402cdb(0x179)](
      (_0x15f9cf) => _0x15f9cf[_0x402cdb(0x18d)] === _0x12608d["nome"],
    );
  (_0x1dc4de && _0x1dc4de["estoque"]++,
    compras[_0x402cdb(0x1b6)](_0x2ef3d3, 0x1),
    salvar(),
    salvarCompras(),
    renderizarProdutos(produtos),
    atualizarCarrinho());
}
function filtrarProdutos() {
  const _0x4c8089 = a0_0x14d8d4,
    _0x2ecd34 = buscarInput["value"][_0x4c8089(0x1a0)](),
    _0x541cf8 = produtos[_0x4c8089(0x178)]((_0x36b145) =>
      _0x36b145[_0x4c8089(0x18d)]
        [_0x4c8089(0x1a0)]()
        [_0x4c8089(0x17f)](_0x2ecd34),
    );
  renderizarProdutos(_0x541cf8);
}
buscarInput &&
  buscarInput[a0_0x14d8d4(0x1a5)](a0_0x14d8d4(0x1a6), filtrarProdutos);
let compras;
try {
  ((compras = JSON[a0_0x14d8d4(0x1a3)](
    localStorage["getItem"](a0_0x14d8d4(0x195)),
  )),
    !Array["isArray"](compras) && (compras = []));
} catch (a0_0x2905a3) {
  compras = [];
}
(atualizarCarrinho(), carregarHistorico());
function salvarCompras() {
  const _0x4ac2b7 = a0_0x14d8d4;
  localStorage["setItem"](_0x4ac2b7(0x195), JSON[_0x4ac2b7(0x1a8)](compras));
}
function addCarrinho(_0x539802) {
  const _0x2682a1 = a0_0x14d8d4;
  let _0x53729b = produtos[_0x539802];
  if (_0x53729b[_0x2682a1(0x193)] <= 0x0) {
    alert(_0x2682a1(0x1a2) + _0x53729b[_0x2682a1(0x18d)] + _0x2682a1(0x192));
    return;
  }
  (compras["push"]({
    nome: _0x53729b["nome"],
    preco: _0x53729b[_0x2682a1(0x17d)],
  }),
    _0x53729b[_0x2682a1(0x193)]--,
    salvar(),
    salvarCompras(),
    renderizarProdutos(produtos),
    atualizarCarrinho(),
    _0x53729b[_0x2682a1(0x193)] <= 0x5 &&
      alert(
        _0x2682a1(0x188) +
          _0x53729b[_0x2682a1(0x18d)] +
          ".\x20Estoque\x20atual:\x20" +
          _0x53729b[_0x2682a1(0x193)] +
          _0x2682a1(0x1a7),
      ));
}
function atualizarCarrinho() {
  const _0x3375a0 = a0_0x14d8d4;
  if (!carrinho) return;
  ((carrinho[_0x3375a0(0x1b3)] = ""),
    compras[_0x3375a0(0x176)]((_0x4c6fb5, _0xaebfca) => {
      const _0x42d362 = _0x3375a0;
      carrinho[_0x42d362(0x1b3)] +=
        _0x42d362(0x1b5) +
        _0x4c6fb5[_0x42d362(0x18d)] +
        _0x42d362(0x18e) +
        _0x4c6fb5[_0x42d362(0x17d)][_0x42d362(0x18c)](0x2) +
        _0x42d362(0x1b4) +
        _0xaebfca +
        _0x42d362(0x189);
    }),
    atualizarTotal());
}
function atualizarTotal() {
  const _0x2f1c61 = a0_0x14d8d4;
  let _0x5d28e6 = compras[_0x2f1c61(0x17e)](
    (_0x2c85f0, _0x3d3f79) => _0x2c85f0 + Number(_0x3d3f79[_0x2f1c61(0x17d)]),
    0x0,
  );
  totalElement["textContent"] = _0x5d28e6["toFixed"](0x2);
}
function finalizarVenda() {
  const _0x29747e = a0_0x14d8d4;
  if (compras["length"] === 0x0) {
    alert(_0x29747e(0x186));
    return;
  }
  let _0x3d0814 = compras[_0x29747e(0x17e)](
      (_0x409eeb, _0xb1b7a2) => _0x409eeb + Number(_0xb1b7a2["preco"]),
      0x0,
    ),
    _0x23c0fd =
      JSON[_0x29747e(0x1a3)](localStorage[_0x29747e(0x199)]("historico")) || [];
  (_0x23c0fd[_0x29747e(0x19a)]({
    produtos: compras,
    total: _0x3d0814,
    data: new Date()[_0x29747e(0x175)](),
    hora: new Date()[_0x29747e(0x1ad)](),
  }),
    localStorage[_0x29747e(0x1a9)](
      _0x29747e(0x19b),
      JSON[_0x29747e(0x1a8)](_0x23c0fd),
    ),
    alert(_0x29747e(0x185) + _0x3d0814["toFixed"](0x2)),
    (compras = []),
    salvarCompras(),
    atualizarCarrinho(),
    carregarHistorico());
}
function carregarHistorico() {
  const _0x19c1b6 = a0_0x14d8d4;
  let _0xc4461c = JSON[_0x19c1b6(0x1a3)](
    localStorage[_0x19c1b6(0x199)](_0x19c1b6(0x19b)) || "[]",
  );
  if (!historicoDiv) return;
  ((historicoDiv[_0x19c1b6(0x1b3)] = ""),
    _0xc4461c["forEach"]((_0x527c89, _0x1ee818) => {
      const _0x2d715d = _0x19c1b6;
      historicoDiv["innerHTML"] +=
        _0x2d715d(0x1b9) +
        (_0x1ee818 + 0x1) +
        ":\x20R$" +
        _0x527c89[_0x2d715d(0x172)][_0x2d715d(0x18c)](0x2) +
        _0x2d715d(0x190) +
        _0x527c89["data"] +
        "\x20" +
        _0x527c89[_0x2d715d(0x1aa)] +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22deletarVenda(" +
        _0x1ee818 +
        _0x2d715d(0x18f);
    }));
}
function deletarVenda(_0x735a56) {
  const _0x1bca82 = a0_0x14d8d4;
  if (!temPermissão(_0x1bca82(0x181))) {
    alert(_0x1bca82(0x1b0));
    return;
  }
  let _0x16f921 = JSON[_0x1bca82(0x1a3)](
    localStorage["getItem"](_0x1bca82(0x19b)) || "[]",
  );
  (_0x16f921["splice"](_0x735a56, 0x1),
    localStorage["setItem"](
      _0x1bca82(0x19b),
      JSON[_0x1bca82(0x1a8)](_0x16f921),
    ),
    carregarHistorico());
}
carregarHistorico();
