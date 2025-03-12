import React,{useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { space } from 'postcss/lib/list';
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'

const Carousel = () => {
    const [active,isActive] = useState(0)
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        centerPadding: "10px",
        beforeChange: (current, next) => {},
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: "10px",
                }
            }
        ]
    };

    return (
        <div className="w-[95%] md:w-[90%] mx-auto h-[300px] md:h-[450px] my-5 md:my-10 md:px-10 mb-20">
            <Slider {...settings} className='flex justify-center items-center'>
                {[project1,project2,project3,project1,project2,project3].map((project, index) => (
                    <div key={index} className='p-4'>
                        <div className='h-[300px] transition-all duration-300 rounded-lg transform scale-90 hover:scale-95'>
                            <div className='flex justify-center items-center h-full w-full rounded-lg'>
                                <img 
                                    src={project} 
                                    alt="" 
                                    className='h-full w-full object-cover rounded-lg shadow-lg' 
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel