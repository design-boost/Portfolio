import React from 'react'
import { servicesData } from '@/lib/siteData'

const Services = () => {
    return (
        <div id="services" className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
            <div className="md:w-4/5 lg:w-3/4">
                <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text={servicesData.mainData.title}>{servicesData.mainData.title}</h6>
                <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">{servicesData.mainData.title2}</h2>
                <p className="text-pColor dark:text-white/70">{servicesData.mainData.description}</p>
            </div>
            <div className="mt-6 lg:mt-10 divide-y divide-dashed divide-black/">
                {servicesData.services.map((item, index) => (
                    <div key={index} className="md:flex py-6 lg:py-8 space-y-2.5 md:space-y-0">
                        <div className="md:min-w-[90px]">
                            <span className="font-mono font-semibold text-5xl stroke-text">{item.number}</span>
                        </div>
                        <div className="md:min-w-[270px] dark:text-white">
                            <i className={`${item.icon} text-2xl mb-2`}></i>
                            <h6 className="font-mono font-medium text-sm uppercase tracking-[0.5px]">{item.title}</h6>
                        </div>
                        <div>
                            <p className="text-pColor dark:text-white/70 leading-7">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services