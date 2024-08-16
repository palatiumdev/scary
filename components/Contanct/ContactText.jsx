"use client"
import Button from '../Button/Button'
import Contact from './Contact'
import { FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


const ContactText = () => {
    return (
        <div className='grid place-items-center gap-8 text-center'>
            <h1 className='text-5xl font-extrabold'>Contact</h1>
            <p className='text-5xl font-mono'>Let's work together! Here's how you can contact me. </p>
            <Button text={"Send me a DM"} />
            <div className='flex gap-8'>
                <Contact icon={<FaDiscord size={50} />} action={() => { window.open("https://discordid.netlify.app/?id=762402570286792745", "_blank") }} />
                <Contact enableAnimation={true} icon={<IoIosMail size={50} />} action={() => { navigator.clipboard.writeText("vfxpjb@gmail.com") }} />
            </div>
        </div>
    )
}

export default ContactText