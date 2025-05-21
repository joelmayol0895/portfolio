// import Swiper core and required modules
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProjData from '@/components/data/ProjData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Projects = () => {
  return (
    <section id="projects">
      <div className='container min-h-auto flex flex-col items-center justify-center p-5 md:p-20 text-center space-y-9'>
          <h2 className='text-2xl md:text-4xl font-bold tracking-tight mb-7'>My <span className='text-primary'>Projects</span></h2>

          <p className="text-[14px] sm:text-[16px]">A fully responsive website using HTML, CSS, and JavaScript, then integrated it seamlessly into WordPress for easy content management. The project features interactive UI elements, custom animations, and cross-browser compatibility to ensure a smooth user experience.</p>

          <div className='flex items-center justify-center flex-col'>
            <Swiper
              breakpoints={{
                320: {
                  slidesPerView: 'auto',
                  spaceBetween: 5,
                  pagination: false,
                },
                700: {
                  slidesPerView: 3,
                  spaceBetween: 15
                }
              }}
              effect={ 'coverflow' }
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              noSwiping={false}
              initialSlide={2}
              simulateTouch={false}
              coverflowEffect={
                { 
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }
              }
              pagination={{el:'.swiper-pagination',clickable:true}}
              navigation={{
                nextEl:'.swiper-button-next',
                prevEl:'.swiper-button-prev',
                clickable:true,
              }}
              autoplay={{
                delay: 8000,
                disableOnInteraction: false,
              }}
              modules={[EffectCoverflow,Pagination,Navigation,Autoplay]}
              className='swiper_container container mx-auto flex justify-center items-center'
            >
              {ProjData.map(proj => 
                <SwiperSlide key={proj.id}>
                  <a href={proj.url} target="_blank">
                    <figure className='rounded-lg'><img src={proj.img} alt={proj.alt} /></figure>
                  </a>
                </SwiperSlide>
              )}

              <div className='slider-controler'>
                <div className='swiper-button-prev slider-arrow'>
                  <ion-icon name='arrow-back-outline'></ion-icon>
                </div>
                <div className='swiper-button-next slider-arrow'>
                  <ion-icon name='arrow-forward-outline'></ion-icon>
                </div>

                {/* <div className='swiper-pagination'></div> */}
              </div>
            </Swiper>
          </div>
          
      </div>
    </section>
  )
}

export default Projects