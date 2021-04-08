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
}

export default Home