import React from 'react';
import img1 from '../../../assets/images/homeCarousel/1.png';
import img2 from '../../../assets/images/homeCarousel/2.png';
import img3 from '../../../assets/images/homeCarousel/3.png';
import BannerItem from './BannerItem';

const bannerData = [
    {
        image: img1,
        prev: 4,
        id: 1,
        title: 'Affordable Price for Course',
        description: 'Buy our course with minimum price.',
        next: 2
    },
    {
        image: img2,
        prev: 1,
        id: 2,
        title: 'Affordable Price for Course',
        description: 'Buy our course with minimum price.',
        next: 3
    },
    {
        image: img3,
        prev: 2,
        id: 3,
        title: 'Affordable Price for Course',
        description: 'Buy our course with minimum price.',
        next: 1
    },
]

const Banner = () => {
    return (
        <div className="carousel w-full pb-10">
            {
                bannerData.map(slide => <BannerItem
                    key={slide.id}
                    slide={slide}
                ></BannerItem>)
            }
            
        </div>
    );
};

export default Banner;