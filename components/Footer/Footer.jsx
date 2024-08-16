import Shorts from "../Carousel/Shorts"
import Scene from "../Scene/Scene"

const Footer = () => {
    return (
        <div className="relative bg-BGaccent h-1/3 w-full grid place-content-center">
            <div className="absolute w-full inset-0">
                <Scene />
            </div>
            <div className="text-center text-background">
                <h1 className="text-[20rem] font-extrabold ">VFXPJB</h1>
            </div>
            <div className="absolute bottom-8 inset-x-0 text-center ">
                <p className="text-base font-mono">VFXPJB</p>
                <p className="text-base font-mono">Copyright 2024. VFXPJB - All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer