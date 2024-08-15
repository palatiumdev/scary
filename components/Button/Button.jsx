"use client"
const Button = ({ text }) => {
    return (
        <div className="bg-primary rounded-3xl text-4xl font-extrabold w-fit px-10 py-5 ">
            <button onClick={() => { window.open("https://x.com/vfxpjb", "_blank") }}>
                <p>{text}</p>
            </button>
        </div>
    )
}

export default Button