"use client";

import React, { useEffect, useRef } from 'react';
import { portfolioData } from '@/lib/siteData';
import Image from 'next/image';
import Link from 'next/link';


const Portfolio = () => {
    const portfolioRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let mixer: any;

        const initMixitup = async () => {
            if (typeof window !== 'undefined') {
                const mixitupModule = await import('mixitup');
                const mixitup = mixitupModule.default;

                if (portfolioRef.current) {
                    mixer = mixitup(portfolioRef.current, {
                        selectors: {
                            target: '.portfolio-item'
                        },
                        animation: {
                            duration: 250
                        }
                    });
                }
            }
        };

        initMixitup();

        return () => {
            if (mixer) {
                mixer.destroy();
            }
        };
    }, []);

    return (
        <div id="portfolio" className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
            <div className="md:w-4/5 lg:w-3/4">
                <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text={portfolioData.mainData.title}>{portfolioData.mainData.title}</h6>
                <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">{portfolioData.mainData.title2}</h2>
                <p className="text-pColor dark:text-white/70">{portfolioData.mainData.description}</p>
            </div>
            <div className="filter mt-6 lg:mt-12">
                <ul className="space-x-2">
                    {portfolioData.filterCategories.map((category, index) => (
                        <li
                            key={index}
                            data-filter={index === 0 ? 'all' : `.${category}`}
                            className="list-none inline-block font-mono text-sm px-4 py-2 border border-black border-dashed rounded-full hover:bg-black hover:text-white transition ease-linear duration-100 cursor-pointer dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black"
                        >
                            {category}
                        </li>
                    ))}
                </ul>
                <div ref={portfolioRef} className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                    {portfolioData.projects.map((project, idx) => (
                        <div key={idx} className={`portfolio-item ${project.category}`}>
                            <Link href={`/portfolio/${project.slug}`} className="block">
                                <div className="relative overflow-hidden group rounded-lg after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/30 after:to-transparent after:opacity-0 after:transition after:ease-out after:duration-[160ms] hover:after:opacity-100">
                                    <Image src={project.mainImage} alt={project.projectTitle} placeholder="blur" className="transition ease-custom duration-500 group-hover:scale-105 group-hover:blur-[1.4px]" />
                                    <span className="z-[1] absolute top-4 right-4 bg-black/20 px-4 py-2 rounded-full backdrop-blur-[5px] text-white font-mono font-normal text-sm uppercase tracking-[0.5px]">{project.category}</span>
                                    <div className="z-[1] absolute bottom-0 left-0 w-full px-7 pb-6 invisible opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 group-hover:mb-0 transition ease-out duration-[160ms]">
                                        <span className="font-poppins font-semibold text-3xl lg:text-4xl tracking-[0.5px] portfolio-stroke-text group-hover:delay-300 group-hover:text-white group-hover:[&]:[-webkit-text-fill-color:white] transition-all ease-linear duration-300">{project.projectTitle}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio