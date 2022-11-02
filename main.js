const navEmail = document.querySelector('.navbar-email');
const hamIcon = document.querySelector('.menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart');
const productList = [];
const cardsContainer = document.querySelector('.cards-container');
const iconCloseProduct = document.querySelector('.product-detail-close');


//dando estilos a los menus
navEmail.addEventListener('click',function(){
    document.querySelector('#shopping-cart').classList.add('inactive');
    document.querySelector('#product-detail').classList.add('inactive');
    const menu =  document.querySelector('.desktop-menu');
        menu.classList.toggle('inactive');
});

hamIcon.addEventListener('click',function(){
    document.querySelector('#shopping-cart').classList.add('inactive');
    document.querySelector('#product-detail').classList.add('inactive');
    const mobilemenu = document.querySelector('.mobile-menu');
        mobilemenu.classList.toggle('inactive');
});

carritoIcon.addEventListener('click', function(){
    document.querySelector('.desktop-menu').classList.add('inactive');
    document.querySelector('.mobile-menu').classList.add('inactive');
    document.querySelector('#product-detail').classList.add('inactive');
    const carritoAside = document.querySelector('#shopping-cart');
        carritoAside.classList.toggle('inactive');
});

iconCloseProduct.addEventListener('click',function(){
    document.querySelector('.desktop-menu').classList.add('inactive');
    document.querySelector('#shopping-cart').classList.add('inactive');
    document.querySelector('#product-detail').classList.add('inactive');
});


//obteniendo los productos

productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});

productList.push({
    name: '9mm',
    price: 1200,
    image: 'https://st2.depositphotos.com/1007298/8847/i/450/depositphotos_88472882-stock-photo-the-black-handgun.jpg'
});

productList.push({
    name: 'minigun',
    price: 5000,
    image: 'https://www.seaforces.org/wpnsys/SURFACE/M134-minigun_DAT/M134-minigun-02.jpg'
});

//agregando los productos al DOM
/*<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>*/

function renderProducts(arr){
for (product of arr){
const productCard = document.createElement('div');
productCard.classList.add('product-card');

const img = document.createElement('img');
img.setAttribute('src',product.image);
img.addEventListener('click',function(){
    document.querySelector('#shopping-cart').classList.add('inactive');
    document.querySelector('.desktop-menu').classList.add('inactive');
    document.querySelector('#product-detail').classList.remove('inactive');
});

const productInfo = document.createElement('div');
productInfo.classList.add('product-info');

const voidcontainer = document.createElement('div');

const productprice = document.createElement('p');
productprice.innerText = '$' + product.price;
const productname = document.createElement('p');
productname.innerText = product.name;

voidcontainer.appendChild(productprice);
voidcontainer.appendChild(productname);


const productfigure = document.createElement('figure');
const productImg = document.createElement('img');
productImg.setAttribute('src','./icons/bt_add_to_cart.svg');

productfigure.appendChild(productImg);

productInfo.appendChild(voidcontainer);
productInfo.appendChild(productfigure);

productCard.appendChild(img);
productCard.appendChild(productInfo);

cardsContainer.appendChild(productCard);
}
}

renderProducts(productList);

