"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { testimonialData } from '@/lib/siteData';


const Testimonial = () => {
    const sliderRef = useRef<SwiperClass | null>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const updateNavigation = (swiper: SwiperClass) => {
        if (prevRef.current && nextRef.current) {
            const navigation = swiper.params.navigation;
            if (typeof navigation === 'object' && navigation !== null) {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
                swiper.navigation.update();
            }
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            updateNavigation(sliderRef.current);
        }
    }, []);

    return (
        <div className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]" id="testimonial">
            <div className="flex justify-between">
                <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text={testimonialData.mainData.title}>{testimonialData.mainData.title2}</h6>
                {/* Slider Navigation */}
                <ul className="space-x-1.5">
                    <li className="swiper-testimonial-prev list-none inline-flex justify-center items-center w-10 h-10 rounded-full border border-black border-dashed cursor-pointer transition ease-out duration-[120ms] hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black" onClick={() => sliderRef.current?.slidePrev()}>
                        <i className="bi bi-arrow-left"></i>
                    </li>
                    <li className="swiper-testimonial-next list-none inline-flex justify-center items-center w-10 h-10 rounded-full border border-black border-dashed cursor-pointer transition ease-out duration-[120ms] hover:bg-black hover:text-white dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black" onClick={() => sliderRef.current?.slideNext()}>
                        <i className="bi bi-arrow-right"></i>
                    </li>
                </ul>
                {/* end Slider Navigation */}
            </div>

            <Swiper
                onSwiper={it => (sliderRef.current = it)}
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    // when window width is >= 992px
                    992: {
                        slidesPerView: 1,
                        spaceBetween: 40,
                    },
                    // when window width is >= 1200px
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 40,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="testimonial-swiper mt-5"
            >
                {testimonialData.testimonial.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="z-[1] relative pt-4 pl-4">
                            <div className="-z-[1] absolute top-0 left-0 text-5xl opacity-10 dark:text-white">
                                <i className="bi bi-quote"></i>
                            </div>
                            <div className="text-yellow-400 mb-3">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <p className="text-pColor dark:text-white/70 leading-7">{item.description}</p>
                        </div>
                        <div className="flex items-center mt-5">
                            <div className="me-5">
                                <Image className="w-[70px] h-[70px] rounded-full" src={item.avatar} alt={item.name} placeholder="blur" />
                            </div>
                            <div>
                                <h4 className="font-poppins font-medium text-lg md:text-xl dark:text-white">{item.name}</h4>
                                <span className="text-sm text-pColor dark:text-white/70">{item.jobTitle}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}

export default Testimonial;
