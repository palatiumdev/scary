import { getResume } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export default async function Home() {
    const resume = await getResume();

    return (
        <main className="flex min-h-screen flex-col items-center bg-background gap-32 pb-32 pt-8 px-5 lg:px-16 xl:px-32">
            <div className="grid place-items-center w-full gap-8">
                <h1 className="text-5xl text-primary">About me</h1>
                <div className="grid lg:grid-cols-3 place-items-center gap-8 lg:gap-8">
                    <div className="relative size-96 rounded-3xl overflow-clip">
                        <Image
                            src="/logo2.png"
                            fill={true}
                            className="absolute object-cover"
                        />
                    </div>
                    <div className="col-span-2">
                        <h1 className="text-3xl lg:text-4xl">{resume[0].aboutTitle}</h1>
                        <p className="text-2xl lg:text-3xl font-mono text-primary">{resume[0].aboutCount} followers</p>
                        <div className="text-2xl lg:text-3xl font-mono">
                            <PortableText value={resume[0].aboutText} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid place-items-center w-full gap-8">
                <h1 className="text-5xl text-primary">Education</h1>
                {resume[0].educationList.map((educationItem, i) => (
                    <Education
                        key={i}
                        logo={educationItem.logo}
                        institution={educationItem.institution}
                        details={"Manhattan, NY • September 2022 - Present"}
                        certificate={educationItem.certificate}
                        marks={educationItem.marks}
                    />
                ))}
            </div>

            <div className="grid place-items-center gap-8 w-5/6">
                <h1 className="text-5xl text-primary">Work</h1>
                <div className="grid gap-24">
                    {resume[0].workList.map((workItem, i) => (
                        <Work
                            key={i}
                            title={workItem.title}
                            logo={workItem.logo}
                            date={workItem.date}
                            details={workItem.details}
                            info={workItem.info}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}

const Education = ({ logo, institution, details, certificate, marks }) => {
    return (
        <div className="grid lg:grid-cols-2 gap-8 place-items-center">
            <div className="relative w-96 h-96 lg:h-full rounded-3xl overflow-clip">
                <Image
                    src={logo}
                    fill={true}
                    className="absolute object-cover"
                />
            </div>
            <div className="grid gap-8">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl">{institution}</h1>
                    <p className="text-2xl lg:text-3xl font-mono">{details}</p>
                </div>

                <div className="grid gap-8">
                    <div className="bg-accent rounded-3xl px-20 py-16 grid text-center gap-8 place-items-center">
                        <h1 className="text-3xl">{certificate}</h1>
                    </div>
                    <div className="bg-accent rounded-3xl px-20 py-16 grid text-center gap-8 place-items-center">
                        <h1 className="text-3xl">{marks}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Work = ({ title, logo, date, details, info }) => {
    return (
        <div className="grid gap-8">
            <div className="grid gap-4">
                <h1 className="text-3xl lg:text-4xl">{title}</h1>
                <div className="relative overflow-clip rounded-3xl w-full h-[35rem]">
                    <Image
                        src={logo}
                        fill={true}
                        className="absolute object-cover"
                    />
                </div>
            </div>
            <div className="grid lg:grid-cols-2 text-center lg:text-left gap-8">
                <div className="grid gap-8">
                    <div className="bg-accent rounded-3xl py-16 text-center gap-8 grid place-items-center">
                        <h1 className="text-3xl lg:text-4xl">{date}</h1>
                    </div>

                    <div className="bg-accent rounded-3xl py-16 grid text-center gap-8 place-items-center">
                        <h1 className="text-3xl lg:text-4xl">{details}</h1>
                    </div>
                </div>

                <div className="text-2xl lg:text-3xl font-mono">
                    <PortableText value={info} />
                </div>
            </div>
        </div>
    );
};