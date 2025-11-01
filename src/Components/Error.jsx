import React from 'react';
import err from '../../assets/error-404.png'
import { Link } from 'react-router';

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-4 sm:p-6 md:p-8 lg:p-12">

      <div className="w-full max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[400px] xl:max-w-[450px] mb-4 sm:mb-6 md:mb-8">
        <img 
          src={err} 
          alt="404 page not Found" 
          className="w-full h-auto"
        />
      </div>

      <div className="text-center max-w-2xl mx-auto">
        <h2 className="mt-2 sm:mt-4 text-black mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          Oops, page not found!
        </h2>
        
        <p className="text-gray-400 text-base sm:text-lg md:text-xl lg:text-xl mb-4 sm:mb-6 md:mb-8 px-2 sm:px-4">
          The page you are looking for is not available.
        </p>

        <Link to='/'>
          <button 
            className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#5729CC]  text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg transition-all duration-300 text-sm sm:text-base md:text-lg font-medium w-full sm:w-auto transform hover:scale-105 shadow-lg"
            style={{
              background: 'linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)'
            }}
          >
            Go Back!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;