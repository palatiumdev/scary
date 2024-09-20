const Stats = ({ stats }) => {

    return (
        <div className="lg:flex grid place-content-center gap-16 w-full">
            {stats.map((stat, i) => {
                return <Stat number={stat.number} text={stat.text} key={i} />
            })}
        </div>
    )
}

const Stat = ({ number, text }) => {
    return (
        <div className="w-full">
            <div className="bg-primary w-full h-fit p-5 rounded-3xl text-center grid place-items-center text-text-accent ">
                <div>
                    <h1 className="text-4xl sm:text-5xl">{number}</h1>
                    <p className="text-3xl font-mono">{text}</p>
                </div>
            </div>
        </div>

    )
}
export default Stats