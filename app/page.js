import Shorts from "@/components/Carousel/Shorts";
import ContactText from "@/components/Contanct/ContactText";
import Creator from "@/components/Creator/Creator";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import Testimonial from "@/components/Testimonial/Testimonial";
import Video from "@/components/Video/Video";

import { getHome } from "@/sanity/sanity-utils";

export default async function Home() {
  const home = await getHome();

  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex min-h-screen flex-col items-center bg-background rounded-b-3xl gap-32 pb-32 pt-8 px-10 lg:px-32">
        <div className="flex flex-col items-center gap-16 w-full">
          <Header
            profile={home[0].profile}
            headerButtonText={home[0].headerButtonText}
          />
          <Hero
            heroText={home[0].heroText}
            heroButtonText={home[0].heroButtonText}
            heroVideo={home[0].heroVideoUrl}
          />
          <div
            className="w-full overflow-clip"
            style={{ maskImage: 'linear-gradient(to right, transparent, black, transparent)' }}
          >
            <Slider>
              {home[0].creators.map((creator, i) => (
                <Creator channelId={creator.channelId} key={i} />
              ))}
            </Slider>
          </div>
        </div>

        <div className="grid place-items-center gap-16 w-full">
          {home[0].videos.map((video, i) => (
            <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-16 w-full" key={i}>
              <div className="w-full">
                <Video videoId={video.videoId} />
              </div>
              <div className="w-full grid place-content-center">
                <Testimonial
                  channelId={video.channelId}
                  testimonial={video.testimonial}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-32 pt-32 w-full bg-accent">
        <div className="w-full flex flex-col items-center gap-16">
          <Shorts shorts={home[0].shorts} />
        </div>
        <ContactText contact={home[0].contact} contactButtonText={home[0].contactButtonText} />
        <Footer footerText={home[0].footerText} footerBackgroundText={home[0].footerBackgroundText} />
      </div>
    </main>
  );
}
