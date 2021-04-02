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
        html += `<li class="productItem" data-reference="${product.referencia}" data-index="${index} " data-id="listproduct">`
        html +=     '<a href="/producto.html">';
        html +=         '<div class="productItem__content">';
        html +=             `<figure class="productItem__content--imageProduct"> <span class="wishlistFlag"></span> <img src="./src/images/${product.foto}" /></figure>`;
        html +=             `<span class="productItem__content--nameProduct">${product.nombre}</span>`;
        html +=             `<span class="productItem__content--priceProduct">$ ${product.precio}</span>`;
        html +=         '</div>';
        html +=     '</a>'
        html += '</li>';

    document.getElementById('shelfProduct').insertAdjacentHTML('beforeend', html);
}
const saveDataProd = () => {
    console.log('esto es saveData prod')
    document.addEventListener('click', (e) => {
        console.log(e.target)
        if(e.target.dataset.id == 'listproduct'){
            console.log(e)
        }
    })
}
const Category = () =>{
    getProducts(Data);
    saveDataProd();
}
export default Category;