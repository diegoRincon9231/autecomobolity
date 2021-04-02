import Data from './data';   

const printProduct = (data) =>{
    let itemToPrint = data[0].foto;
    let htmlBigImage = '';
        htmlBigImage += '<figure>';
        htmlBigImage +=    `<img src="./src/images/${itemToPrint}"/>`; 
        htmlBigImage += '</figure>'; 
    document.querySelector('.bigImageProduct').insertAdjacentHTML('beforeend', htmlBigImage)
    document.getElementById('nameProduct').insertAdjacentHTML('beforeend', data[0].nombre)
    document.getElementById('price').insertAdjacentHTML('beforeend', '$' +data[0].precio)
    document.getElementById('reference').insertAdjacentHTML('beforeend', data[0].referencia)
    document.getElementById('selectorColor').insertAdjacentHTML('beforeend',`<li> <img src="./src/images/${itemToPrint}"/></li>`)
}
const printVitrine = (data) => {
    data.map( (product, index) =>{
        let html = '';
        html += `<li class="productItem" data-reference="${product.referencia}" data-index="${index} " data-id="listproduct">`
        html +=     '<a href="/producto.html">';
        html +=         '<div class="productItem__content">';
        html +=             `<figure class="productItem__content--imageProduct"> <span class="wishlistFlag"></span> <img src="./src/images/${product.foto}" /></figure>`;
        html +=             `<span class="productItem__content--nameProduct">${product.nombre}</span>`;
        html +=             `<span class="productItem__content--priceProduct">$ ${product.precio}</span>`;
        html +=         '</div>';
        html +=         `<button class="add-product-cart" data-id="${index}">AGREGAR AL CARRITO</button>`;
        html +=     '</a>'
        html += '</li>';
        document.querySelector('.listProducts').insertAdjacentHTML('beforeend',html)
    })
    initSlider();
}
const initSlider = () => {
    let slider = tns({
        container: '#shelfProduct',
        items: 4,
        slideBy: 'page',
        autoplay: true,
        dots:false,
        navAsThumbnails:false
    });
}
const Product = () => {
    printProduct(Data)
    printVitrine(Data);
}
export default Product;