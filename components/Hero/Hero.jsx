import Button from "../Button/Button"

const Hero = () => {
    return (
        <div className="relative w-full h-[40rem] grid place-content-center rounded-3xl overflow-clip">

            <div className="absolute inset-0 size-full grid place-content-center place-items-center gap-8 z-10">
                <h1 className="text-6xl font-extrabold z-20">Level Up Your Editing Game 🚀</h1>
                <Button text={"Send me a DM"} />
            </div>
            <div className="absolute size-full bg-background/50"></div>

            <video autoPlay muted loop className="h-full w-screen">
                <source src="movie.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
}

/*

*/

export default Hero