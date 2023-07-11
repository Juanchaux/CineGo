const cartelera = document.querySelector('.cartelera');
const muy_pronto = document.querySelector('.muy_pronto');
const comidas = document.querySelector('.comidas');
const ayuda = document.querySelector('.ayuda');
const cartelera_info = document.querySelector('.cartelera_info');
const muy_pronto_info = document.querySelector('.muy_pronto_info');
const user_icon = document.querySelector('.user_icon');
const user_info = document.querySelector('.usuario');
const cards_container = document.querySelector('.cards_container');
const ham_menu = document.querySelector('.fa-bars');
const menu = document.querySelector('.ham');


// cartelera.addEventListener('click', open_cartelera);
// muy_pronto.addEventListener('click', open_muy_pronto);
user_icon.addEventListener('click', open_user_info);
ham_menu.addEventListener('click', open_menu_ham);



// function open_cartelera() {
//     console.log('click');
//     menu.classList.add('inactive');
//     user_info.classList.add('inactive');
//     muy_pronto_info.classList.add('inactive');
//     cartelera_info.classList.toggle('inactive');
// }

// function open_muy_pronto() {
//     console.log('click');
//     menu.classList.add('inactive');
//     user_info.classList.add('inactive');
//     cartelera_info.classList.add('inactive');
//     muy_pronto_info.classList.toggle('inactive');
// }

function open_user_info() {
    console.log('click');
    menu.classList.add('inactive');
    cartelera_info.classList.add('inactive');
    muy_pronto_info.classList.add('inactive');
    user_info.classList.toggle('inactive');

}

function open_menu_ham() {
    console.log('click');
    cartelera_info.classList.add('inactive');
    muy_pronto_info.classList.add('inactive');
    user_info.classList.add('inactive');
    menu.classList.toggle('inactive');
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
    image: './img_pelis/sirenita.jpg',
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

productsList.push({
    name: 'Alien',
    genero: 'Accion y Ficcion',
    image: './img_pelis/alien.jpeg',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});

productsList.push({
    name: 'El Perfecto Asesino',
    genero: 'Accion y Drama',
    image: './img_pelis/asesino.webp',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});

productsList.push({
    name: 'Batman',
    genero: 'Accion y Drama',
    image: './img_pelis/batman.jpeg',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});

productsList.push({
    name: 'Codigo De La Discordia',
    genero: 'Drama y ciencia',
    image: './img_pelis/codigodiscordia.png',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});

productsList.push({
    name: 'Encanto',
    genero: 'Infantil',
    image: './img_pelis/encanto.jpeg',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});

productsList.push({
    name: 'Codigo enigma',
    genero: 'Accion y Drama',
    image: './img_pelis/enigma.jpeg',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});

productsList.push({
    name: 'Jhon Wick',
    genero: 'Accion y Drama',
    image: './img_pelis/jhon.webp',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});

productsList.push({
    name: 'Londres Bajo Fuego',
    genero: 'Accion y Drama',
    image: './img_pelis/londres.webp',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});

productsList.push({
    name: 'Malefica',
    genero: 'Infantil',
    image: './img_pelis/malefica.jpeg',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});

productsList.push({
    name: 'Mario Bros',
    genero: 'Infantil',
    image: './img_pelis/mario.webp',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});

productsList.push({
    name: 'Los Minions',
    genero: 'Infantil',
    image: './img_pelis/minions.jpeg',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});

productsList.push({
    name: 'Spiderman',
    genero: 'Accion y Drama',
    image: './img_pelis/spiderman.avif',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});

productsList.push({
    name: 'Star Wars',
    genero: 'Ciencia Ficcion',
    image: './img_pelis/starwars.jpeg',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});

productsList.push({
    name: 'Tiana y El Sapo',
    genero: 'Infantil',
    image: './img_pelis/tiana.jpeg',
    duracion: '2h 55m',
    año: '1972',
    calificacion: '9.0'
});

productsList.push({
    name: 'El Gran Truco',
    genero: 'Drama',
    image: './img_pelis/truco.webp',
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
        productImagCart.setAttribute('class', 'fa-solid fa-heart fa-xl ');
        productImagCart.addEventListener('click', likeProduct);
        function likeProduct(){
            if(productImagCart.classList.contains('like-active')){

                productImagCart.classList.remove('like-active');

            } else
                productImagCart.classList.add('like-active');
        }
        
        productInfoFigure.appendChild(productImagCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImage);
        productCard.appendChild(productInfo);
    
        cards_container.appendChild(productCard);
    
    
    }
}

renderProducts(productsList);