import React from 'react';

const BackgroundDecorationalLines = () => {
    return (
        <div className="-z-[1] fixed top-0 left-0 overflow-hidden w-full h-full">
            <div className="absolute top-0 left-0 w-1/4 lg:w-1/5 h-full border-r border-black/10 dark:border-white/15 before:content-[''] before:z-[1] before:absolute before:-top-20 before:-right-[1px] before:w-[1px] before:h-20 before:bg-gradient-to-b before:from-transparent before:to-black/50 dark:before:to-white/50 before:animate-bgLine"></div>
            <div className="absolute top-0 left-0 w-2/4 lg:w-2/5 h-full border-r border-black/10 dark:border-white/15 before:content-[''] before:z-[1] before:absolute before:-top-20 before:-right-[1px] before:w-[1px] before:h-20 before:bg-gradient-to-b before:from-transparent before:to-black/50 dark:before:to-white/50 before:animate-bgLine before:animation-delay-2000"></div>
            <div className="absolute top-0 left-0 w-3/4 lg:w-3/5 h-full border-r border-black/10 dark:border-white/15 before:content-[''] before:z-[1] before:absolute before:-top-20 before:-right-[1px] before:w-[1px] before:h-20 before:bg-gradient-to-b before:from-transparent before:to-black/50 dark:before:to-white/50 before:animate-bgLine before:animation-delay-6000"></div>
            <div className="hidden lg:block absolute top-0 left-0 w-4/5 h-full border-r border-black/10 dark:border-white/15 before:content-[''] before:z-[1] before:absolute before:-top-20 before:-right-[1px] before:w-[1px] before:h-20 before:bg-gradient-to-b before:from-transparent before:to-black/50 dark:before:to-white/50 before:animate-bgLine before:animation-delay-4000"></div>
        </div>
    );
}

export default BackgroundDecorationalLines;
