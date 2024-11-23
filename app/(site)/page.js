import ContactText from "@/components/Contanct/ContactText";
import Creator from "@/components/Creator/Creator";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import Stats from "@/components/Stats/Stats";
import VideoTestimonial from "@/components/VideoTestimonial/VideoTestimonial";
import { PortableText } from '@portabletext/react'

import { getHome } from "@/sanity/sanity-utils";
import Video from "@/components/Video/Video";
import ShortTestimonial from "@/components/ShortTestimonial/ShortTestimonial";
import Showcase from "@/components/Showcase/Showcase";

export default async function Home() {
  const home = await getHome();

  const myPortableTextComponents = {
    // ...,
    marks: {
      textColor: ({ children, value }) => <span style={{ color: value.value }}>{children}</span>,
      highlightColor: ({ children, value }) => (
        <span style={{ background: value.value }}>{children}</span>
      ),
    },
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-32 pb-32 px-5 lg:px-16">
      <div className="grid gap-8">
        <Hero
          heroText={<PortableText value={home[0].heroText} components={myPortableTextComponents} />}
          heroButtonText={home[0]?.heroButtonText}
          heroVideo={home[0]?.heroVideoUrl}
        />

        <div className="grid w-full place-content-center">
          <div
            className="w-[80vw] overflow-clip grid place-content-center"
            style={{
              maskImage: "linear-gradient(to right, transparent, black, black, transparent)",
            }}
          >
            <Slider velocity={100} gap={220}>
              {home[0]?.creators.map((creator, i) => (
                <Creator channelId={creator.channelId} key={i} />
              ))}
            </Slider>
          </div>
        </div>

      </div>

      <div className="grid place-items-center w-full gap-8">
        <h1 className="text-5xl text-primary">Work</h1>
        {home[0]?.showcase.map((showcaseItem, i) => {
          return <Showcase videos={showcaseItem.showcase} text={showcaseItem.showcaseText} />
        })}
        <Showcase videos={home[0]?.showcaseVideos} text={home[0]?.showcaseText} />
        <VideoTestimonial videos={home[0]?.videos} />
      </div>

      <div className="w-full flex flex-col items-center gap-16">
        <div className="w-full flex flex-col items-center gap-8">
          <h1 className="text-5xl text-primary">Shorts</h1>
          <ShortTestimonial videos={home[0]?.shortsTestimonials} />
        </div>
        <div
          className="w-[80vw] overflow-clip grid place-content-center"
          style={{
            maskImage: "linear-gradient(to right, transparent, black, black, transparent)",
          }}
        >
          <Slider velocity={100} gap={170}>
            {home[0]?.shorts.map((short, i) => (
              <div className="w-96" key={i}>
                <Video videoId={short.videoId} isShort={true} />
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
