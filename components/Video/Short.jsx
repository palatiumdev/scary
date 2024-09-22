import React, { useState } from 'react';

const Short = ({ videoId }) => {
    const [isLoading, setIsLoading] = useState(true);

    // Function to call when iframe has finished loading
    const handleIframeLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className='relative'>
            {isLoading && (
                <div className="absolute top-0 left-0 w-full h-full w-full rounded-3xl overflow-clip bg-slate-300 animate-pulse" style={{ paddingBottom: '177.78%' }} />
            )}
            <div className="relative w-full rounded-3xl overflow-clip" style={{ paddingBottom: '177.78%' }}>
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
                    allow="autoplay"
                    allowFullScreen
                    className={`absolute top-0 left-0 w-full h-full ${isLoading ? 'hidden' : ''}`} // Hide iframe while loading
                    onLoad={handleIframeLoad} // Set loading to false when iframe loads
                ></iframe>
            </div>
        </div>
    );
};

export default Short;
