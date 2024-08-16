"use client"
import Image from "next/image"

const Header = () => {
    return (
        <div className="w-full flex justify-center items-center bg-accent py-5 px-8 rounded-3xl">
            <div className="flex-1 flex justify-start">
                <Image src={"/logo.png"} height={100} width={100} />
            </div>

            <button className="flex justify-center" onClick={() => { window.open("https://x.com/vfxpjb", "_blank") }}>
                <Image src={"/profile.jpg"} height={120} width={120} className="rounded-full" />
            </button>

            <div className="flex-1 flex justify-end">
                <button className="bg-primary h-fit rounded-2xl font-extrabold text-2xl py-3 px-6" onClick={() => { window.open("https://x.com/vfxpjb", "_blank") }}>
                    Work with me
                </button>
            </div>
        </div>
    )
}

export default Header