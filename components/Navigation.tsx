"use client"

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import React, { useState, useEffect } from 'react';

interface NavigationProps {
    initialActiveSection?: string;
}

const Navigation: React.FC<NavigationProps> = ({ initialActiveSection = 'about' }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isFixed, setIsFixed] = useState(false);
    const [activeLink, setActiveLink] = useState(initialActiveSection);
    const [headerHeight, setHeaderHeight] = useState(0);

    const navItems = [
        { label: 'About Me', id: 'about' },
        { label: 'Portfolio', id: 'portfolio' },
        { label: 'Services', id: 'services' },
        { label: 'Resume', id: 'resume' },
        { label: 'Blog', id: 'blog' },
        { label: 'Contact', id: 'contact' },
    ];

    useEffect(() => {
        const header = document.getElementById('header');
        if (header) {
            setHeaderHeight(header.clientHeight);
        }
    }, []);

    const handleScroll = () => {
        const scrollY = window.scrollY;

        for (const item of navItems) {
            const element = document.getElementById(item.id);
            if (element && scrollY >= element.offsetTop - 100) {
                setActiveLink(item.id);
            }
        }

        const windowWidth = window.innerWidth;
        if (windowWidth < 992) {
            setIsFixed(scrollY >= headerHeight);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        
        const windowWidth = window.innerWidth;
        if (windowWidth < 992) {
            const header = document.getElementById('header');
            if (header && window.scrollY >= header.clientHeight) {
                setIsFixed(true);
            }
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [headerHeight]);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop;
            window.scrollTo({
                top: offsetTop - 100, // Adjust offset as needed
                behavior: 'smooth'
            });
        }
    };

    const handleNavigation = async (sectionId: string, e: React.MouseEvent) => {
        e.preventDefault();

        if (pathname !== '/') {
            await router.push('/');
            setTimeout(() => {
                scrollToSection(sectionId);
            }, 100);
        } else {
            scrollToSection(sectionId);
        }
    };

    return (
        <div 
            className={`z-10 sticky top-2 lg:top-6 lg:h-fit lg:w-1/4 bg-black/90 dark:bg-boxDark 
                backdrop-blur-[5px] rounded-lg px-4 py-3 lg:bg-black lg:px-8 lg:py-5 xl:px-10 xl:py-7 
                lg:backdrop-blur-none ${isFixed ? 'fixed' : ''}`}
        >
            <ul className="font-mono font-normal uppercase text-sm tracking-wider text-center lg:text-left space-x-4 lg:space-x-0">
                {navItems.map((item) => (
                    <li 
                        className="list-none inline-block lg:block" 
                        key={item.id}
                    >
                        <Link
                            href={`#${item.id}`}
                            className={`section-link group inline-flex justify-center items-center lg:block 
                                lg:justify-normal relative w-9 h-9 border border-transparent border-dashed 
                                rounded-full lg:w-auto lg:h-auto lg:border-none lg:rounded-none text-white/70 
                                py-3 transition ease-linear duration-100 hover:text-white 
                                ${activeLink === item.id ? 'active' : ''}`}
                            onClick={(e) => handleNavigation(item.id, e)}
                        >
                            <span className="hidden lg:inline-block">{item.label}</span>
                            <span className="lg:hidden">{item.label.charAt(0)}</span>
                            <span className={`nav-circle hidden lg:inline-block absolute top-1/2 right-0 
                                -translate-y-1/2 w-[5px] h-[5px] before:content-[''] before:absolute 
                                before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 
                                before:bg-white before:w-[5px] before:h-[5px] before:rounded-full 
                                before:opacity-70 before:transition-all before:ease-out before:duration-200 
                                group-hover:before:opacity-100 ${activeLink === item.id ? 'before:opacity-100' : ''}`}>
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Navigation;