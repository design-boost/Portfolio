"use client";

import { contactData } from '@/lib/siteData';
import React from 'react';

const Contact = () => {
    return (
        <div id="contact" className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
            <div className="md:w-4/5 lg:w-3/4">
                <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text={contactData.mainData.title}>{contactData.mainData.title}</h6>
                <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">{contactData.mainData.title3}</h2>
                <p className="text-pColor dark:text-white/70">{contactData.mainData.description}</p>
            </div>
            
            <div className="mt-6 lg:mt-8 divide-y divide-dashed divide-black/10 dark:divide-white/10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start py-6 lg:py-8">
                    {/* 氏名 */}
                    <div className="space-y-3">
                        <div className="text-xs font-mono uppercase tracking-wider text-pColor dark:text-white/50">氏名</div>
                        <div className="text-sm text-pColor dark:text-white/70 mb-1">{contactData.mainData.nameFurigana}</div>
                        <div className="text-3xl lg:text-4xl font-semibold dark:text-white">{contactData.mainData.name}</div>
                    </div>

                    {/* 生年月日・年齢・性別 */}
                    <div className="space-y-3">
                        <div className="text-xs font-mono uppercase tracking-wider text-pColor dark:text-white/50">生年月日</div>
                        <div className="text-base text-pColor dark:text-white/70">{contactData.mainData.birthdate} ({contactData.mainData.age})</div>
                        <div className="text-xs font-mono uppercase tracking-wider text-pColor dark:text-white/50 mt-6">性別</div>
                        <div className="text-xl lg:text-2xl font-semibold dark:text-white">{contactData.mainData.gender}</div>
                    </div>
                </div>

                <div className="py-6 lg:py-8">
                    {/* 現住所 */}
                    <div className="space-y-3">
                        <div className="text-xs font-mono uppercase tracking-wider text-pColor dark:text-white/50">現住所</div>
                        <div className="text-base lg:text-lg text-pColor dark:text-white/70">{contactData.mainData.postalCode} {contactData.mainData.address}</div>
                        <div className="text-base lg:text-lg text-pColor dark:text-white/70">{contactData.mainData.nearestStation}</div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start py-6 lg:py-8">
                    {/* 電話番号 */}
                    <div className="space-y-3">
                        <div className="text-xs font-mono uppercase tracking-wider text-pColor dark:text-white/50">電話番号</div>
                        <a href={`tel:${contactData.mainData.phone.replace(/\s/g, '')}`} className="text-xl lg:text-2xl font-semibold dark:text-white hover:opacity-70 transition-opacity">
                            {contactData.mainData.phone}
                        </a>
                    </div>

                    {/* メールアドレス */}
                    <div className="space-y-3">
                        <div className="text-xs font-mono uppercase tracking-wider text-pColor dark:text-white/50">メールアドレス</div>
                        <a href={`mailto:${contactData.mainData.email}`} className="text-xl lg:text-2xl font-semibold dark:text-white hover:opacity-70 transition-opacity break-all">
                            {contactData.mainData.email}
                        </a>
                    </div>
                </div>

                <div className="py-6 lg:py-8">
                    {/* 趣味 */}
                    <div className="space-y-3">
                        <div className="text-xs font-mono uppercase tracking-wider text-pColor dark:text-white/50">趣味</div>
                        <div className="flex flex-wrap gap-3">
                            {contactData.mainData.hobbies?.map((hobby, index) => (
                                <span key={index} className="inline-block px-4 py-2 border border-black/20 border-dashed rounded-full text-base lg:text-lg font-semibold dark:text-white dark:border-white/20">
                                    {hobby}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
