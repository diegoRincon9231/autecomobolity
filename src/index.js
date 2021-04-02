import './css/style.scss';
import Home from './modules/home';
import Category from './modules/category';
import Product from './modules/producto'

document.addEventListener('DOMContentLoaded', (e) => {
    if(document.querySelector('body').classList.contains('home')){
        Home();
    }
    if(document.querySelector('body').classList.contains('category')){
        Category();
    }
    if(document.querySelector('body').classList.contains('product')){
        Product();
    }
})