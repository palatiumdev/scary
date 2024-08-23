"use client"
import Image from "next/image"
import MediaQuery from 'react-responsive'

const Header = ({profile, headerButtonText }) => {
    return (
        <div className="w-full flex justify-center lg:justify-between items-center bg-accent py-5 px-8 rounded-3xl">
            <MediaQuery minWidth={770}>
                <div className="flex justify-start">
                    <Image src={"/logo.png"} height={100} width={100} />
                </div>
            </MediaQuery>

            <button className="flex justify-center" onClick={() => { window.open("https://x.com/vfxpjb", "_blank") }}>
                <Image src={profile} height={120} width={120} className="rounded-full" />
            </button>

            <MediaQuery minWidth={770}>
                <div className="flex justify-end">
                    <button className="bg-primary h-fit rounded-2xl font-extrabold text-2xl py-3 px-6" onClick={() => { window.open("https://x.com/vfxpjb", "_blank") }}>
                        {headerButtonText}
                    </button>
                </div>
            </MediaQuery>
        </div>
    )
}

export default Header
