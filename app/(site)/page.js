import ContactText from "@/components/Contanct/ContactText";
import Creator from "@/components/Creator/Creator";
import Hero from "@/components/Hero/Hero";
import Slider from "@/components/Slider/Slider";
import Stats from "@/components/Stats/Stats";
import VideoTestimonial from "@/components/VideoTestimonial/VideoTestimonial";
import { PortableText } from "@portabletext/react";

import { getHome } from "@/sanity/sanity-utils";
import Video from "@/components/Video/Video";
import ShortTestimonial from "@/components/ShortTestimonial/ShortTestimonial";
import Showcase from "@/components/Showcase/Showcase";

export default async function Home() {
  const home = await getHome();

  // Add error handling for when home data is not available
  if (!home || home.length === 0) {
    console.error("No home data found");
    return <div>Loading...</div>;
  }

  const myPortableTextComponents = {
    marks: {
      textColor: ({ children, value }) => (
        <span style={{ color: value.value }}>{children}</span>
      ),
      highlightColor: ({ children, value }) => (
        <span style={{ background: value.value }}>{children}</span>
      ),
    },
  };

  const numberOfShowcaseItems = home[0]?.showcase?.length;

  return (
    <main className="flex min-h-screen flex-col items-center gap-32 pb-32 px-5 lg:px-16">
      <div className="grid gap-8">
        <Hero
          heroText={
            home[0]?.heroText ? (
              <PortableText
                value={home[0].heroText}
                components={myPortableTextComponents}
              />
            ) : null
          }
          heroButtonText={home[0]?.heroButtonText}
          heroVideo={home[0]?.heroVideoUrl}
        />

        <section className="w-full flex flex-col items-center gap-8">
          <h1 className="text-6xl text-primary">Our Creators</h1>
          <div
            className="w-[80vw] overflow-clip grid place-content-center"
            style={{
              maskImage:
                "linear-gradient(to right, transparent, black, black, transparent)",
            }}
          >
            <Slider velocity={100} gap={220}>
              {home[0]?.creators?.map((creator, i) => (
                <Creator channelId={creator.channelId} key={i} />
              ))}
            </Slider>
          </div>
        </section>
      </div>

      <div className="grid place-items-center w-full gap-8">
        <h1 className="text-6xl text-primary">Work</h1>
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 w-full">
          {numberOfShowcaseItems > 0 && (
            <>
              <div className="flex flex-col items-center gap-12">
                {home[0]?.showcase?.map((showcaseItem, i) => {
                  if (i % 2 === 0 || i === numberOfShowcaseItems - 1)
                    return (
                      <div key={i} className={`w-full rounded-2xl p-8 ${i % 2 === 0 ? 'bg-primary/10' : 'bg-white'}`}>
                        <Showcase
                          videos={showcaseItem.showcaseVideos}
                          text={showcaseItem.showcaseText}
                          testimonial={showcaseItem.testimonial}
                          channelId={showcaseItem.channelId}
                          isShort={showcaseItem.isShort}
                        />
                      </div>
                    );
                })}
              </div>
              <div className="flex flex-col items-center gap-12">
                {home[0]?.showcase?.map((showcaseItem, i) => {
                  if (i % 2 !== 0 && i !== numberOfShowcaseItems - 1)
                    return (
                      <div key={i} className={`w-full rounded-2xl p-8 ${i % 2 === 0 ? 'bg-primary/10' : 'bg-white'}`}>
                        <Showcase
                          videos={showcaseItem.showcaseVideos}
                          text={showcaseItem.showcaseText}
                          testimonial={showcaseItem.testimonial}
                          channelId={showcaseItem.channelId}
                          isShort={showcaseItem.isShort}
                        />
                      </div>
                    );
                })}
                <div className="w-full rounded-2xl p-8 bg-primary/10">
                  <VideoTestimonial full={true} videos={home[0]?.videos.slice(4, 5)} />
                </div>
              </div>
            </>
          )}
        </div>
        <VideoTestimonial videos={home[0]?.videos.slice(0, 4)}/>
        <VideoTestimonial full={true} className={'w-full max-w-[1200px] [&>div:mx-auto]'} videos={home[0]?.videos.slice(5, 6)}/>
      </div>

      <div className="w-full flex flex-col items-center gap-16">
        <div className="w-full flex flex-col items-center gap-8">
          <h1 className="text-6xl text-primary">Shorts</h1>
          <ShortTestimonial videos={home[0]?.shortsTestimonials} />
        </div>
        <div
          className="w-[80vw] overflow-clip grid place-content-center"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black, black, transparent)",
          }}
        >
          <Slider velocity={100} gap={200}>
            {home[0]?.shorts?.map((short, i) => (
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
        <h1 className="text-6xl text-primary">Book a Meeting</h1>
        <div className="max-w-2xl mx-auto text-xl mb-8">
          Ready to take your content to the next level? Book a consultation
          meeting with us to discuss your project and how we can help you
          achieve your goals.
        </div>
        <ContactText
          contact={home[0]?.contact}
          contactButtonText="Schedule Meeting"
        />
      </div>
    </main>
  );
}
