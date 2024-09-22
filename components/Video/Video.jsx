"use client"
//components
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

//css
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import "@/Styles/ytEmbed.css"

//functions
import { useState } from "react";
import Image from "next/image";


const Video = ({ videoId }) => {
    const [resolution, setResolution] = useState("maxresdefault");

    const handleError = () => {
        // Fall back to lower resolution thumbnail
        setResolution(`hqdefault`);
    };

    return (

        <div className='rounded-3xl overflow-clip'>
            <Image
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                height={0}
                width={0}
                onError={handleError}
            />

            <LiteYouTubeEmbed
                id={videoId}
                playerClass="ytButton"
                poster={resolution}
                params='modestbranding=1&autoplay=1&mute=1'
                aspectHeight={9}
                aspectWidth={16}
            />
        </div>
    )
}

export default Video