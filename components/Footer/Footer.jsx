import Shorts from "../Carousel/Shorts";
import Scene from "../Scene/Scene";

const Footer = ({ footerText, footerBackgroundText, contactText }) => {
    return (
        <div className="bg-BGaccent w-full gap-4 grid place-content-center overflow-x-clip">
            <div className="relative">
                {/* Background text positioned behind contact text */}
                <div className="absolute inset-0 w-full grid place-content-center">
                    <h1 className="text-[20rem] font-extrabold text-background">
                        {footerBackgroundText}
                    </h1>
                </div>
                {/* Contact text displayed above background text */}
                <div className="relative z-10">
                    {contactText}
                </div>
            </div>
        </div>

    );
};

export default Footer;

/*
            <div className="relative z-10">
                {contactText}
                <div className="absolute w-full inset-0 flex justify-center items-center z-0">
                    <h1 className="text-[20rem] font-extrabold text-background">
                        {footerBackgroundText}
                    </h1>
                </div>
            </div>

                        <div className="grid place-items-center mb-4 z-10">
                <p className="text-base font-mono">{footerText}</p>
                <p className="text-base font-mono">
                    Built by{" "}
                    <a
                        href="https://x.com/PalatiumDev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        @PalatiumDev
                    </a>
                </p>
            </div>

            */