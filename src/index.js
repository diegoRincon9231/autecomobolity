import './css/style.scss';
import Home from './modules/home';
import Category from './modules/category';
import Product from './modules/producto'

const loader = () => {
    document.querySelector('.blackbox').classList.add('hide')
}
const openMobileMenu = () => {
    document.querySelector('.header__content--top__leftContent--mobileMenu').addEventListener('click', () => {
        document.querySelector('.header__navMobile').classList.toggle('activeMobile')
    })
}
const openFooterLinks = () => {
    document.querySelector('.footer__content--links').addEventListener('click', (e) => {

        if(e.target && e.target.matches('h3')){
            e.target.classList.toggle('mobileOpen')
        }
    })
}
document.addEventListener('DOMContentLoaded', (e) => {
    let screenWidth = window.innerWidth ;
    if(screenWidth <= '767'){
        openMobileMenu();
        openFooterLinks();
    }
    if(document.querySelector('body').classList.contains('home')){
        Home();
        AOS.init();
    }
    if(document.querySelector('body').classList.contains('category')){
        Category();
    }
    if(document.querySelector('body').classList.contains('product')){
        Product();
    }
})

window.addEventListener('load', (e) => {
    setTimeout(() =>{
        loader();
    }, 1500)
}) 