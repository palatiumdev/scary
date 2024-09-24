import Shorts from "@/components/Carousel/Shorts";
import ContactText from "@/components/Contanct/ContactText";
import Creator from "@/components/Creator/Creator";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import Stats from "@/components/Stats/Stats";
import Short from "@/components/Video/Short";
import VideoTestimonial from "@/components/VideoTestimonial/VideoTestimonial";

import { getHome } from "@/sanity/sanity-utils";

export default async function Home() {
  const home = await getHome();

  return (
    <main className="flex min-h-screen flex-col items-center gap-32 pb-32 px-5 lg:px-16 xl:px-32">
      <div className="grid gap-8">
        <Hero
          heroText={home[0]?.heroText}
          heroButtonText={home[0]?.heroButtonText}
          heroVideo={home[0]?.heroVideoUrl}
        />

        <div
          className="w-[80vw] overflow-clip grid place-content-center"
          style={{
            maskImage: "linear-gradient(to right, transparent, black, black, transparent)",
          }}
        >
          <Slider gap={30}>
            {home[0]?.creators.map((creator, i) => (
              <Creator channelId={creator.channelId} key={i} />
            ))}
          </Slider>
        </div>
      </div>

      <div className="grid place-items-center w-full gap-8">
        <h1 className="text-5xl text-primary">Work</h1>
        <VideoTestimonial videos={home[0]?.videos} />
      </div>

      <div className="w-full flex flex-col items-center gap-8">
        <h1 className="text-5xl text-primary">Shorts</h1>
        {/*         <Shorts shorts={home[0]?.shorts} />
 */}
        {/* If you want to display the shorts in a separate slider, keep this block */}
        <div
          className="w-[80vw] overflow-clip grid place-content-center"
          style={{
            maskImage: "linear-gradient(to right, transparent, black, black, transparent)",
          }}
        >
          <Slider gap={20}>
            {home[0]?.shorts.map((short, i) => (
              <div className="w-80 m-5" key={i}>
                <Short videoId={short.videoId} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className="w-5/6">
        <Stats stats={home[0]?.stats} />
      </div>

      <div className="grid gap-8 text-center">
        <h1 className="text-5xl text-primary">Contact</h1>
        <ContactText
          contact={home[0]?.contact}
          contactButtonText={home[0]?.contactButtonText}
        />
      </div>
    </main>
  );
}
