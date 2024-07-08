import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import estee from '../../img/estee.jpg'
import nars from '../../img/nars.webp'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';
function HomeSect1() {
  return (
  <>
  {/* <section className='homeSect1'>
    <div className="sect1_img">

    </div>
  </section> */}


<Swiper navigation={true} modules={[Navigation]} className="mySwiper sect1_img" > 
        <SwiperSlide>
<img src="https://hips.hearstapps.com/hmg-prod/images/screen-shot-2018-05-29-at-2-03-32-pm-1527617321.png" alt="" />

        </SwiperSlide>
        <SwiperSlide>
        <img src={nars} alt="" />
                
        </SwiperSlide>
        <SwiperSlide>
        <img src={estee} alt="" />
        </SwiperSlide>
        
      </Swiper>
  </>
  )
}

export default HomeSect1