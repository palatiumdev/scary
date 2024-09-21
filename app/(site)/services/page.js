import { getServices } from "@/sanity/sanity-utils"

export default async function Home() {
    const services = getServices()
    return (
        <>
            {services[0]?.services.map((service, i) => {
                return (
                    <Skill key={i} icon={service.icon} title={service.title} />
                )
            })}
        </>
    )
}

const Skill = ({ icon, title }) => {
    return (
        <div className="grid size-80 place-items-center p-10 bg-backgroundAccent dark:bg-darkBackgroundAccent rounded-3xl">
            <div className="fill-black dark:fill-background">{icon}</div>
            <div>
                <p className="text-3xl font-bold text-black dark:text-background text-center">{title}</p>
            </div>
        </div>
    )
}