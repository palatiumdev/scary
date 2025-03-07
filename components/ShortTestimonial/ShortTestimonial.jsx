import Video from '../Video/Video'
import Testimonial from '../Testimonial/Testimonial'

const ShortTestimonial = ({ videos }) => {

    return (
        <div className="grid gap-16">
            {videos.map((video, i) => (
                <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center lg:gap-16 gap-8 w-full" key={i}>
                    <div className="w-full">
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

export default ShortTestimonial