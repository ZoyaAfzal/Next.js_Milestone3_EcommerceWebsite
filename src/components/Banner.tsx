'use client';
import React , { useState} from 'react';
import  Slider from 'react-slick';
import { sliderOne, sliderTwo, sliderThree } from '@/assets';
import Image from 'next/image';
import { Clock, Smartphone, Map, MailPlus } from 'lucide-react';


const Banner = () => {
    const [dotActive, setDotActive] = useState(0);
    var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,                                                                         
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    beforeChange: (prev:any, next:any) => {
        setDotActive(next)
    },
    appendDots:(dots:any) => (
        <div 
        style={{
          position: "absolute",
          top: "74%",
          left: "67%",
          transform: "translate(-50%, 0)",
        }}
      >
       
        <ul className='md:mr-72 lg:mr-0 sm:mr-60 xs:mr-48'
        style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: 10,
        }}  
       >
          {dots}
        </ul>
            </div>
    
    ),
    customPaging:(i:any) => (
        <div 
        style={
          i === dotActive
            ? {
                width: "50px",
                height: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#fff",
                cursor: "pointer",
              }
            : {
                width: "50px",
                height: "6px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                background: "#131921",
                cursor: "pointer",
              }
        }
      ></div>
    )
  };

  return (
    <div className='lg:min-h-screen relative mb-40'>
        <Slider {...settings}>
      <div className='w-full py-32 lg:py-0 lg:h-screen bg-slate-200 relative'>
        <div className='w-full lg:w-1/3 hidden lg:inline-block h-full bg-designColor z-0 relative'>
            <Image src={sliderOne} alt="sliderone"
            className='absolute object-cover right-0 lg:-right-48 lg:h-screen' priority />
        </div>
        <div className="lg:absolute lg:top-1/2 lg:left-2/3 transform lg:-translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
            <p className="text-xl uppercase">Get the Best Products for you</p>
            <p className="w-96 text-center text-zinc-600">
                Browse the latest phones in the Market and get the one you dream for
            </p>
            <p className="text-2xl font-semibold">Phones in Demand</p>
            <button className='text-base font-medium text-white bg-designColor rounded-md px-4 py-2'>
                Select a Product
            </button>
        </div>
            </div>   
            <div className='w-full py-32 lg:py-0 lg:h-screen bg-slate-200 relative'>
        <div className='w-full lg:w-1/3 hidden lg:inline-block h-full bg-designColor z-0 relative'>
            <Image src={sliderTwo} alt="slidertwo"
            className='absolute object-cover right-0 lg:-right-48 lg:h-screen' priority />
        </div>
        <div className="lg:absolute lg:top-1/2 lg:left-2/3 transform lg:-translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
            <p className="text-xl uppercase">Get the Best Products for you</p>
            <p className="w-96 text-center text-zinc-600">
                Browse the latest phones in the Market and get the one you dream for
            </p>
            <p className="text-2xl font-semibold">Phones in Demand</p>
            <button className='text-base font-medium text-white bg-designColor rounded-md px-4 py-2'>
                Select a Product
            </button>
        </div>
            </div>   <div className='w-full py-32 lg:py-0 lg:h-screen bg-slate-200 relative'>
        <div className='w-full lg:w-1/3 hidden lg:inline-block h-full bg-designColor z-0 relative'>
            <Image src={sliderThree} alt="sliderthree"
            className='absolute object-cover right-0 lg:-right-48 lg:h-screen' priority />
        </div>
        <div className="lg:absolute lg:top-1/2 lg:left-2/3 transform lg:-translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5">
            <p className="text-xl uppercase">Get the Best Products for you</p>
            <p className="w-96 text-center text-zinc-600">
                Browse the latest phones in the Market and get the one you dreamt for
            </p>
            <p className="text-2xl font-semibold">Phones in Demand</p>
            <button className='text-base font-medium text-white bg-designColor rounded-md px-4 py-2'>
                Select a Product
            </button>
        </div>
            </div> 


    </Slider>
    <div className='h-20 bg-white absolute left-1/2 -bottom-10 transform -translate-x-1/2 hidden lg:inline-flex items-center gap-x-12 p-10'>
        <div className='flex items-center gap-5 w-60'>
            <Clock className='text-designColor w-8 h-8'/>
            <div>
                <p>Saturday - Thursday</p>
                <p className="font-semibold">7:00 - 20:00</p>
            </div>
        </div>
        <div className="flex items-center gap-5 w-60">
        <Smartphone className='text-[#fcb900] w-8 h-8'/>
        <div>
         <p className="font-semibold">Order by Phone</p>
        </div>
        </div>
        <div className="flex items-center gap-5 w-60">
            <Map className='text-[#fcb900] w-8 h-8'/>
            <div>
                <p>Mirpur, Dhaka</p>
                <p className="font-semibold">Address</p>
            </div>
        </div>
        <div className="flex items-center gap-5 w-60">
            <MailPlus className='text-[#fcb900] w-8 h-8'/>
            <div>
                <p>Get an invoice</p>
                <p className="font-semibold">Email-us</p>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Banner;