import React from 'react'
import Slider from "react-slick";
import { FcGoogle } from 'react-icons/fc';

const HeroSection = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    return (

        <div className='relative h-[500px] before:bg-gradient-to-r before:from-regal-blue  before:to-transparent before:absolute before:top-0 before:left before:w-full before:h-full before:z-10'>
            <Slider {...settings}>
                <div>
                    <img className='w-full h-[500px] object-cover' src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg" alt="" />
                </div>
                <div>
                    <img className='w-full h-[500px] object-cover' src=" https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg" alt="" />
                </div>
            </Slider>

            <div className="container flex justify-between items-center absolute top-0 left-1/2 -translate-x-1/2 h-full z-50">
                <div>
                    <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
                    <h3 className='text-white mt-10 text-4xl font-openSans'>Dakikalar içinde <br /> kapınızda</h3>
                </div>
                <div className="w-[400px] rounded-xl bg-white p-6">
                    <h3 className='text-regal-blue font-openSans text-center text-base'>Giriş yap veya kayıt ol</h3>
                    <div className="flex gap-4 my-4">
                        <input className='h-14 px-4 border-2 border-gray-300 rounded w-1/2' type="text" placeholder='+90'/>
                        <input className='h-14 px-4 border-2 border-gray-300 rounded w-full' type="text" placeholder='Telefon Numarası' />
                    </div>
                    <button class="bg-regal-yellow hover:bg-brand-color hover:text-regal-yellow text-sm font-semibold h-12 rounded text-regal-blue flex items-center justify-center w-full">Telefon Numarası İle Devam Et</button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection