import getCreator from "@/Data/getCreators"
import Image from "next/image"

const Creator = async ({ channelId }) => {
    const user = await getCreator(channelId)

    return (
        <div className="flex gap-8 items-center">
            {/*The image size depends on this div*/}
            <div className="relative size-16">
                <Image
                    src={user.profileImage}
                    fill={true}
                    className="absolute rounded-full"
                    alt="Profile picture of the creator"
                />
            </div>
            <div>
                <h1 className="text-3xl font-extrabold">{user.username}</h1>
                <p className="text-2xl font-extrabold text-primary font-mono">{user.subCount} subs</p>
            </div>
        </div>
    )
}

export default Creator