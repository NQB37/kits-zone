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
        <div className="carousel w-dvw h-dvh overflow-hidden mt-[-48px] relative">
            return (
            <div
                key={images[curIndex].id}
                className="item absolute top-0 bottom-0 left-0 right-0"
            >
                <img
                    src={images[curIndex].url}
                    alt={images[curIndex].alt}
                    className="h-full w-full object-cover"
                />
                <div className="content absolute top-[60%] left-[10%] w-3/12 text-center text-primary mx-4 my-4 drop-shadow-md">
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
                <div className="thumbnail absolute top-[60%] left-[40%] w-[1000px] h-60 flex gap-5 my-4 mx-4 items-center justify-center">
                    <button
                        onClick={handlePrevClick}
                        className="prevButton text-primary text-5xl drop-shadow-md font-thin hover:scale-125 transition-all ease-in-out duration-100"
                    >
                        &lt;
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
                        className="nextButton text-primary text-5xl drop-shadow-md font-thin hover:scale-125 transition-all ease-in-out duration-100"
                    >
                        &gt;
                    </button>
                </div>
            </div>
            );
        </div>
    );
};

export default Carousel;
