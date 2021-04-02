const mainSlide =  () =>{
    let slider = tns({
        container: '.contentSlide',
        items: 1,
        slideBy: 'page',
        autoplay: true
    });
}




const Home = () => {
    mainSlide();
    console.log('home init')
    let screenWidth = window.innerWidth ;
    if(screenWidth <= '767'){
        slideMmebersMobile();
    }else{
        
    }
}

export default Home