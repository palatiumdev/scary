"use client"

import Video from "../Video/Video"

const Showcase = ({ videos, text }) => {
    return (
        <div className="grid xl:grid-cols-2 w-full px-5 lg:px-56 gap-16 place-items-center">
            <div className="grid gap-8 w-full">
                <div>
                    <Video videoId={videos[0].videoId} />
                </div>
                <div className={`w-full grid grid-cols-${videos.length - 1} gap-8`}>

                    {videos.map((video, i) => {
                        if (i != 0) {
                            return (
                                <div key={i}>
                                    <Video videoId={videos[i].videoId} />
                                </div>
                            )
                        }
                    })}
                </div>

            </div>
            <div className="bg-accent/50 rounded-3xl p-10 grid gap-4 max-w-[40rem] 2xl:w-[40rem] min-h-fit place-content-center text-6xl font-extrabold text-center">
                <p>{text}</p>
            </div>
        </div>
    )
}

/*
        <div className="grid grid-cols-2 gap-16 w-full">
            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:gap-16 gap-8 w-full" >
                    <div className="bg-red-500 w-full">
                        <Video videoId={videos[0]} />
                    </div>
                </div>

                <div className="flex w-1/2 bg-green-500">
                    {videos.map((video, i) => (
                        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:gap-16 gap-8 w-full" key={i}>
                            <div className="bg-red-500 w-full">
                                <Video videoId={videos[i + 1]} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="w-full grid place-content-center">
                <p>{text}</p>
            </div>
        </div>
*/

export default Showcase