"use client"
//components
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

//css
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import "@/Styles/ytEmbed.css"

//functions
import { useState } from "react";
import Image from "next/image";


const Video = ({ videoId, isShort = false }) => {
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
                params='modestbranding=1'
                aspectHeight={isShort ? 16 : 9}
                aspectWidth={isShort ? 9 : 16}
            />
        </div>
    )
}

export default Video