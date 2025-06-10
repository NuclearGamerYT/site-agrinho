const produtos = [
    {
        id: 1,
        nome: "Inseticida Agrícola Premium (1L)",
        descricao: "Potente inseticida de amplo espectro para grandes culturas. Ação rápida e eficaz.",
        preco: 189.90,
        // Manter a URL original e controlar o tamanho via CSS
        imagem: "https://villaverdeagro.com.br/wp-content/webp-express/webp-images/uploads/2023/10/36.jpg.webp"
    },
    {
        id: 2,
        nome: "Defensivo para Hortaliças Orgânico (500ml)",
        descricao: "Solução biológica para proteger sua horta de pragas sem agrotóxicos.",
        preco: 75.50,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_923189-MLU72603582869_102023-O.webp"
    },
    {
        id: 3,
        nome: "Eliminador de Mosquitos Urbanos (Spray 400ml)",
        descricao: "Fórmula de ação rápida para ambientes internos, sem cheiro forte.",
        preco: 35.90,
        imagem: "https://http2.mlstatic.com/D_NQ_NP_605312-MLB79136161204_092024-O-12-multi-inseticida-pernilongos-mosquito-dengue-barata-400ml.webp"
    },
    {
        id: 4,
        nome: "Gel Iscas para Baratas (30g)",
        descricao: "Atrai e elimina colônias de baratas em cozinhas e áreas úmidas.",
        preco: 29.90,
        imagem: "https://images.unsplash.com/photo-1621808027581-22ac6d252445?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjYxNTR8MHwxfHNlYXJjaHwyMHx8aG91c2Vob2xkJTIwaW5zZWN0aWNpZGV8ZW58MHx8fHwxNzE3OTE0NTMxfDA&ixlib=rb-4.0.3&q=80&w=400"
    },
    {
        id: 5,
        nome: "Pulverizador Costal Agrícola (20L)",
        descricao: "Equipamento robusto para aplicação de defensivos em grandes áreas.",
        preco: 450.00,
        imagem: "https://images.unsplash.com/photo-1617478051259-7f3c4d5b2e53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjYxNTR8MHwxfHNlYXJjaHwxOHx8YWdyaWN1bHR1cmUlMjBwdWx2ZXJpemVyfGVufDB8fHx8MTcxNzkxNDgwN3ww&lib=rb-4.0.3&q=80&w=400"
    },
    {
        id: 6,
        nome: "Repelente Eletrônico de Roedores (Unidade)",
        descricao: "Emite ondas ultrassônicas para afastar ratos e camundongos.",
        preco: 89.90,
        imagem: "https://images.unsplash.com/photo-1606768662998-323e2a297921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjYxNTR8MHwxfHNlYXJjaHw3fHxwZXN0JTIwY29udHJvbCUyMGVsZWN0cm9uaWN8ZW58MHx8fHwxNzE3OTE1MTExfDA&lib=rb-4.0.3&q=80&w=400"
    },
    {
        id: 7,
        nome: "Kit Descupinização Profissional (Casa e Jardim)",
        descricao: "Conjunto completo com produtos para combater cupins em madeiras e solo.",
        preco: 320.00,
        imagem: "https://images.unsplash.com/photo-1549495066-e0691238b707?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjYxNTR8MHwxfHNlYXJjaHw3fHxwZXN0JTIwY29udHJvbCUyMHNldHxlbnwwfHx8fDE3MTc5MTQxNDB8MA&lib=rb-4.0.3&q=80&w=400"
    },
    {
        id: 8,
        nome: "Armadilha Adesiva para Insetos (10 Unidades)",
        descricao: "Captura moscas, mosquitos e outros insetos voadores. Não tóxico.",
        preco: 49.90,
        imagem: "https://images.unsplash.com/photo-1627885002013-44671e309f44?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjYxNTR8MHwxfHNlYXJjaHwxNXx8aW5zZWN0aWNpZGUlMjBwYWNrYWdpbmd8ZW58MHx8fHwxNzE3OTE0MDc5fDA&lib=rb-4.0.3&q=80&w=400"
    },
    {
        id: 9,
        nome: "Herbicida Seletivo para Gramados (1L)",
        descricao: "Elimina ervas daninhas sem prejudicar seu gramado ornamental.",
        preco: 95.00,
        imagem: "https://images.unsplash.com/photo-1517404499097-f58c495908b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjYxNTR8MHwxfHNlYXJjaHw5fHxoZXJiaWNpZGV8ZW58MHx8fHwxNzE3OTE0ODIxfDA&lib=rb-4.0.3&q=80&w=400"
    },
    {
        id: 10,
        nome: "Luvas de Proteção para Manuseio (Par)",
        descricao: "Luvas resistentes e seguras para aplicação de defensivos e químicos.",
        preco: 25.00,
        imagem: "https://images.unsplash.com/photo-1587572793100-349f2b847849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NjYxNTR8MHwxfHNlYXJjaHwyMHx8Y3JvcCUyMHByb3RlY3Rpb258ZW58MHx8fHwxNzE3OTEzMzIzfDA&lib=rb-4.0.3&q=80&w=400"
    }
];

let carrinho = [];

// Elementos do DOM
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

// --- Event Listeners para a Navegação por Abas ---
document.querySelectorAll('.tab-link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault(); // Impede o comportamento padrão do link
        const tab = link.getAttribute('data-tab'); // Obtém o 'data-tab' do link clicado

        // Esconde todas as seções de abas
        document.querySelectorAll('.tab-section').forEach(section => {
            section.style.display = 'none';
        });
        // Remove a classe 'active' de todos os links de aba
        document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));

        // Mostra a seção de aba correspondente e adiciona a classe 'active' ao link
        document.getElementById(tab).style.display = 'block';
        link.classList.add('active');

        // Atualiza a UI do carrinho/finalizar compra se a aba correspondente for ativada
        if (tab === 'carrinho') {
            atualizarCarrinhoPageUI();
        } else if (tab === 'finalizar-compra') {
            atualizarCheckoutUI();
            exibirCamposPagamento(); // Garante que os campos de pagamento sejam exibidos
        } else if (tab === 'produtos') {
            carregarProdutos(); // Garante que os produtos sejam recarregados ao acessar a aba
        }
    });
});

// --- Funções de Manipulação de Produtos e Carrinho ---

/**
 * Carrega e exibe os produtos na página.
 */
function carregarProdutos() {
    const container = document.getElementById('product-list');
    container.innerHTML = ''; // Limpa o container antes de adicionar novos produtos

    // Itera sobre a lista de produtos e cria os elementos HTML
    produtos.forEach(p => {
        const div = document.createElement('div');
        div.className = 'product-item'; 
        div.innerHTML = `
            <img src="${p.imagem}" alt="${p.nome}">
            <h3>${p.nome}</h3>
            <p>${p.descricao}</p>
            <span class="price">R$ ${p.preco.toFixed(2)}</span>
            <button class="btn add-to-cart-btn" data-id="${p.id}">Adicionar ao Carrinho</button>
        `;
        container.appendChild(div);
    });

    // Adiciona event listeners aos botões "Adicionar ao Carrinho"
    document.querySelectorAll('.product-item .add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            adicionarAoCarrinho(productId);
        });
    });
}

/**
 * Adiciona um produto ao carrinho ou aumenta sua quantidade se já existir.
 * @param {number} productId - O ID do produto a ser adicionado.
 */
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
    atualizarCarrinhoUI(); // Atualiza o ícone do carrinho no header e o modal
    if (document.getElementById('carrinho').style.display === 'block') {
        atualizarCarrinhoPageUI(); // Se estiver na página do carrinho, atualiza também
    }
    alert('Produto adicionado ao carrinho!');
}

/**
 * Remove um produto do carrinho.
 * @param {number} productId - O ID do produto a ser removido.
 */
function removerDoCarrinho(productId) {
    // Encontra o índice do produto no carrinho
    const index = carrinho.findIndex(item => item.id === productId);

    if (index !== -1) {
        // Se a quantidade for maior que 1, apenas decrementa
        if (carrinho[index].quantidade > 1) {
            carrinho[index].quantidade--;
        } else {
            // Se a quantidade for 1, remove o item completamente
            carrinho.splice(index, 1);
        }
    }
    
    atualizarCarrinhoUI();
    if (document.getElementById('carrinho').style.display === 'block') {
        atualizarCarrinhoPageUI();
    }
    if (document.getElementById('finalizar-compra').style.display === 'block') {
        atualizarCheckoutUI();
        exibirCamposPagamento(); // Reexibir campos caso o carrinho fique vazio
    }
}


/**
 * Calcula o valor total dos itens no carrinho.
 * @returns {number} O valor total do carrinho.
 */
function calcularTotalCarrinho() {
    return carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
}

/**
 * Atualiza a interface do usuário do ícone do carrinho no header e do modal do carrinho.
 */
function atualizarCarrinhoUI() {
    // Atualiza a contagem no ícone do carrinho
    cartCount.textContent = carrinho.reduce((total, item) => total + item.quantidade, 0);

    cartItemsList.innerHTML = ''; // Limpa a lista do modal
    
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

    // Adiciona event listeners aos botões de remover no modal
    document.querySelectorAll('#cartItemsList .btn-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            removerDoCarrinho(productId);
        });
    });
}

/**
 * Atualiza a interface do usuário da página do carrinho.
 */
function atualizarCarrinhoPageUI() {
    cartPageList.innerHTML = ''; // Limpa a lista da página do carrinho
    
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

    // Adiciona event listeners aos botões de remover na página do carrinho
    document.querySelectorAll('#cartPageList .btn-remove').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.dataset.id);
            removerDoCarrinho(productId);
        });
    });
}

/**
 * Atualiza a interface do usuário da seção de finalizar compra.
 */
function atualizarCheckoutUI() {
    checkoutSummaryList.innerHTML = ''; // Limpa o resumo do pedido
    
    if (carrinho.length === 0) {
        checkoutSummaryList.innerHTML = '<li>Seu carrinho está vazio. Por favor, adicione produtos para finalizar a compra.</li>';
        checkoutForm.querySelector('.checkout-confirm-btn').disabled = true;
        formaPagamentoSelect.disabled = true; // Desabilita a seleção de pagamento
    } else {
        checkoutForm.querySelector('.checkout-confirm-btn').disabled = false;
        formaPagamentoSelect.disabled = false; // Habilita a seleção de pagamento
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

/**
 * Exibe os campos de pagamento dinamicamente com base na forma de pagamento selecionada.
 */
function exibirCamposPagamento() {
    const formaPagamento = formaPagamentoSelect.value;
    camposPagamentoDinamicosDiv.innerHTML = ''; // Limpa os campos anteriores

    if (formaPagamento === 'cartao') {
        camposPagamentoDinamicosDiv.innerHTML = `
            <label for="numero-cartao">Número do Cartão:</label>
            <input type="text" id="numero-cartao" name="numero-cartao" placeholder="XXXX XXXX XXXX XXXX" required pattern="[0-9]{16}">

            <label for="nome-cartao">Nome no Cartão:</label>
            <input type="text" id="nome-cartao" name="nome-cartao" required>

            <label for="validade-cartao">Validade (MM/AA):</label>
            <input type="text" id="validade-cartao" name="validade-cartao" placeholder="MM/AA" required pattern="(0[1-9]|1[0-2])\\/?([0-9]{2})">

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
            <img src="https://via.placeholder.com/150?text=QR+Code+PIX" alt="QR Code PIX" style="max-width: 150px; height: auto; margin: 10px 0;">
            <label for="chave-pix">Chave PIX (simulada):</label>
            <input type="text" id="chave-pix" value="sua.chave.pix@email.com" readonly>
        `;
    }
}

// --- Event Listeners Globais ---

// Abre o modal do carrinho quando o ícone é clicado
cartIcon.addEventListener('click', () => {
    cartModal.style.display = 'flex';
    atualizarCarrinhoUI();
});

// Fecha o modal do carrinho quando o botão de fechar é clicado
closeButton.addEventListener('click', () => {
    cartModal.style.display = 'none';
});

// Fecha o modal do carrinho quando o usuário clica fora dele
window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
});

// Botão "Finalizar Compra" do modal do carrinho
finalizarCompraModalBtn.addEventListener('click', () => {
    cartModal.style.display = 'none'; // Fecha o modal
    // Simula o clique na aba "Finalizar Compra"
    document.querySelector('.tab-link[data-tab="finalizar-compra"]').click();
});

// Botão "Finalizar Compra" da página do carrinho
finalizarCompraPageBtn.addEventListener('click', () => {
    document.querySelector('.tab-link[data-tab="finalizar-compra"]').click();
});

// Botão "Continuar Comprando" da página do carrinho
continuarComprandoBtn.addEventListener('click', () => {
    document.querySelector('.tab-link[data-tab="produtos"]').click();
});

// Event listener para a mudança na forma de pagamento
formaPagamentoSelect.addEventListener('change', exibirCamposPagamento);

// Event listener para o envio do formulário de checkout
checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio. Adicione produtos antes de finalizar a compra.');
        return;
    }

    // Coletar dados do formulário
    const formData = new FormData(checkoutForm);
    const pedido = {
        cliente: {
            nome: formData.get('nome'),
            email: formData.get('email'),
            endereco: formData.get('endereco'),
            cidade: formData.get('cidade'),
            estado: formData.get('estado'),
            cep: formData.get('cep')
        },
        itens: carrinho,
        total: calcularTotalCarrinho(),
        formaPagamento: formData.get('forma-pagamento')
    };

    // Aqui você enviaria os dados do pedido para um backend
    console.log('Pedido Confirmado:', pedido);
    alert('Pedido realizado com sucesso! Em breve você receberá um e-mail de confirmação.');

    // Limpar o carrinho e a UI após o pedido
    carrinho = [];
    atualizarCarrinhoUI();
    atualizarCarrinhoPageUI();
    atualizarCheckoutUI();
    checkoutForm.reset(); // Limpa o formulário
    exibirCamposPagamento(); // Garante que os campos de pagamento sejam resetados/escondidos

    // Redireciona para a página inicial (ou uma página de confirmação)
    document.querySelector('.tab-link[data-tab="home"]').click();
});


// Event listener para o formulário de contato
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
    e.target.reset(); // Limpa o formulário de contato
});


// Inicializa a exibição dos produtos quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    carregarProdutos();
    atualizarCarrinhoUI(); // Garante que a contagem do carrinho esteja correta ao carregar
    // Opcional: ativa a primeira aba ao carregar a página
    document.querySelector('.tab-link.active').click(); 
});