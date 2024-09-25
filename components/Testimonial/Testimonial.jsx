import getCreator from "@/Data/getCreators"
import Image from "next/image"
import { FaStar } from "react-icons/fa";

const Testimonial = async ({ channelId, testimonial }) => {
    const user = await getCreator(channelId)


    return (
        <div className="bg-accent/50 rounded-3xl p-10 grid gap-4 max-w-[40rem] 2xl:w-[40rem] min-h-fit">
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
            {testimonial && <p className="text-2xl font-mono text-wrap">{testimonial}</p>}
        </div>
    )
}

export default Testimonial