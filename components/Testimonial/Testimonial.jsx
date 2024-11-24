import getCreator from "@/Data/getCreators"
import getLikes from "@/Data/getLikes";
import getViews from "@/Data/getViews";
import Image from "next/image"

import { FaRegEye } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa6";

const Testimonial = async ({ channelId, testimonial, videoId }) => {
    const user = await getCreator(channelId)
    let likes;
    let views;

    if (!testimonial) {
        if (videoId != "") {
            likes = await getLikes(videoId);
            views = await getViews(videoId);
        }
    }

    return (
        <div className="bg-accent/50 rounded-3xl p-10 grid gap-4 max-w-[40rem] 2xl:w-[40rem] min-h-fit" >
            <div className="flex w-full justify-between	lg:gap-8 lg:flex-row flex-col gap-4">
                <div className="flex items-center gap-4">
                    <Image
                        src={user.profileImage}
                        width={testimonial ? "60" : "90"}
                        height={testimonial ? "60" : "90"}
                        className="rounded-full"
                    />
                    <div>
                        <h1 className="text-3xl font-extrabold text-nowrap">{user.username}</h1>
                        <p className="text-2xl font-mono">{user.subCount.toLocaleString('de-DE')} Subscribers</p>
                    </div>

                </div>
            </div>
            {testimonial ?
                <p className="text-2xl font-mono text-wrap">{testimonial}</p>
                :
                <div className="flex gap-8">
                    <div className="flex gap-4 place-items-center text-2xl font-mono">
                        <FaRegEye />
                        {views.toLocaleString('de-DE')}
                    </div>
                    <div className="flex gap-4 place-items-center text-2xl font-mono">
                        <FaThumbsUp />
                        {likes.toLocaleString('de-DE')}
                    </div>
                </div>
            }
        </div>
    )
}

export default Testimonial