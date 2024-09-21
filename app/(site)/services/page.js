import { getServices } from "@/sanity/sanity-utils"
import Image from "next/image"

export default async function Home() {
    const services = await getServices()
    return (
        <main className="grid place-items-center gap-8">
            <h1 className="text-5xl text-primary">Services</h1>
            <div className="flex gap-8">
                {services[0]?.services.map((service, i) => {
                    return (
                        <Skill key={i} icon={service.icon} title={service.text} />
                    )
                })}
            </div>
        </main>
    )
}

const Skill = ({ icon, title }) => {
    return (
        <div className="grid size-80 place-items-center p-10 bg-BGaccent rounded-3xl">
            <div className="relative fill-BGaccent">
                {/*                 <Image
                    src={icon}
                    fill={true}
                    className="absolute"
                />
 */}            </div>
            <div>
                <p className="text-3xl font-bold text-white text-center">{title}</p>
            </div>
        </div>
    )
}