import React from 'react';
import { portfolioData } from '@/lib/siteData';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';

export const metadata = {
  title: 'ポートフォリオ | プロジェクト一覧',
  description: '過去のプロジェクト実績の一部です。',
};

export default function PortfolioPage() {
  return (
    <div className="space-y-6 lg:flex lg:space-x-8 lg:space-y-0 xl:space-x-12">
      <Navigation />
      <div className="lg:w-3/4 space-y-6 pb-12">
        <div className="section bg-white dark:bg-boxDark rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms]">
          <div className="md:w-4/5 lg:w-3/4">
            <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text={portfolioData.mainData.title}>{portfolioData.mainData.title}</h6>
            <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-3 lg:mb-4 dark:text-white">{portfolioData.mainData.title2}</h2>
            <p className="text-pColor dark:text-white/70">{portfolioData.mainData.description}</p>
          </div>
          
          <div className="portfolio-grid grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {portfolioData.projects.map((project, idx) => (
              <Link key={idx} href={`/portfolio/${project.slug}`}>
                <div className="relative overflow-hidden group rounded-lg after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-t after:from-black/30 after:to-transparent after:opacity-0 after:transition after:ease-out after:duration-[160ms] hover:after:opacity-100">
                  <Image 
                    src={project.mainImage} 
                    alt={project.projectTitle} 
                    width={600}
                    height={400}
                    className="w-full h-auto transition ease-custom duration-500 group-hover:scale-105 group-hover:blur-[1.4px]" 
                  />
                  <span className="z-[1] absolute top-4 right-4 bg-black/20 px-4 py-2 rounded-full backdrop-blur-[5px] text-white font-mono font-normal text-sm uppercase tracking-[0.5px]">{project.category}</span>
                  <div className="z-[1] absolute inset-0 flex items-center justify-center invisible opacity-0 translate-y-2 group-hover:translate-y-0 group-hover:visible group-hover:opacity-100 group-hover:mb-0 transition ease-out duration-[160ms]">
                    <h3 className="font-poppins font-semibold text-2xl lg:text-3xl tracking-[0.5px] text-center portfolio-stroke-text group-hover:text-white group-hover:[&]:[-webkit-text-fill-color:white]">{project.projectTitle}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 