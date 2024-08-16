import Shorts from "@/components/Carousel/Shorts";
import ContactText from "@/components/Contanct/ContactText";
import Creator from "@/components/Creator/Creator";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import Testimonial from "@/components/Testimonial/Testimonial";
import Video from "@/components/Video/Video";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-background rounded-b-3xl gap-32 pb-32 pt-8 px-32">
      <div className="grid place-items-center place-content-center gap-16">
        <Header />
        <Hero />
        <div className="overflow-clip grid place-content-center w-[100rem]" style={{ maskImage: 'linear-gradient(to right, transparent,  black, transparent)', }}>
          <Slider>
            <Creator channelId={"UC14fB9eWBu579yRWLUhbFdQ"} />
            <Creator channelId={"UCragU9SBVhC3bhv2Qv4JuHA"} />
            <Creator channelId={"UCTs5PJGf9AwnA7mNV3ejNTQ"} />
            <Creator channelId={"UCragU9SBVhC3bhv2Qv4JuHA"} />
            <Creator channelId={"UCTs5PJGf9AwnA7mNV3ejNTQ"} />
          </Slider>
        </div>
      </div>

      <div className="grid place-items-center gap-16 w-full">
        <h1 className="text-5xl font-extrabold">Work</h1>
        <div className="grid grid-cols-2 place-items-center gap-16 w-full">
          <div className="w-full">
            <Video videoId={"bHxgNeEwX_g"} />
          </div>
          <div className="w-full grid place-content-center">
            <Testimonial channelId={"UCTs5PJGf9AwnA7mNV3ejNTQ"} testimonial={"bro...that edit is incredible!!🙌"} />
          </div>

          <div className="w-full grid place-content-center">
            <Testimonial channelId={"UC14fB9eWBu579yRWLUhbFdQ"} testimonial={"Awesome! that was great, really happy with how this one came together."} />
          </div>
          <div className="w-full">
            <Video videoId={"ikmr85C67Do"} />
          </div>


          <div className="w-full">
            <Video videoId={"zphXiIFR2Kg"} />
          </div>
          <div className="w-full grid place-content-center">
            <Testimonial channelId={"UCztkgeXgMW_kIEa1wE1AecA"} testimonial={"Bro.... I love it, Great job man like honestly"} />
          </div>


          <div className="w-full grid place-content-center">
            <Testimonial channelId={"UCcY6UhjQ3txXXxHoWEnV3Gw"} testimonial={"That was amazing GREAT WORK MY MAN. Will def be coming back for more long/short content."} />
          </div>
          <div className="w-full">
            <Video videoId={"XLDb6T4yNYE"} />
          </div>
        </div>

      </div>
      <div className="w-full flex flex-col place-items-center gap-16">
        <h1 className="text-5xl font-extrabold">Shorts</h1>
        <Shorts />
      </div>

      <ContactText />

    </main >
  );
}
