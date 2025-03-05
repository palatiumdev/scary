import Video from '../Video/Video'
import Testimonial from '../Testimonial/Testimonial'

const VideoTestimonial = ({ videos, full, className }) => {

    return (
        <div className={"grid gap-8 grid-cols-1 w-full" + (!full ? " lg:grid-cols-2" : "") + (className ? " " + className : "")}>
            {videos.map((video, i) => (
                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 w-full p-4 bg-accent/50 rounded-3xl" key={i}>
                    {/* <div className={`w-full ${i % 2 === 0 ? "lg:order-1" : "lg:order-0"}`}> */}
                    <div className={`w-full`}>
                        <Video videoId={video.videoId} />
                    </div>
                    <div className="w-full grid place-content-center">
                        <Testimonial
                            channelId={video.channelId}
                            testimonial={video.testimonial}
                            videoId={video.videoId}
                        />
                    </div>
                </div>
            ))}

        </div>
    )
}

export default VideoTestimonial
