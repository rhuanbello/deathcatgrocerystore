const productsContainer = document.querySelectorAll('ul li')
const productsNames = document.querySelectorAll('ul li .description .container p')
const productsPrices = document.querySelectorAll('.price p:first-child')

// Esta array precisa (por enquanto) ter a mesma quantidade de produtos que existem na página inicial (30)
const listofProducts = [
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    },
    {
        name: '',
        inCart: 0,
        price: 3.68
    }
]

// Adiciona o titulo do produto à array listofProducts (depende de ter a mesma quantidade de titulos de produtos no html e de objetos na array listOfProducts)
productsNames.forEach((titulo, index) => listofProducts[index].name = titulo.innerText)

// Fazendo o carrinho de compras ter a quantidade de itens adicionados mesmo ao recarregar a página
const onLoadShoppingCart = () => {
    let quantity = localStorage.getItem('shoppingCart')
    quantity ? document.querySelector('.shopping-cart a span').textContent = quantity : ''

}

// Função de Adicionar Itens ao Carrinho (envia dados para o localStorage e para o shoppingCart)
const addToCart = (product) => {
    
    let quantity = localStorage.getItem('shoppingCart')
    quantity = parseInt(quantity)
    
    if (quantity){
        localStorage.setItem('shoppingCart', quantity + 1);
        document.querySelector('.shopping-cart a span').textContent = quantity + 1
    } else {
        localStorage.setItem('shoppingCart', 1);
        document.querySelector('.shopping-cart a span').textContent = 1
    }

    setItems(product);

}

// Adicionaod itens da Array para o localStorage
const setItems = (product) => {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems)

    console.log('My cart are', cartItems)

    if(cartItems !== null){
        if(cartItems[product.name] == undefined) {
            cartItems = {
                ...cartItems,
                [product.name]: product
            }
        }
        cartItems[product.name].inCart += 1;

    } else {
        product.inCart = 1
        cartItems = {
            [product.name]: product
        }
    }

    
    localStorage.setItem('productsInCart', JSON.stringify(cartItems));

}

// Capturando cada clique no container de produtos
productsContainer.forEach((product, index) => {
    

    product.addEventListener('click', () => {
        addToCart(listofProducts[index])
        
    })
})

// Executando a função de exibir a quantidade de itens no carrinho para ser sempre exibido (mesmo ao recarregar a página)
onLoadShoppingCart()