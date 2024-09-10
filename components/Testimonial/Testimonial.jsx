import getCreator from "@/Data/getCreators"
import Image from "next/image"
import { FaStar } from "react-icons/fa";

const Testimonial = async ({ channelId, testimonial }) => {
    const user = await getCreator(channelId)

    return (
        <div className="bg-accent/50 rounded-3xl p-10 grid gap-4 max-w-[40rem] min-h-fit">
            <div className="flex w-full justify-between	lg:gap-8 lg:flex-row flex-col gap-4">
                <div className="flex items-center gap-4">
                    <Image
                        src={user.profileImage}
                        width={"60"}
                        height={"60"}
                        className="rounded-full"
                    />
                    <div>
                        <h1 className="text-3xl font-extrabold text-nowrap">{user.username}</h1>
                        <p className="text-2xl font-mono">{user.subCount} Subscribers</p>
                    </div>

                </div>
                <div className="flex text-2xl gap-2 text-yellow-300  pt-[5px]">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
            </div>
            <p className="text-2xl font-mono text-wrap">{testimonial}</p>
        </div>
    )
}

export default Testimonial