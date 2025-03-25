const produtos = [
    {
        id: 1,
        nome: "Camiseta Milan",
        descricao: "Essa camiseta é perfeita para quem quer mostrar sua paixão pela equipe com estilo e conforto. Confeccionada em material de alta qualidade, ela oferece um ajuste ideal e um design moderno com o escudo do time. Ideal para torcer com orgulho!",
        preco: "R$ 99,90",
        imagem: "img/camiseta-de-time.jpg"
    },

    {
        id: 2,
        nome: "Air Max 90",
        descricao: "O Tênis Air Max 90 une conforto e estilo icônico. Com a famosa tecnologia de amortecimento Air e design atemporal, ele garante uma caminhada leve e cheia de atitude, ideal para quem busca estilo e desempenho no dia a dia.",
        preco: "R$ 599,90",
        imagem: "img/tenis.jpg"
    },

    {
        id: 3,
        nome: "Calça Lacoste",
        descricao: "A calça Lacoste oferece conforto e sofisticação com seu design elegante e ajuste perfeito. Feita com materiais de alta qualidade, é ideal para quem valoriza praticidade sem abrir mão do estilo. Perfeita para o look casual-chic.",
        preco: "R$ 199,90",
        imagem: "img/calca.png"
    },

    {
        id: 4,
        nome: "Conjunto Sergio Tacchini",
        descricao: "O conjunto Sergio Tacchini é sinônimo de estilo e performance. Com design moderno e tecido de qualidade, oferece conforto e liberdade de movimento, seja para atividades esportivas ou para um visual casual e descolado.",
        preco: "R$ 299,90",
        imagem: "img/conjunto.jpeg"
    }
]

function exibir() {
const section = document.querySelector('.section')
produtos.forEach(produto => {
    const card = document.createElement('div')
    card.className = 'card-produto';
    card.innerHTML = `
    <img src= "${produto.imagem}" alt="${produto.nome}">
    <h2>${produto.nome}</h2>
    <p>${produto.descricao}</p>
    <span>${produto.preco}</span>`;

    section.appendChild(card);
})
}

exibir()