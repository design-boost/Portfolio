import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { blogData } from '@/lib/siteData'

const Blog = () => {
    return (
        <div id="blog" className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
            <div className="md:w-4/5 lg:w-3/4">
                <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text={blogData.mainData.title}>{blogData.mainData.title}</h6>
                <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">{blogData.mainData.title2}</h2>
                <p className="text-pColor dark:text-white/70">{blogData.mainData.description}</p>
            </div>
            <div className="mt-6 lg:mt-12 space-y-8 md:space-y-6">
                {blogData.posts.map((item, index) => (
                    <div key={index} className="md:flex md:items-center">
                        <div className="overflow-hidden relative rounded-lg group">
                            <Link href={`blog/${item.slug}`}>
                                <Image src={item.image} alt={item.title} placeholder="blur" className="md:max-w-[340px] transition ease-custom duration-500 group-hover:scale-105 group-hover:blur-[1.5px]" />
                                <div className="absolute top-4 left-4 bg-black/20 px-4 py-2 rounded-full text-white backdrop-blur-[5px] font-mono font-normal uppercase text-sm tracking-[0.5px]">
                                    {item.category}
                                </div>
                            </Link>
                        </div>
                        <div className="mt-5 md:pl-7 md:mt-0">
                            <p className="text-pColor dark:text-white/70">Posted on {item.date}</p>
                            <h3 className="font-poppins font-semibold text-2xl lg:text-3xl mt-2"><Link className="hover:underline dark:text-white" href={`blog/${item.slug}`}>{item.title}</Link></h3>
                            <Link className="inline-block border border-black border-dashed rounded-full px-6 py-3 mt-3 lg:mt-4 font-mono text-sm hover:bg-black hover:text-white transition ease-out duration-[120ms] dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black" href={`blog/${item.slug}`}>Continue Reading</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Blog