import Testimonial from "../Testimonial/Testimonial"
import Video from "../Video/Video"

const Showcase = ({ videos, text, channelId, testimonial, isShort }) => {
    let videoCols = videos.length - 1;

    if (videoCols > 3) {
        videoCols = 3;
    } else if (videoCols < 2) {
        videoCols = 2;
    }

    let shortsSpan;
    isShort ? shortsSpan = 2 : shortsSpan = 1;

    return (
        <div className="grid xl:grid-cols-2 w-full px-5 lg:px-56 gap-16 place-items-center">
            <div className="grid gap-8 w-full">
                <div>
                    <Video videoId={videos[0]?.videoId} />
                </div>
                <div className={`w-full grid gap-8 border-red-500 border`} style={{ gridTemplateColumns: `repeat(${videoCols}, minmax(0, 1fr));` }} >

                    {videos.map((video, i) => {
                        if (i != 0) {
                            return (
                                <div key={i} className=" border ">
                                    <Video videoId={videos[i]?.videoId} isShort={isShort} />
                                </div>
                            )
                        }
                    })}
                </div>

            </div>
            <div className="grid gap-8">
                <div className="bg-accent/50 rounded-3xl p-10 grid gap-4 max-w-[40rem] 2xl:w-[40rem] min-h-fit place-content-center text-6xl font-extrabold text-center">
                    <p>{text}</p>
                </div>
                {testimonial && (<div className="w-full grid place-content-center">
                    <Testimonial
                        channelId={channelId}
                        testimonial={testimonial}
                        videoId={""}
                    />
                </div>)}
            </div>
        </div>
    )
}




export default Showcase