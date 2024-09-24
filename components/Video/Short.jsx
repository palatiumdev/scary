"use client"
import React, { useState } from 'react';

const Short = ({ videoId }) => {
    const [isLoading, setIsLoading] = useState(true);

    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className='relative m-5'>
            {isLoading && (
                <div className="absolute top-0 left-0 h-full w-full rounded-3xl overflow-clip bg-slate-300 animate-pulse" style={{ paddingBottom: '177.78%' }} />
            )}
            <div className="relative w-full rounded-3xl overflow-clip" style={{ paddingBottom: '177.78%' }}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
                    allow="autoplay"
                    allowFullScreen
                    loading="eager"
                    className={`absolute top-0 left-0 w-full h-full  ${isLoading ? 'hidden' : ''}`}
                    onLoad={handleIframeLoad}
                ></iframe>
            </div>
        </div>
    );
};

export default Short;
