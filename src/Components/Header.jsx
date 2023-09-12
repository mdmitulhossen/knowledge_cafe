import React from 'react';
import profile from '../assets/images/profile.png';

const Header = () => {
    return (
        <div className='flex justify-between items-center pb-3 border-b-2'>
            <div >
                  <p className='text-2xl md:text-3xl lg:text-4xl font-bold'>Knowledge-Cafe</p>
            </div>
            <div>
                <img className='w-12' src={profile} alt="" />
            </div>
        </div>
    );
};

export default Header;