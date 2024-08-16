import getCreator from "@/Data/getCreators"
import Image from "next/image"
import { FaStar } from "react-icons/fa";

const Testimonial = async ({ channelId, testimonial }) => {
    const user = await getCreator(channelId)

    return (
        <div className="w-full">
            <div className="bg-accent/50 rounded-3xl p-10 grid gap-4 w-[40rem] h-fit">
                <div className="relative flex items-center gap-4">
                    <Image
                        src={user.profileImage}
                        width={"60"}
                        height={"60"}
                        className="rounded-full"
                    />
                    <div>
                        <h1 className="text-3xl font-extrabold">{user.username}</h1>
                        <p className="text-2xl font-mono">{user.subCount} Subscribers</p>
                    </div>
                    <div className="absolute top-0 right-0 flex text-2xl gap-2 text-yellow-300">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>
                </div>
                <p className="text-2xl font-mono">{testimonial}</p>
            </div>
        </div>
    )
}

export default Testimonial