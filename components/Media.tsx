"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { mediaData } from '@/lib/siteData';

const Media = () => {
    return (
        <div id="media" className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
            <div className="md:w-4/5 lg:w-3/4 mb-6 lg:mb-8">
                <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text={mediaData.mainData.title}>{mediaData.mainData.title}</h6>
                <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">{mediaData.mainData.title2}</h2>
                <p className="text-pColor dark:text-white/70">{mediaData.mainData.description}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {mediaData.media.map((item, index) => (
                    <Link 
                        key={index} 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group block"
                    >
                        <div className="bg-white dark:bg-boxDark/50 rounded-lg border border-black/5 dark:border-white/10 overflow-hidden hover:shadow-lg transition ease-out duration-[160ms] h-full flex flex-col">
                            <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                                <Image 
                                    src={item.thumbnail} 
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    placeholder="blur"
                                />
                            </div>
                            <div className="p-5 flex-1 flex flex-col">
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs font-mono uppercase tracking-wider text-pColor dark:text-white/70">{item.source}</span>
                                    <span className="text-xs text-pColor dark:text-white/50">•</span>
                                    <span className="text-xs text-pColor dark:text-white/70">{item.date}</span>
                                </div>
                                <h3 className="font-poppins font-semibold text-lg mb-2 dark:text-white group-hover:text-black/70 dark:group-hover:text-white transition-colors line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-pColor dark:text-white/70 line-clamp-3 flex-1">
                                    {item.description}
                                </p>
                                <div className="mt-4 pt-4 border-t border-black/5 dark:border-white/10">
                                    <span className="text-xs font-mono uppercase tracking-wider text-pColor dark:text-white/70 group-hover:text-black dark:group-hover:text-white transition-colors">
                                        続きを読む →
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Media



