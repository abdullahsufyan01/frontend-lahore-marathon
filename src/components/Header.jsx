import React from 'react';
import LahoreMarathonBanner from '../assets/images/LahoreMarathonBannerComp.jpg'

const Header = () => {
  return (
    <header
    >
      <a className='w-full h-auto' href="https://lahore-marathon.com/">
        <img className='w-full h-auto' src={LahoreMarathonBanner} alt="" srcset="" />
      </a>
    </header>
  );
};

export default Header;