const productsContainer = document.querySelectorAll('ul li')
const productsNames = document.querySelectorAll('ul li .description .container p')
const productsPrices = document.querySelectorAll('.price p:first-child')

// Esta array precisa (por enquanto) ter a mesma quantidade de produtos que existem na página inicial (30)
const listofProducts = [
    {
        name: '',
        inCart: 0,
        price: 2.68
    },
    {
        name: '',
        inCart: 0,
        price: 2.57
    },
    {
        name: '',
        inCart: 0,
        price: 3.85
    },
    {
        name: '',
        inCart: 0,
        price: 3.98
    },
    {
        name: '',
        inCart: 0,
        price: 3.90
    },
    {
        name: '',
        inCart: 0,
        price: 5.78
    },
    {
        name: '',
        inCart: 0,
        price: 3.98
    },
    {
        name: '',
        inCart: 0,
        price: 5.88
    },
    {
        name: '',
        inCart: 0,
        price: 6.05
    },
    {
        name: '',
        inCart: 0,
        price: 5.58
    },
    {
        name: '',
        inCart: 0,
        price: 5.76
    },
    {
        name: '',
        inCart: 0,
        price: 5.67
    },
    {
        name: '',
        inCart: 0,
        price: 5.41
    },
    {
        name: '',
        inCart: 0,
        price: 5.56
    },
    {
        name: '',
        inCart: 0,
        price: 5.99
    },
    {
        name: '',
        inCart: 0,
        price: 5.81
    },
    {
        name: '',
        inCart: 0,
        price: 5.48
    },
    {
        name: '',
        inCart: 0,
        price: 5.12
    },
    {
        name: '',
        inCart: 0,
        price: 5.35
    },
    {
        name: '',
        inCart: 0,
        price: 5.76
    },
    {
        name: '',
        inCart: 0,
        price: 3.89
    },
    {
        name: '',
        inCart: 0,
        price: 3.52
    },
    {
        name: '',
        inCart: 0,
        price: 3.92
    },
    {
        name: '',
        inCart: 0,
        price: 3.45
    },
    {
        name: '',
        inCart: 0,
        price: 3.40
    },
    {
        name: '',
        inCart: 0,
        price: 3.35
    },
    {
        name: '',
        inCart: 0,
        price: 3.89
    },
    {
        name: '',
        inCart: 0,
        price: 3.96
    },
    {
        name: '',
        inCart: 0,
        price: 3.46
    },
    {
        name: '',
        inCart: 0,
        price: 3.39
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