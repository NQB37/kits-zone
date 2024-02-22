import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const images = [
    {
        id: 1,
        url: '../../../public/img/red.jpg',
        alt: 'bg-red',
    },
    {
        id: 2,
        url: '../../../public/img/yellow.jpg',
        alt: 'bg-yellow',
    },
    {
        id: 3,
        url: '../../../public/img/green.jpg',
        alt: 'bg-green',
    },
    {
        id: 4,
        url: '../../../public/img/blue.jpg',
        alt: 'bg-blue',
    },
    {
        id: 5,
        url: '../../../public/img/gray.jpg',
        alt: 'bg-grey',
    },
    {
        id: 6,
        url: '../../../public/img/black.jpg',
        alt: 'bg-black',
    },
    {
        id: 7,
        url: '../../../public/img/brown.jpg',
        alt: 'bg-brown',
    },
    {
        id: 8,
        url: '../../../public/img/cyan.jpg',
        alt: 'bg-cyan',
    },
    {
        id: 9,
        url: '../../../public/img/orange.jpg',
        alt: 'bg-orange',
    },
    {
        id: 10,
        url: '../../../public/img/purple.jpg',
        alt: 'bg-purple',
    },
];

const Home = () => {
    return (
        <div className="bg-background">
            <Header />
            <Carousel />
            <div className="w-full">
                <div className="langding_page-category_filter">
                    <h1 className="border-b border-b-1 border-primary text-primary text-2xl w-full text-center">
                        KITS BY ZONE
                    </h1>
                </div>
                <div className="langding_page-new_collection">
                    <h1>NEW COLLECTIONS</h1>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
