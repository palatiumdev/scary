import Image from "next/image";

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-background gap-32 pb-32 pt-8 px-5 lg:px-16 xl:px-32">

            <div className="grid place-items-center w-full gap-8">
                <h1 className="text-5xl text-primary">About me</h1>
                <div className="grid lg:grid-cols-2 place-items-center gap-8 lg:gap-0">
                    <div className="relative bg-slate-50 size-96 rounded-3xl overflow-clip">
                        <Image
                            src={""}
                            fill={true}
                            className="absolute"
                        />
                    </div>
                    <div>
                        <h1 className="text-4xl">Anthony Marino</h1>
                        <p className="text-3xl font-mono">I’m a 21-year-old content producer and video editor with 150M+ views for clients like LankyBox, SypherPK, ChicaLive, FaZeEsports, and more. Currently with @onistudiosgg, I turn raw footage into content that captivates and delivers results.</p>
                    </div>
                </div>

            </div>

            <div className="grid place-items-center w-full gap-8">
                <h1 className="text-5xl text-primary">Education</h1>
                <div className="grid  lg:grid-cols-2 gap-8 place-items-center">
                    <div className="relative bg-slate-50 w-96 h-96 lg:h-full rounded-3xl overflow-clip">
                        <Image
                            src={""}
                            fill={true}
                            className="absolute"
                        />
                    </div>
                    <div className="grid gap-8">
                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl">Mercy University</h1>
                            <p className="text-3xl font-mono">Manhattan, NY • September 2023 - Present</p>
                        </div>

                        <div className="grid gap-8">
                            <div className="bg-accent rounded-3xl px-20 py-16 grid text-center gap-8 place-items-center">
                                <h1 className="text-3xl">Bachelor of Science in Marketing</h1>
                            </div>
                            <div className="bg-accent rounded-3xl px-20 py-16 grid text-center gap-8 place-items-center">
                                <h1 className="text-3xl">GPA: 3.7 (Dean's List)</h1>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div className="grid place-items-center w-full gap-8">
                <h1 className="text-5xl text-primary">Work</h1>
                <div className="grid gap-8">
                    <div className="grid gap-4">
                        <h1 className="text-4xl">OniStudios</h1>
                        <div className="relative bg-slate-50 overflow-clip rounded-3xl w-full h-[35rem]">
                            <Image
                                src={""}
                                fill={true}
                                className="absolute"
                            />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 text-center lg:text-left gap-8">
                        <div className="grid gap-8">
                            <div className="bg-accent rounded-3xl px-20 py-16 text-center gap-8 grid place-items-center">
                                <h1 className="text-4xl">Jan 2024 - Present</h1>
                            </div>

                            <div className="bg-accent rounded-3xl px-20 py-16 grid text-center gap-8 place-items-center">
                                <h1 className="text-4xl">Online/Virtual</h1>
                            </div>
                        </div>

                        <p className="text-3xl font-mono">
                            OniStudios has become a cornerstone in the gaming industry! It is a content studio renowned for their work with Fortnite content and founded by “SypherPK” and his wife “Manishie”!

                            Some of the most widely known brands that OniStudios has worked with include: Epic Games, Nvidia, JBL, Paramount, AMD, and many more!

                            OniStudios Has cultivated over 28 million followers, 18 thousand hours of content created, and averages over 364 million views per month! On top of that, they have executed over 170 successful brand campaigns!

                            I edit content videos for OniStudios, specifically longform YouTube videos for their creators/brands and I always deliver before the deadline!
                        </p>
                    </div>
                </div>
            </div>

            <div className="grid place-items-center w-full gap-8">
                <h1 className="text-5xl text-primary">Clients</h1>
                <div>
                    <div className="relative bg-slate-50 overflow-clip size-80 rounded-t-3xl">
                        <Image
                            src={""}
                            fill={true}
                            className="absolute"
                        />
                    </div>
                    <div className="bg-accent w-80 h-32 rounded-b-3xl text-center grid place-content-center">
                        <h1 className="text-4xl">Username</h1>
                        <p className="text-2xl font-mono"> 39M subscribers</p>
                    </div>
                </div>
            </div>


        </main>
    )
}