import Data from './data';
const getProducts = (data) =>{
    let counter = 0;
    data.map( (i, e) => {
        renderProduct(i,e)
        counter ++;
    })
    document.getElementById('qtyItemsCat').insertAdjacentHTML('afterBegin','(' + counter + ')')
}
const renderProduct = (product, index) => {
    let html = '';
        html += `<li class="productItem" data-reference="${product.referencia}"  data-id="listproduct">`
        html +=     `<a href="/producto.html" data-index="${index}" class="linkItem"> `;
        html +=         '<div class="productItem__content">';
        html +=             `<figure class="productItem__content--imageProduct"> <span class="wishlistFlag"></span> <img src="./src/images/${product.foto}" /></figure>`;
        html +=             `<span class="productItem__content--nameProduct">${product.nombre}</span>`;
        html +=             `<span class="productItem__content--priceProduct">$ ${product.precio}</span>`;
        html +=         '</div>';
        html +=         `<button class="add-product-cart" data-id="${index}">AGREGAR AL CARRITO</button>`;
        html +=     '</a>'
        html += '</li>';

    document.getElementById('shelfProduct').insertAdjacentHTML('beforeend', html);
}
const saveDataProd = () => {
    document.getElementById('shelfProduct').addEventListener('click', (e) => {

        if(e.target && e.target.matches('a.linkItem')){
            let idProduct = e.target.dataset.index;
            localStorage.setItem('vtexProductId', idProduct)
        }
    })
}
const Category = () =>{
    getProducts(Data);
    saveDataProd();
}
export default Category;