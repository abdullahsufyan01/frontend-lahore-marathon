import React from 'react';
import LahoreMarathonBanner from '../assets/images/LahoreMarathonBannerComp.jpg'

const Header = () => {
  return (
    <header
    >
       <img className='w-full h-auto' src={LahoreMarathonBanner} alt="" srcset="" />
    </header>
  );
};

export default Header;