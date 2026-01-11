import React, { useEffect } from 'react';
import Banner from '../Banner';
import Advertise from '../Admin/Advertise';
import LatestTickets from '../LatestTickets';
// import PopularRoutes from '../PopularRoutes';
// import Marquee from "react-fast-marquee";
import FAQ from '../FAQ';
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonials from '../Home/Testimonials';
import Destination from '../Home/Destination';
import WhyChooseUs from '../Home/WhyChooseUs';

import HowToBuyTickets from '../Home/HowToBuyTickets';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 120,
      once: false, // animate every time scrolls into view
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-up">
        <Banner />
      </div>

      <div className=' py-15 bg-gradient-to-b from-green-50 via-white to-white
      dark:from-gray-900 dark:via-gray-900 dark:to-gray-950'>
           <div data-aos="fade-up" data-aos-delay="400" className='max-w-7xl mx-auto'>
          <LatestTickets />
        </div>
        <div data-aos="fade-down" data-aos-delay="200">
          <Advertise />
        </div>

     
      </div>
      <Destination></Destination>
<Testimonials></Testimonials>
      {/* <div data-aos="zoom-in" data-aos-delay="200">
        <h3 className='text-title mb-10'>Popular Routes</h3>
        <Marquee speed={30}>
          <PopularRoutes />
        </Marquee>
      </div> */}
<WhyChooseUs></WhyChooseUs>
<HowToBuyTickets></HowToBuyTickets>

      <div data-aos="fade-left" data-aos-delay="300" className=' max-w-7xl mx-auto py-15'>
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
