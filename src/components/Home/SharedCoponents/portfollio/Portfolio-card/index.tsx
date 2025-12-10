'use client'

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { portfolioinfo } from '../../../../../data/data'


const PortfolioCard = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 100,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  return (
  <div id='portfolio' className='dark:bg-darkmode'>
      <div className='lg:px-9 m-auto px-0 max-w-[1600px] slider-container'>
        <Slider {...settings}>
          {portfolioinfo.map((item, index) => (
            <a key={index} href={`/portfolio/${item.slug}`} >
              <div className={`px-3 group ${index % 2 !== 0 ? 'lg:mt-24 ' : ''}`}>
                <div className='relative overflow-hidden rounded-lg'>
                  <img
                    src={item.image}
                    alt={item.alt}
                    width={1200}
                    height={800}
                    style={{ width: '100%', height: 'auto' }}
                    className='group-hover:scale-110 transition-all duration-500'
                  />
                  {/* Text overlay at bottom */}
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                    <h4 className='text-white font-semibold text-base mb-1'>
                      {item.title}
                    </h4>
                    <p className='text-white/80 text-sm'>
                      {item.info}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default PortfolioCard
