"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { headerData } from '@/lib/siteData';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [, setHeaderHeight] = useState<number>(0);
    const [mounted, setMounted] = useState<boolean>(false);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const headerRef = useRef<HTMLElement>(null);
    const toggleMenuRef = useRef<HTMLDivElement>(null);
    const { theme, setTheme } = useTheme();
    const router = useRouter();

    // マウント完了後にクライアントサイドのコードが実行されるようにする
    useEffect(() => {
        setMounted(true);
        // 認証状態を確認
        const authStatus = localStorage.getItem('portfolio_auth');
        setIsAuthenticated(authStatus === 'authenticated');
    }, []);

    useEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.clientHeight);
            }
        };

        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);

        return () => {
            window.removeEventListener('resize', updateHeaderHeight);
        };
    }, []);

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const handleLogout = () => {
        localStorage.removeItem('portfolio_auth');
        setIsAuthenticated(false);
        closeMenu();
        router.refresh();
        window.location.reload();
    };

    const currentYear = new Date().getFullYear();

    return (
        <div>
            {/* Toggle Menu */}
            <div
                ref={toggleMenuRef}
                className={`toggle-menu ${isMenuOpen ? 'show' : ''} z-20 fixed top-0 right-0 translate-x-3 w-96 h-full bg-black dark:bg-boxDark dark:shadow-darkBox px-10 pt-8 pb-12 transition-all ease-out duration-150 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                {/* Close Button */}
                <button
                    className="font-mono font-medium uppercase text-sm tracking-[0.5px] text-white hover:opacity-70 transition-opacity mb-8 px-4 py-2 border border-gray-600 dark:border-gray-500 rounded flex items-center gap-2"
                    onClick={closeMenu}
                    aria-label="Close menu"
                >
                    <span className="inline-block w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent"></span>
                    <span>CLOSE</span>
                </button>

                {/* Menu Content */}
                <h6 className="block font-mono font-normal uppercase text-sm tracking-[0.5px] text-white mb-2">
                    Phone:
                </h6>
                <h4 className="font-poppins font-medium text-2xl text-white">
                    {headerData.mainData.phone}
                </h4>

                <div className="mt-6">
                    <h6 className="block font-mono font-normal uppercase text-sm tracking-[0.5px] text-white mb-2">
                        Email:
                    </h6>
                    <h4 className="font-poppins font-medium text-2xl text-white">
                        {headerData.mainData.email}
                    </h4>
                </div>

                <ul className="mt-10 space-y-2">
                    <li className="relative pl-3 before:content-[''] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-white before:opacity-70 before:w-1 before:h-1 before:rounded-full transition-all duration-100 hover:before:opacity-100">
                        <button
                            className="font-mono font-medium uppercase text-sm tracking-[0.5px] text-white hover:underline"
                            onClick={toggleTheme}
                            aria-label="Toggle theme"
                        >
                            {mounted && theme === 'dark' ? 'Light Version' : 'Dark Version'}
                        </button>
                    </li>
                    {headerData.links
                        .filter((item) => item.name !== 'ポートフォリオ')
                        .map((item, index) => (
                            <li
                                key={index}
                                className="relative pl-3 before:content-[''] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-white before:opacity-70 before:w-1 before:h-1 before:rounded-full transition-all duration-100 hover:before:opacity-100"
                            >
                                <Link
                                    href={item.url}
                                    className="font-mono font-medium uppercase text-sm tracking-[0.5px] text-white hover:underline"
                                    onClick={closeMenu}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    {isAuthenticated && (
                        <li className="relative pl-3 before:content-[''] before:absolute before:top-1/2 before:left-0 before:-translate-y-1/2 before:bg-white before:opacity-70 before:w-1 before:h-1 before:rounded-full transition-all duration-100 hover:before:opacity-100">
                            <button
                                className="font-mono font-medium uppercase text-sm tracking-[0.5px] text-white hover:underline"
                                onClick={handleLogout}
                                aria-label="Logout"
                            >
                                LOGOUT
                            </button>
                        </li>
                    )}
                </ul>

                <div className="absolute bottom-12 left-10 right-10">
                    <p className="text-white/70">
                        &copy; {currentYear} {headerData.mainData.copywriter}.
                    </p>
                </div>

            </div>

            {/* Header */}
            <header
                id="header"
                ref={headerRef}
                className="lg:flex lg:justify-between"
            >
                <div className="flex h-[50px] items-center space-x-6 lg:order-2 justify-end">
                    <button
                        className="menu-btn group relative w-[50px] h-[50px] bg-black dark:bg-boxDark rounded-b-lg"
                        aria-label="Toggle navigation menu"
                        onClick={toggleMenu}
                    >
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white w-1 h-1 rounded-full transition-all ease-linear duration-100 delay-100 group-hover:scale-[3]" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 before:content-[''] before:absolute before:top-0 before:-left-[10px] before:bg-white before:w-1 before:h-1 before:rounded-full before:transition-all before:ease-linear before:duration-100 after:content-[''] after:absolute after:top-0 after:-right-[10px] after:bg-white after:w-1 after:h-1 after:rounded-full after:transition-all after:ease-linear after:duration-100 group-hover:before:left-0 group-hover:before:opacity-0 group-hover:after:right-0 group-hover:after:opacity-0" />
                    </button>
                </div>

                <div className="py-7 lg:order-1">
                    <Link href="/#about" className="block">
                        <h1 className="text-5xl xl:text-7xl font-poppins font-semibold dark:text-white hover:opacity-80 transition-opacity cursor-pointer">
                            {headerData.mainData.firstName}{' '}
                            <span className="stroke-text">{headerData.mainData.secondName}</span>
                        </h1>
                    </Link>
                </div>
            </header>
        </div>
    );
};

export default Header;