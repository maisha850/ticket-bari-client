import React, { useEffect } from 'react';
import Banner from '../Banner';
import Advertise from '../Admin/Advertise';
import LatestTickets from '../LatestTickets';
import PopularRoutes from '../PopularRoutes';
import Marquee from "react-fast-marquee";
import FAQ from '../FAQ';
import AOS from "aos";
import "aos/dist/aos.css";

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

      <div className='max-w-7xl mx-auto py-15'>
        <div data-aos="fade-down" data-aos-delay="200">
          <Advertise />
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <LatestTickets />
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-delay="200">
        <h3 className='text-title mb-10'>Popular Routes</h3>
        <Marquee>
          <PopularRoutes />
        </Marquee>
      </div>

      <div data-aos="fade-left" data-aos-delay="300" className=' max-w-7xl mx-auto py-15'>
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
