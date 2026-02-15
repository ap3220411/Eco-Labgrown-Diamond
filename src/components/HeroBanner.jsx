import React, { useState, useEffect } from "react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import bannerImage1 from "../assets/bannerImage.webp";
import bannerImg2 from "../assets/bannerImg2.webp";

const HeroBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            brand: "Eco Labgrown Diamond",
            title: "EXCLUSIVE",
            subtitle: "JEWELRY",
            product: "Silver Ring",
            description: "with diamond heart",
            price: "$899.99",
            image: bannerImage1,
        },
        {
            id: 2,
            brand: "Eco Labgrown Diamond",
            title: "LUXURY",
            subtitle: "COLLECTION",
            product: "Golden earrings",
            description: "with pearls",
            price: "$1329.99",
            image: bannerImg2,
        },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 6000);

        return () => clearInterval(timer);
    }, []);

    const handleNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#f9f5ef] to-[#efe6da]">

            <div className="w-[99%] mx-auto">

                {/* GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-3 min-h-screen">

                    {/* LEFT SECTION */}
                    <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 lg:px-14 lg:border-r border-[#e5d8cc]">

                        <p className="text-[#b65c3a] tracking-widest text-sm uppercase mb-6">
                            {slides[currentSlide].brand}
                        </p>

                        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-[#b65c3a] mb-8">
                            {slides[currentSlide].title}
                            <br />
                            {slides[currentSlide].subtitle}
                        </h1>

                        {/* Desktop Shop Button */}
                        <button className="hidden lg:block bg-[#b65c3a] text-white px-8 py-3 hover:bg-[#9c4d30] transition">
                            Go to shop
                        </button>
                    </div>

                    {/* CENTER IMAGE SECTION */}
                    <div className="flex flex-col justify-center items-center lg:border-r border-[#e5d8cc] px-4 py-4">

                        <img
                            key={slides[currentSlide].id}
                            src={slides[currentSlide].image}
                            alt={slides[currentSlide].product}
                            className="w-full h-[65vh]  md:h-[70vh] lg:h-[90vh]
                         object-contain transition duration-700 ease-in-out"
                        />

                        {/* MOBILE / TABLET PRODUCT INFO */}
                        <div className="block lg:hidden text-center w-full max-w-sm space-y-1">
                            <h3 className="text-md text-gray-700">
                                {slides[currentSlide].product}
                            </h3>

                            <p className="text-gray-500">
                                {slides[currentSlide].description}
                            </p>

                            <p className="text-2xl font-semibold text-gray-900">
                                {slides[currentSlide].price}
                            </p>

                            {/* Buy + Arrows Row */}
                            <div className="flex items-center justify-between pt-4">

                                <button
                                    onClick={handlePrev}
                                    className="text-5xl text-[#b65c3a]"
                                >
                                    <IoIosArrowRoundBack />
                                </button>

                                <button className="text-[#b65c3a]  transition">
                                    Buy now
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="text-5xl text-[#b65c3a]"
                                >
                                    <IoIosArrowRoundForward />
                                </button>

                            </div>
                        </div>

                    </div>


                    {/* RIGHT SECTION (Desktop Only Layout) */}
                    <div className="hidden lg:flex flex-col justify-end px-14 pb-20">

                        <div className="space-y-4">
                            <h3 className="text-lg text-gray-700">
                                {slides[currentSlide].product}
                            </h3>

                            <p className="text-gray-500">
                                {slides[currentSlide].description}
                            </p>

                            <p className="text-5xl font-serif text-gray-900 mt-4">
                                {slides[currentSlide].price}
                            </p>

                            <button className="mt-4 hidden lg:block text-[#b65c3a] border-b-2 border-[#b65c3a] pb-1 w-fit">
                                Buy now
                            </button>
                        </div>

                        {/* DESKTOP ARROWS */}
                        <div className="flex gap-12 mt-8">
                            <button
                                onClick={handlePrev}
                                className="text-6xl text-[#b65c3a] hover:scale-110 transition"
                            >
                                <IoIosArrowRoundBack />
                            </button>

                            <button
                                onClick={handleNext}
                                className="text-6xl text-[#b65c3a] hover:scale-110 transition"
                            >
                                <IoIosArrowRoundForward />
                            </button>
                        </div>

                    </div>

                </div>

                {/* MOBILE + TABLET ARROWS (BOTTOM CENTER) */}
                {/* <div className="flex lg:hidden justify-between items-center py-8 px-6">
                    <button
                        onClick={handlePrev}
                        className="text-2xl text-[#b65c3a]"
                    >
                        <IoIosArrowRoundBack />
                    </button>

                    <button
                        onClick={handleNext}
                        className="text-2xl text-[#b65c3a]"
                    >
                        <IoIosArrowRoundForward />
                    </button>
                </div> */}

            </div>
        </div>
    );


};

export default HeroBanner;
