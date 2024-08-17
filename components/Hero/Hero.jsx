import Button from "../Button/Button"

const Hero = ({ heroText, heroButtonText, heroVideo }) => {
    return (
        <div className="relative w-full h-[40rem] grid place-content-center rounded-3xl overflow-clip">

            <div className="absolute inset-0 size-full grid place-content-center text-center place-items-center gap-8 z-10">
                <h1 className="text-6xl font-extrabold z-20">{heroText}</h1>
                <Button text={heroButtonText} />
            </div>
            <div className="absolute size-full bg-background/80"></div>

            <video autoPlay muted loop className="h-screen w-screen rounded-3xl object-cover">
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

export default Hero