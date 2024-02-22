/* eslint-disable react/prop-types */
import { useState } from 'react';

const images = [
    {
        id: 1,
        url: '../../../public/img/red.jpg',
        alt: 'bg-red',
        title: 'RED BACKGROUND',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit`. Corrupti est quo odit harum unde autem, cum tempora corporis quae? Alias!',
    },
    {
        id: 2,
        url: '../../../public/img/yellow.jpg',
        alt: 'bg-yellow',
        title: 'YELLOW BACKGROUND',
        des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga ad officia debitis corporis libero vitae.',
    },
    {
        id: 3,
        url: '../../../public/img/green.jpg',
        alt: 'bg-GREEN',
        title: 'GREEN BACKGROUND',
        des: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur voluptas blanditiis inventore. Pariatur, enim distinctio.',
    },
    {
        id: 4,
        url: '../../../public/img/blue.jpg',
        alt: 'bg-blue',
        title: 'BLUE BACKGROUND',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempora asperiores ut ipsam exercitationem deserunt dolores quaerat consequuntur.',
    },
    {
        id: 5,
        url: '../../../public/img/gray.jpg',
        alt: 'bg-grey',
        title: 'GREY BACKGROUND',
        des: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quam id accusamus unde nostrum consequatur voluptatum consectetur?',
    },
];

const Carousel = () => {
    const [curIndex, setIndex] = useState(0);

    const handlePrevClick = () => {
        const newIndex = curIndex === 0 ? images.length - 1 : curIndex - 1;
        setIndex(newIndex);
    };

    const handleNextClick = () => {
        const newIndex = curIndex === images.length - 1 ? 0 : curIndex + 1;
        setIndex(newIndex);
    };

    return (
        <div className="carousel relative w-full h-dvh overflow-hidden mt-[-48px]">
            <div key={images[curIndex].id} className="item">
                <img
                    src={images[curIndex].url}
                    alt={images[curIndex].alt}
                    className="h-full w-full object-cover"
                />
                <div className="grid grid-cols-12 w-[80%] gap-6 absolute top-[60%] left-1/2 -translate-x-1/2">
                    <div className="content col-span-4 text-center text-primary drop-shadow-md">
                        <div className="title text-6xl font-bold">
                            {images[curIndex].title}
                        </div>
                        <div className="des my-4">{images[curIndex].des}</div>
                        <div className="showMoreButton">
                            <button className="w-[150px] h-[30px] bg-primary text-white rounded-md">
                                READ MORE
                            </button>
                        </div>
                    </div>
                    <div className="thumbnail col-span-8 w-[1000px] flex gap-5 items-center justify-center">
                        <button
                            onClick={handlePrevClick}
                            className="prevButton text-primary text-4xl drop-shadow-md  hover:scale-125 transition-all ease-in-out duration-200"
                        >
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        {images.map((image) => {
                            return (
                                <div
                                    key={image.id}
                                    className="thumnail-item w-40 h-60 border-2 border-primary drop-shadow-md rounded-md overflow-hidden"
                                >
                                    <img
                                        src={image.url}
                                        alt={image.alt}
                                        className="h-full w-full object-cover rounded-md"
                                    />
                                </div>
                            );
                        })}
                        <button
                            onClick={handleNextClick}
                            className="nextButton text-primary text-4xl drop-shadow-md  hover:scale-125 transition-all ease-in-out duration-100"
                        >
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
