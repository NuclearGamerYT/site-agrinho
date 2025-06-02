const produtos = [
    {
        id: 1,
        nome: "Isca Rapala Original",
        descricao: "Excelente para pesca de peixes grandes e médios.",
        preco: 49.90,
        imagem: "https://images.unsplash.com/photo-1592455500250-8adcb8b1e631?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        nome: "Isca Minnow",
        descricao: "Perfeita para pescarias de água doce.",
        preco: 39.90,
        imagem: "https://images.unsplash.com/photo-1574173432514-0bcd2a3f6b2e?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 3,
        nome: "Isca de Peso Pesado",
        descricao: "Ideal para pescaria em águas profundas.",
        preco: 59.90,
        imagem: "https://images.unsplash.com/photo-1605617334304-36177d7a4b1d?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        nome: "Isca de Superfície",
        descricao: "Perfeita para pesca na superfície da água.",
        preco: 44.90,
        imagem: "https://images.unsplash.com/photo-1616954641287-2f8c7f1f0b7f"
    },
    {
        id: 5,
        nome: "Isca de Chumbo",
        descricao: "Para maior alcance na pescaria.",
        preco: 29.90,
        imagem: "https://images.unsplash.com/photo-1616895913854-e8b2adf0f0f1"
    },
    {
        id: 6,
        nome: "Vara de Pesca Profissional",
        descricao: "Vara resistente para pescarias esportivas.",
        preco: 120.00,
        imagem: "https://images.unsplash.com/photo-1549924231-f129b911e442?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 7,
        nome: "Carretilha de Alta Performance",
        descricao: "Perfeita para pescadores experientes.",
        preco: 350.00,
        imagem: "https://images.unsplash.com/photo-1622861394602-65f1eecb0f7f?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 8,
        nome: "Conjunto de Iscas Artificiais",
        descricao: "Kit com diversas iscas para diferentes peixes.",
        preco: 89.90,
        imagem: "https://images.unsplash.com/photo-1578890523494-0f8b823a8b87"
    },
    {
        id: 9,
        nome: "Caixa de Pesca Completa",
        descricao: "Contém todos os acessórios essenciais para sua pescaria.",
        preco: 150.00,
        imagem: "https://images.unsplash.com/photo-1526462744383-74b5b7b9e0f3?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 10,
        nome: "Colete Salva-Vidas",
        descricao: "Segurança e conforto para suas aventuras aquáticas.",
        preco: 95.00,
        imagem: "https://images.unsplash.com/photo-1610444391629-87c2c3e1a0d8?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80"
    }
];

let carrinho = [];

const cartIcon = document.getElementById('cartIcon');
const cartCount = document.getElementById('cartCount');
const cartModal = document.getElementById('cartModal');
const closeButton = document.querySelector('.close-button');
const cartItemsList = document.getElementById('cartItemsList');
const cartTotalElement = document.getElementById('cartTotal');
const finalizarCompraModalBtn = document.getElementById('finalizarCompraModalBtn');

const cartPageList = document.getElementById('cartPageList');
const cartPageTotal = document.getElementById('cartPageTotal');
const finalizarCompraPageBtn = document.getElementById('finalizarCompraPageBtn');
const continuarComprandoBtn = document.getElementById('continuarComprandoBtn');

const checkoutSummaryList = document.getElementById('checkoutSummaryList');
const checkoutTotalElement = document.getElementById('checkoutTotal');
const checkoutForm = document.getElementById('checkoutForm');
const formaPagamentoSelect = document.getElementById('forma-pagamento');
const camposPagamentoDinamicosDiv = document.getElementById('campos-pagamento-dinamicos');


document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const tab = link.getAttribute('data-tab');

        document.querySelectorAll('.tab-section').forEach(section => {
            section.style.display = 'none';
        });
        document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));

        document.getElementById(tab).style.display = 'block';
        link.classList.add('active');

        if (tab === 'carrinho') {
            atualizarCarrinhoPageUI();
        } else if (tab === 'finalizar-compra') {
            atualizarCheckoutUI();
            exibirCamposPagamento();
        }
    });
});

function carregarProdutos() {
    const container = document.getElementById('product-list');
    container.innerHTML = '';
    produtos.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <img src="${p.imagem}" alt="${p.nome}">
            <div class="product-details">
                <h3>${p.nome}</h3>
                <p>${p.descricao}</p>
                <p class="price">R$ ${p.preco.toFixed(2)}</p>
                <button class="btn" data-id="${p.id}">Adicionar ao Carrinho</button>
            </div>
        `;
        container.appendChild(div);
    });

    document.querySelectorAll('.product .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            adicionarAoCarrinho(productId);
        });
    });
}

function adicionarAoCarrinho(productId) {
    const produtoExistente = carrinho.find(item => item.id === productId);
    if (produtoExistente) {
        produtoExistente.quantidade++;
    } else {
        const produto = produtos.find(p => p.id === productId);
        if (produto) {
            carrinho.push({ ...produto, quantidade: 1 });
        }
    }
    atualizarCarrinhoUI();
    if (document.getElementById('carrinho').style.display === 'block') {
        atualizarCarrinhoPageUI();
    }
    alert('Produto adicionado ao carrinho!');
}

function removerDoCarrinho(productId) {
    carrinho = carrinho.filter(item => item.id !== productId);
    atualizarCarrinhoUI();
    if (document.getElementById('carrinho').style.display === 'block') {
        atualizarCarrinhoPageUI();
    }
    if (document.getElementById('finalizar-compra').style.display === 'block') {
        atualizarCheckoutUI();
        exibirCamposPagamento();
    }
}

function calcularTotalCarrinho() {
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
}

function atualizarCarrinhoUI() {
    cartCount.textContent = carrinho.reduce((total, item) => total + item.quantidade, 0);

    cartItemsList.innerHTML = '';
    let totalCarrinho = 0;

    if (carrinho.length === 0) {
        cartItemsList.innerHTML = '<li>Seu carrinho está vazio.</li>';
        finalizarCompraModalBtn.disabled = true;
    } else {
        finalizarCompraModalBtn.disabled = false;
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.nome}</h4>
                    <p>Quantidade: ${item.quantidade} x R$ ${item.preco.toFixed(2)}</p>
                </div>
                <button class="btn btn-remove" data-id="${item.id}">Remover</button>
            `;
            cartItemsList.appendChild(li);
        });
    }
    cartTotalElement.textContent = calcularTotalCarrinho().toFixed(2);

    document.querySelectorAll('#cartItemsList .btn-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            removerDoCarrinho(productId);
        });
    });
}

function atualizarCarrinhoPageUI() {
    cartPageList.innerHTML = '';
    
    if (carrinho.length === 0) {
        cartPageList.innerHTML = '<li>Seu carrinho está vazio. Adicione alguns produtos!</li>';
        finalizarCompraPageBtn.disabled = true;
    } else {
        finalizarCompraPageBtn.disabled = false;
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.nome}</h4>
                    <p>Quantidade: ${item.quantidade} x R$ ${item.preco.toFixed(2)}</p>
                </div>
                <button class="btn btn-remove" data-id="${item.id}">Remover</button>
            `;
            cartPageList.appendChild(li);
        });
    }
    cartPageTotal.textContent = calcularTotalCarrinho().toFixed(2);

    document.querySelectorAll('#cartPageList .btn-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            removerDoCarrinho(productId);
        });
    });
}

function atualizarCheckoutUI() {
    checkoutSummaryList.innerHTML = '';
    
    if (carrinho.length === 0) {
        checkoutSummaryList.innerHTML = '<li>Seu carrinho está vazio. Por favor, adicione produtos para finalizar a compra.</li>';
        checkoutForm.querySelector('.checkout-confirm-btn').disabled = true;
        formaPagamentoSelect.disabled = true;
    } else {
        checkoutForm.querySelector('.checkout-confirm-btn').disabled = false;
        formaPagamentoSelect.disabled = false;
        carrinho.forEach(item => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${item.nome} (x${item.quantidade})</span>
                <span>R$ ${(item.preco * item.quantidade).toFixed(2)}</span>
            `;
            checkoutSummaryList.appendChild(li);
        });
    }
    checkoutTotalElement.textContent = calcularTotalCarrinho().toFixed(2);
}

function exibirCamposPagamento() {
    const formaPagamento = formaPagamentoSelect.value;
    camposPagamentoDinamicosDiv.innerHTML = '';

    if (formaPagamento === 'cartao') {
        camposPagamentoDinamicosDiv.innerHTML = `
            <label for="numero-cartao">Número do Cartão:</label>
            <input type="text" id="numero-cartao" name="numero-cartao" placeholder="XXXX XXXX XXXX XXXX" required pattern="[0-9]{16}">

            <label for="nome-cartao">Nome no Cartão:</label>
            <input type="text" id="nome-cartao" name="nome-cartao" required>

            <label for="validade-cartao">Validade (MM/AA):</label>
            <input type="text" id="validade-cartao" name="validade-cartao" placeholder="MM/AA" required pattern="(0[1-9]|1[0-2])\/?([0-9]{2})">

            <label for="cvv-cartao">CVV:</label>
            <input type="text" id="cvv-cartao" name="cvv-cartao" placeholder="XXX" required pattern="[0-9]{3,4}">
        `;
    } else if (formaPagamento === 'boleto') {
        camposPagamentoDinamicosDiv.innerHTML = `
            <p>Seu boleto será gerado após a confirmação do pedido.</p>
            <p>Copie o código de barras ou use o QR Code para pagamento.</p>
            <label for="codigo-boleto">Código de Barras (simulado):</label>
            <input type="text" id="codigo-boleto" value="12345.67890 12345.678901 23456.789012 3 45678901234567" readonly>
        `;
    } else if (formaPagamento === 'pix') {
        camposPagamentoDinamicosDiv.innerHTML = `
            <p>Utilize o QR Code abaixo para realizar o pagamento via PIX.</p>
            <img src="./img/qrcode_pix.png" alt="QR Code PIX">
            <label for="chave-pix">Chave PIX (simulada):</label>
            <input type="text" id="chave-pix" value="sua.chave.pix@email.com" readonly>
        `;
    }
}


cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
    atualizarCarrinhoUI();
});

closeButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

finalizarCompraModalBtn.addEventListener('click', () => {
    if (carrinho.length > 0) {
        document.querySelector('.tab-link[data-tab="finalizar-compra"]').click();
        cartModal.style.display = 'none';
    } else {
        alert('Seu carrinho está vazio. Adicione produtos antes de finalizar a compra!');
    }
});

finalizarCompraPageBtn.addEventListener('click', () => {
    if (carrinho.length > 0) {
        document.querySelector('.tab-link[data-tab="finalizar-compra"]').click();
    } else {
        alert('Seu carrinho está vazio. Adicione produtos antes de finalizar a compra!');
    }
});

continuarComprandoBtn.addEventListener('click', () => {
    document.querySelector('.tab-link[data-tab="produtos"]').click();
});

formaPagamentoSelect.addEventListener('change', exibirCamposPagamento);

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio. Adicione produtos para finalizar o pedido.');
        return;
    }

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const endereco = document.getElementById('endereco').value;
    const cidade = document.getElementById('cidade').value;
    const estado = document.getElementById('estado').value;
    const cep = document.getElementById('cep').value;
    const formaPagamento = document.getElementById('forma-pagamento').value;
    const totalPedido = calcularTotalCarrinho().toFixed(2);

    let mensagem = `
        Pedido Confirmado!

        Cliente: ${nome}
        Email: ${email}
        Endereço: ${endereco}, ${cidade} - ${estado}, CEP: ${cep}
        Forma de Pagamento: ${formaPagamento}
        Total do Pedido: R$ ${totalPedido}

        Itens:
    `;
    carrinho.forEach(item => {
        mensagem += `- ${item.nome} (x${item.quantidade}) - R$ ${(item.preco * item.quantidade).toFixed(2)}\n`;
    });

    if (formaPagamento === 'cartao') {
        const numeroCartao = document.getElementById('numero-cartao').value;
        const nomeCartao = document.getElementById('nome-cartao').value;
        const validadeCartao = document.getElementById('validade-cartao').value;
        mensagem += `
        
        Detalhes do Cartão:
        Número: ${numeroCartao}
        Nome: ${nomeCartao}
        Validade: ${validadeCartao}
        `;
    } else if (formaPagamento === 'boleto') {
        mensagem += `
        
        Detalhes do Boleto:
        Código de Barras: 12345.67890 12345.678901 23456.789012 3 45678901234567
        `;
    } else if (formaPagamento === 'pix') {
        mensagem += `
        
        Detalhes do PIX:
        Chave pix: c1c685f7-427e-4c25-9698-503a07de9abb
        `;
    }

    alert(mensagem + "\n\nObrigado por sua compra!");

    carrinho = [];
    atualizarCarrinhoUI();
    atualizarCarrinhoPageUI();
    atualizarCheckoutUI();
    checkoutForm.reset();
    exibirCamposPagamento();
    document.querySelector('.tab-link[data-tab="home"]').click();
});


window.onload = () => {
    carregarProdutos();
    atualizarCarrinhoUI();
};