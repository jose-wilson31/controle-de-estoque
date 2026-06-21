const a0_0x68a0a9 = a0_0x20e1;
(function (_0xbc043b, _0x5264cc) {
  const _0x3cb163 = a0_0x20e1,
    _0x4399bd = _0xbc043b();
  while (!![]) {
    try {
      const _0x1bb48f =
        parseInt(_0x3cb163(0x131)) / 0x1 +
        (parseInt(_0x3cb163(0x129)) / 0x2) *
          (parseInt(_0x3cb163(0x10e)) / 0x3) +
        parseInt(_0x3cb163(0x11c)) / 0x4 +
        (parseInt(_0x3cb163(0x108)) / 0x5) *
          (parseInt(_0x3cb163(0x128)) / 0x6) +
        (parseInt(_0x3cb163(0x119)) / 0x7) *
          (-parseInt(_0x3cb163(0x109)) / 0x8) +
        parseInt(_0x3cb163(0x122)) / 0x9 +
        -parseInt(_0x3cb163(0x117)) / 0xa;
      if (_0x1bb48f === _0x5264cc) break;
      else _0x4399bd["push"](_0x4399bd["shift"]());
    } catch (_0x1fa81f) {
      _0x4399bd["push"](_0x4399bd["shift"]());
    }
  }
})(a0_0x53ee, 0x432b2);
const addNome = document[a0_0x68a0a9(0x134)](a0_0x68a0a9(0x100)),
  addPreco = document[a0_0x68a0a9(0x134)](a0_0x68a0a9(0x135)),
  carrinho = document[a0_0x68a0a9(0x134)](a0_0x68a0a9(0x126)),
  totalElement = document["getElementById"](a0_0x68a0a9(0x112)),
  historicoDiv = document[a0_0x68a0a9(0x134)](a0_0x68a0a9(0x133)),
  usuarioInput = document[a0_0x68a0a9(0x134)]("usuario"),
  senhaInput = document["getElementById"](a0_0x68a0a9(0x105)),
  entrarBtn = document[a0_0x68a0a9(0x134)]("entrar"),
  usuario = document["getElementById"](a0_0x68a0a9(0x132)),
  senha = document[a0_0x68a0a9(0x134)](a0_0x68a0a9(0x105));
function entrar() {
  const _0x14fde7 = a0_0x68a0a9;
  let _0x5ee127 = usuario[_0x14fde7(0x123)][_0x14fde7(0x107)](),
    _0x4cbb4c = senha[_0x14fde7(0x123)]["trim"]();
  if (_0x5ee127 === _0x14fde7(0x11d) && _0x4cbb4c === "reduce") {
    (alert(_0x14fde7(0x136)),
      (usuario[_0x14fde7(0x123)] = ""),
      (senha[_0x14fde7(0x123)] = ""));
    return;
  } else {
    (alert(_0x14fde7(0x10f)), (usuario["value"] = ""), (senha["value"] = ""));
    return;
  }
}
entrarBtn[a0_0x68a0a9(0x104)](a0_0x68a0a9(0x120), entrar);
function temPermissão(_0x138f72) {
  const _0x5a6f2c = a0_0x68a0a9,
    _0x547e05 = usuarioInput["value"][_0x5a6f2c(0x107)](),
    _0x2b4413 = senhaInput["value"][_0x5a6f2c(0x107)]();
  if (_0x138f72 === _0x5a6f2c(0x11d))
    return _0x547e05 === _0x5a6f2c(0x11d) && _0x2b4413 === "reduce";
  return ![];
}
let produtos;
try {
  ((produtos = JSON[a0_0x68a0a9(0x11e)](
    localStorage["getItem"](a0_0x68a0a9(0xfd)),
  )),
    !Array["isArray"](produtos) && (produtos = []));
} catch (a0_0xcb9a76) {
  produtos = [];
}
function salvar() {
  const _0x464c28 = a0_0x68a0a9;
  localStorage["setItem"](_0x464c28(0xfd), JSON[_0x464c28(0x12d)](produtos));
}
function addProduto() {
  const _0x297243 = a0_0x68a0a9,
    _0x46c01f = addNome[_0x297243(0x123)][_0x297243(0x107)](),
    _0x1a7a9f = parseFloat(addPreco[_0x297243(0x123)]);
  if (_0x46c01f && !isNaN(_0x1a7a9f)) {
    const _0x26163d = { nome: _0x46c01f, preco: parseFloat(_0x1a7a9f) };
    (produtos[_0x297243(0x10a)](_0x26163d),
      alert(
        _0x297243(0x11a) +
          _0x26163d[_0x297243(0x100)] +
          _0x297243(0x115) +
          _0x26163d[_0x297243(0x135)][_0x297243(0x12c)](0x2),
      ),
      salvar(),
      (addNome["value"] = ""),
      (addPreco[_0x297243(0x123)] = ""),
      produtosCadastrados());
  } else alert(_0x297243(0x106));
}
function produtosCadastrados() {
  const _0x1a4d80 = a0_0x68a0a9;
  if (!document[_0x1a4d80(0x134)](_0x1a4d80(0xfd))) return;
  let _0x3a8af1 = document[_0x1a4d80(0x134)](_0x1a4d80(0xfd));
  ((_0x3a8af1["innerHTML"] = ""),
    produtos[_0x1a4d80(0x10b)]((_0x26257f, _0x1ab52a) => {
      const _0x8dd920 = _0x1a4d80;
      let _0xff3074 = Number(_0x26257f[_0x8dd920(0x135)]) || 0x0;
      _0x3a8af1[_0x8dd920(0x111)] +=
        "<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20" +
        (_0x1ab52a + 0x1) +
        ".\x20" +
        _0x26257f["nome"] +
        _0x8dd920(0x115) +
        _0xff3074["toFixed"](0x2) +
        _0x8dd920(0x116) +
        _0x1ab52a +
        _0x8dd920(0x130) +
        _0x1ab52a +
        _0x8dd920(0x113);
    }));
}
function removerProduto(_0x2cc3b9) {
  const _0x4eaea4 = a0_0x68a0a9;
  if (!temPermissão(_0x4eaea4(0x11d))) {
    alert("Apenas\x20o\x20administrador\x20pode\x20remover\x20produtos.");
    return;
  }
  (produtos[_0x4eaea4(0x12f)](_0x2cc3b9, 0x1), salvar(), produtosCadastrados());
}
function a0_0x20e1(_0x10a277, _0x315d3b) {
  _0x10a277 = _0x10a277 - 0xfc;
  const _0x53ee81 = a0_0x53ee();
  let _0x20e183 = _0x53ee81[_0x10a277];
  return _0x20e183;
}
produtosCadastrados();
function removerCarrinho(_0x3f1088) {
  const _0x5e2505 = a0_0x68a0a9;
  (compras["splice"](_0x3f1088, 0x1),
    (carrinho[_0x5e2505(0x111)] = ""),
    compras[_0x5e2505(0x10b)]((_0x5d60e2, _0x22678c) => {
      const _0x281474 = _0x5e2505;
      carrinho[_0x281474(0x111)] +=
        _0x281474(0x12b) +
        _0x5d60e2["nome"] +
        "\x20-\x20R$" +
        _0x5d60e2[_0x281474(0x135)][_0x281474(0x12c)](0x2) +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22removerCarrinho(" +
        _0x22678c +
        _0x281474(0x114);
    }),
    salvarCompras());
}
let compras;
try {
  ((compras = JSON[a0_0x68a0a9(0x11e)](
    localStorage[a0_0x68a0a9(0xfc)]("compras"),
  )),
    !Array[a0_0x68a0a9(0x10d)](compras) && (compras = []));
} catch (a0_0x5060fa) {
  compras = [];
}
atualizarCarrinho();
function salvarCompras() {
  const _0x1e6297 = a0_0x68a0a9;
  localStorage["setItem"](_0x1e6297(0xff), JSON[_0x1e6297(0x12d)](compras));
}
function addCarrinho(_0x1d29bb) {
  const _0x23b99b = a0_0x68a0a9;
  if (!produtos[_0x1d29bb]) return;
  let _0x3e33a3 = document["getElementById"]("carrinho"),
    _0x477006 = produtos[_0x1d29bb];
  (compras["push"](_0x477006),
    salvarCompras(),
    (_0x3e33a3["innerHTML"] +=
      _0x23b99b(0x102) +
      _0x477006[_0x23b99b(0x100)] +
      _0x23b99b(0x115) +
      _0x477006[_0x23b99b(0x135)][_0x23b99b(0x12c)](0x2) +
      _0x23b99b(0x118) +
      (compras[_0x23b99b(0x124)] - 0x1) +
      ")\x22>Remover</button>\x0a\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20"));
}
function atualizarCarrinho() {
  const _0x530b1c = a0_0x68a0a9;
  if (!carrinho) return;
  ((carrinho[_0x530b1c(0x111)] = ""),
    compras[_0x530b1c(0x10b)]((_0x2fe887, _0x5bf03f) => {
      const _0x5dea1f = _0x530b1c;
      carrinho["innerHTML"] +=
        _0x5dea1f(0x12b) +
        _0x2fe887["nome"] +
        _0x5dea1f(0x115) +
        _0x2fe887[_0x5dea1f(0x135)][_0x5dea1f(0x12c)](0x2) +
        "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22removerCarrinho(" +
        _0x5bf03f +
        ")\x22>Remover</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20";
    }),
    atualizarTotal());
}
function a0_0x53ee() {
  const _0x8f9e0d = [
    "carrinho",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20Venda\x20",
    "704478aFkokT",
    "174cjdCkY",
    ")\x22>Deletar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<p>",
    "toFixed",
    "stringify",
    "toLocaleDateString",
    "splice",
    ")\x22>Remover</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22addCarrinho(",
    "160727veQefj",
    "usuario",
    "historico",
    "getElementById",
    "preco",
    "Login\x20bem-sucedido!",
    "getItem",
    "produtos",
    "toLocaleTimeString",
    "compras",
    "nome",
    "Venda\x20finalizada!\x20Total:\x20R$",
    "\x0a\x20\x20\x20\x20<p>",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<br>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22deletarVenda(",
    "addEventListener",
    "senha",
    "Por\x20favor,\x20preencha\x20ambos\x20os\x20campos:\x20nome\x20e\x20preço.",
    "trim",
    "5rOamMD",
    "8waGqyk",
    "push",
    "forEach",
    "\x20-\x20",
    "isArray",
    "381tSenDW",
    "Usuário\x20ou\x20senha\x20incorretos.\x20Tente\x20novamente.",
    "setItem",
    "innerHTML",
    "total",
    ")\x22>Comprar</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</p>",
    ")\x22>Remover</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</p>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20",
    "\x20-\x20R$",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<button\x20onclick=\x22removerProduto(",
    "149860nZkniD",
    "\x0a\x20\x20\x20\x20<button\x20onclick=\x22removerCarrinho(",
    "2828203BcWdZX",
    "Produto\x20adicionado:\x20",
    "reduce",
    "823672rbEVbJ",
    "admin",
    "parse",
    "Apenas\x20o\x20administrador\x20pode\x20deletar\x20vendas.",
    "click",
    "data",
    "1791270QCBzXL",
    "value",
    "length",
    "O\x20carrinho\x20está\x20vazio.",
  ];
  a0_0x53ee = function () {
    return _0x8f9e0d;
  };
  return a0_0x53ee();
}
function atualizarTotal() {
  const _0x38a7f2 = a0_0x68a0a9;
  let _0x174147 = compras[_0x38a7f2(0x11b)](
    (_0x52343c, _0x2fe59e) => _0x52343c + Number(_0x2fe59e[_0x38a7f2(0x135)]),
    0x0,
  );
  totalElement["textContent"] = _0x174147[_0x38a7f2(0x12c)](0x2);
}
function finalizarVenda() {
  const _0x322b15 = a0_0x68a0a9;
  if (compras[_0x322b15(0x124)] === 0x0) {
    alert(_0x322b15(0x125));
    return;
  }
  let _0x1180ce = compras[_0x322b15(0x11b)](
      (_0xf6a29c, _0x4a0922) => _0xf6a29c + Number(_0x4a0922[_0x322b15(0x135)]),
      0x0,
    ),
    _0xec38f8 =
      JSON[_0x322b15(0x11e)](localStorage[_0x322b15(0xfc)]("historico")) || [];
  (_0xec38f8[_0x322b15(0x10a)]({
    produtos: compras,
    total: _0x1180ce,
    data: new Date()[_0x322b15(0x12e)](),
    hora: new Date()[_0x322b15(0xfe)](),
  }),
    localStorage[_0x322b15(0x110)](
      "historico",
      JSON[_0x322b15(0x12d)](_0xec38f8),
    ),
    alert(_0x322b15(0x101) + _0x1180ce[_0x322b15(0x12c)](0x2)),
    (compras = []),
    salvarCompras(),
    atualizarCarrinho());
}
function carregarHistorico() {
  const _0xb106c3 = a0_0x68a0a9;
  let _0xdd5790 =
    JSON[_0xb106c3(0x11e)](localStorage["getItem"](_0xb106c3(0x133))) || [];
  if (!historicoDiv) return;
  ((historicoDiv[_0xb106c3(0x111)] = ""),
    _0xdd5790[_0xb106c3(0x10b)]((_0x340044, _0x42a68d) => {
      const _0x55ed41 = _0xb106c3;
      historicoDiv[_0x55ed41(0x111)] +=
        _0x55ed41(0x127) +
        (_0x42a68d + 0x1) +
        ":\x20R$" +
        _0x340044[_0x55ed41(0x112)][_0x55ed41(0x12c)](0x2) +
        _0x55ed41(0x10c) +
        _0x340044[_0x55ed41(0x121)] +
        "\x20" +
        _0x340044["hora"] +
        _0x55ed41(0x103) +
        _0x42a68d +
        _0x55ed41(0x12a);
    }));
}
function deletarVenda(_0x30965e) {
  const _0x119a20 = a0_0x68a0a9;
  if (!temPermissão("admin")) {
    alert(_0x119a20(0x11f));
    return;
  }
  let _0x122dd4 =
    JSON[_0x119a20(0x11e)](localStorage[_0x119a20(0xfc)](_0x119a20(0x133))) ||
    [];
  (_0x122dd4[_0x119a20(0x12f)](_0x30965e, 0x1),
    localStorage[_0x119a20(0x110)](
      _0x119a20(0x133),
      JSON["stringify"](_0x122dd4),
    ),
    carregarHistorico());
}
carregarHistorico();
