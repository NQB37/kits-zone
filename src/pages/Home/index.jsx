import Header from '~/components/Header/Header';
import Carousel from './MainCarousel/Carousel';
import Footer from '~/components/Footer/Footer';

// const images = [
//     {
//         id: 1,
//         url: '/img/red.jpg',
//         alt: 'bg-red',
//     },
//     {
//         id: 2,
//         url: '/img/yellow.jpg',
//         alt: 'bg-yellow',
//     },
//     {
//         id: 3,
//         url: '/img/green.jpg',
//         alt: 'bg-green',
//     },
//     {
//         id: 4,
//         url: '/img/blue.jpg',
//         alt: 'bg-blue',
//     },
//     {
//         id: 5,
//         url: '/img/gray.jpg',
//         alt: 'bg-grey',
//     },
//     {
//         id: 6,
//         url: '/img/black.jpg',
//         alt: 'bg-black',
//     },
//     {
//         id: 7,
//         url: '/img/brown.jpg',
//         alt: 'bg-brown',
//     },
//     {
//         id: 8,
//         url: '/img/cyan.jpg',
//         alt: 'bg-cyan',
//     },
//     {
//         id: 9,
//         url: '/img/orange.jpg',
//         alt: 'bg-orange',
//     },
//     {
//         id: 10,
//         url: '/img/purple.jpg',
//         alt: 'bg-purple',
//     },
// ];

const Home = () => {
    return (
        <div className="bg-background">
            <Header />
            <Carousel />
            <div className="w-[90%] h-[800px] mx-auto">
                <div className="langding_page-category_filter relative pt-6">
                    <h1 className=" border-primary text-primary text-2xl w-full text-center pb-2">
                        KITS BY ZONE
                    </h1>
                    <div className="ct-line">
                        <div className="w-full h-[1px] bg-primary"></div>
                        <div className="w-2 h-2 rotate-45 bg-primary absolute top-[86%] left-[50%] -translate-x-1"></div>
                    </div>
                </div>
                <div className="langding_page-new_collection relative">
                    <h1 className="border-b border-b-1 border-primary text-primary text-2xl w-full text-center pb-2">
                        NEW COLLECTIONS
                    </h1>
                    <div className="w-2 h-2 rotate-45 bg-primary absolute top-[86%] left-[50%] -translate-x-1"></div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
