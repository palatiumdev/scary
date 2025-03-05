import Testimonial from "../Testimonial/Testimonial";
import Video from "../Video/Video";

const Showcase = ({ videos, text, channelId, testimonial, isShort }) => {
  let videoCols = videos.length - 1;

  if (videoCols > 3) {
    videoCols = 3;
  } else if (videoCols < 2) {
    videoCols = 2;
  }

  let shortsSpan;
  isShort ? (shortsSpan = true) : (shortsSpan = false);

return (
    <div className="grid w-full gap-8 place-items-center grid-cols-2 h-fit min-h-[21rem]">
        {videos.length === 4 ? (
            <>
                <div className="grid gap-4 w-full grid-cols-2">
                    {videos.map((video, i) => (
                        <div
                            key={i}
                            className={`${video?.isShort ? "w-[80%]" : "w-[100%]"}`}
                        >
                            <Video
                                videoId={video?.videoId}
                                isShort={video?.isShort}
                            />
                        </div>
                    ))}
                </div>
            </>
        ) : (
            <>
                <div className={`grid gap-4 w-full`}>
                    {!videos[0]?.isShort && (
                        <div>
                            <Video videoId={videos[0]?.videoId} />
                        </div>
                    )}

                    <div
                        className={`w-full grid gap-6 place-items-center`}
                        style={{
                            gridTemplateColumns: `repeat(${videoCols}, minmax(0, 1fr))`,
                        }}
                    >
                        {videos.map((video, i) => {
                            if (i != 0 || videos[0]?.isShort) {
                                return (
                                    <div
                                        key={i}
                                        className={`${videos[i]?.isShort ? "w-[80%]" : " w-[100%]"}`}
                                    >
                                        <Video
                                            videoId={videos[i]?.videoId}
                                            isShort={videos[i]?.isShort}
                                        />
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
            </>
        )}
        <div className="flex flex-col gap-8 h-full">
            <div className="bg-accent/50 rounded-3xl p-10 grid gap-4 max-w-[40rem] h-full place-content-center text-4xl font-extrabold text-center">
                <p>{text}</p>
            </div>
        </div>
        {testimonial && (
            <div className="w-full grid place-content-center [grid-column:span_2]">
                <Testimonial
                    channelId={channelId}
                    testimonial={testimonial}
                    videoId={""}
                />
            </div>
        )}
    </div>
);
};

export default Showcase;
