"use client"
//components
import LiteYouTubeEmbed from 'react-lite-youtube-embed';

//css
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import "@/Styles/ytEmbed.css"

const Video = ({ videoId, isShort = false }) => {

    return (
        <div className='rounded-3xl overflow-clip'>
            <LiteYouTubeEmbed
                id={videoId}
                playerClass="ytButton"
                poster="hqdefault"
                params='modestbranding=1'
                aspectHeight={isShort ? 16 : 9}
                aspectWidth={isShort ? 9 : 16}
            />
        </div>
    )
}

export default Video