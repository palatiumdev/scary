import Shorts from "../Carousel/Shorts";
import Scene from "../Scene/Scene";

const Footer = ({ footerBackgroundText }) => {
    return (
        <>
            <div className="w-full gap-4 grid place-content-center overflow-x-clip">
                <h1 className="text-[20rem] font-extrabold text-white">
                    {footerBackgroundText}
                </h1>
            </div>
            <div className="absolute bottom-0 text-center right-0 left-0 grid place-items-center mb-5">
                <p className="font-mono text-xl">
                    Built by{" "}
                    <a
                        href="https://x.com/PalatiumDev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary"
                    >
                        @PalatiumDev
                    </a>
                </p>
            </div>
        </>

    );
};

export default Footer;