"use client"

//Components
import { TbArrowBigRightFilled } from "react-icons/tb";

const Button = ({ text }) => {
    return (
        <div className="bg-primary rounded-3xl text-4xl font-extrabold w-full px-10 py-5  grid place-items-center">
            <button onClick={() => { window.open("https://x.com/ScaryAM__", "_blank") }} className="flex gap-4 items-center">
                <p>{text}</p>
                <TbArrowBigRightFilled />
            </button>
        </div>
    )
}

export default Button