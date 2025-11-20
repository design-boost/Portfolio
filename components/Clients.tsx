"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';
import { clientsData } from '@/lib/siteData';

const Clients = () => {
    return (
        <div id="clients" className="bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
            <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text={clientsData.mainData.title}>{clientsData.mainData.title2}</h6>
            <Swiper
                slidesPerView={2}
                spaceBetween={30}
                breakpoints={{
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    // when window width is >= 992px
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    // when window width is >= 1200px
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                className="clients-swiper mt-12"
            >
                {clientsData.clients.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-slide opacity-50 hover:opacity-100 transition ease-out duration-[120ms]">
                            <Link href={item.url}>
                                <Image src={item.darkLogo} alt={`Logo ${index}`} placeholder="blur" className="dark:hidden" />
                                <Image src={item.lightLogo} alt={`Logo ${index}`} placeholder="blur" className=" hidden dark:block" />
                            </Link>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Clients