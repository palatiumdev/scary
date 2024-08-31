import Shorts from "../Carousel/Shorts"
import Scene from "../Scene/Scene"

const Footer = ({ footerText, footerBackgroundText, contactText }) => {
    return (
        <div className="relative bg-BGaccent h-1/3 w-full gap-12 overflow-clip grid place-content-center">
            <div className="z-10">
                {contactText}
            </div>
            <div className="absolute w-full inset-0 text-center text-background">
                <h1 className="text-[20rem] font-extrabold ">{footerBackgroundText}</h1>
            </div>
            <div className="grid place-items-center mb-4 z-10">
                <p className="text-base font-mono">{footerText}</p>
                <p className="text-base font-mono">Built by <a href="https://x.com/PalatiumDev" target="_blank" rel="noopener noreferrer">@PalatiumDev</a></p>
            </div>
        </div>
    )
}

export default Footer