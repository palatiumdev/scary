import React from 'react';

const Short = ({ videoId }) => {
    return (
        <div className="relative w-full rounded-3xl overflow-clip" style={{ paddingBottom: '177.78%' /* (16/9)*100 = 177.78% to maintain 9:16 aspect ratio */ }}>
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
                allow="autoplay"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
            ></iframe>
        </div>
    );
};

export default Short;