const cartelera = document.querySelector('.cartelera');
const muy_pronto = document.querySelector('.muy_pronto');
const comidas = document.querySelector('.comidas');
const ayuda = document.querySelector('.ayuda');
const cartelera_info = document.querySelector('.cartelera_info');
const muy_pronto_info = document.querySelector('.muy_pronto_info');
const user_icon = document.querySelector('.user_icon');
const user_info = document.querySelector('.usuario');
const cards_container = document.querySelector('.cards_container');


cartelera.addEventListener('click', open_cartelera);
muy_pronto.addEventListener('click', open_muy_pronto);
user_icon.addEventListener('click', open_user_info);



function open_cartelera() {
    console.log('click');
    user_info.classList.add('inactive');
    muy_pronto_info.classList.add('inactive');
    cartelera_info.classList.toggle('inactive');
}

function open_muy_pronto() {
    console.log('click');
    user_info.classList.add('inactive');
    cartelera_info.classList.add('inactive');
    muy_pronto_info.classList.toggle('inactive');
}

function open_user_info() {
    console.log('click');
    cartelera_info.classList.add('inactive');
    muy_pronto_info.classList.add('inactive');
    user_info.classList.toggle('inactive');

}

// https://doblaje.fandom.com/es/wiki/R%C3%A1pidos_y_furiosos_9
const productsList = [];

productsList.push({
    name: 'Rapidos y Furiosos 9',
    genero: 'Accion',
    image: './img_pelis/F9-Poster.webp',
    duracion: '2h 25m',
    año: '2022',
    calificacion: '8.5'
});

productsList.push({
    name: 'La Sirenita',
    genero: 'Infantil',
    image: './img_pelis/lanegra.jpg',
    duracion: '2h 0m',
    año: '2023',
    calificacion: '7.2'
});


productsList.push({
    name: 'Los Vengadores',
    genero: 'Accion',
    image: './img_pelis/losvengadores.webp',
    duracion: '3h 25m',
    año: '2018',
    calificacion: '9.5'
});


productsList.push({
    name: 'Indiana Jones',
    genero: 'Aventura',
    image: './img_pelis/indiana-jones.webp',
    duracion: '2h 10m',
    año: '2023',
    calificacion: '8.0'
});

productsList.push({
    name: 'El Padrino',
    genero: 'Accion y Drama',
    image: './img_pelis/elpadrino.webp',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});



function renderProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImage = document.createElement('img');
        productImage.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = product.name;

        const productName = document.createElement('p');
        productName.innerText = product.genero;

        const productQuali = document.createElement('p');
        productQuali.innerText = product.calificacion;

        const productDuration = document.createElement('p');
        productDuration.innerText = product.duracion;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        productInfoDiv.appendChild(productQuali);
        productInfoDiv.appendChild(productDuration);
    
        const productInfoFigure = document.createElement('figure');
    
        const productImagCart = document.createElement('i');
        productImagCart.setAttribute('class', 'fa-solid fa-heart fa-xl');
    
        productInfoFigure.appendChild(productImagCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
    
        cards_container.appendChild(productCard);
    
    
    }
}

renderProducts(productsList);