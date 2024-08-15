import getCreator from "@/Data/getCreators"
import Image from "next/image"

const Testimonial = async ({ channelId, testimonial }) => {
    const user = await getCreator(channelId)

    return (
        <div className="w-full">
            <div className="bg-accent/50 rounded-3xl p-10 grid gap-4 w-[40rem] h-fit">
                <div className="flex items-center gap-4">
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
                </div>
                <p className="text-2xl font-mono">{testimonial}</p>
            </div>
        </div>
    )
}

export default Testimonial