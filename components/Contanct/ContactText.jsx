"use client"
import Button from '../Button/Button'
import Contact from './Contact'
import { FaDiscord } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";


const ContactText = ({ contact, contactButtonText }) => {
    return (
        <div className='grid place-content-center gap-8 h-full text-center px-5'>
            <p className='text-5xl font-mono'>{contact}</p>
            <div className='flex gap-8 w-full place-content-center'>
                <div className="bg-primary rounded-3xl w-fit px-10 py-5 grid place-content-center">
                    <Contact icon={<FaDiscord size={50} />} action={() => { window.open("https://discordid.netlify.app/?id=762402570286792745", "_blank") }} />
                </div>
                <Button text={contactButtonText} />
                <div className="bg-primary rounded-3xl w-fit px-10 py-5 grid place-content-center">
                    <Contact enableAnimation={true} icon={<IoIosMail size={50} />} action={() => { navigator.clipboard.writeText("vfxpjb@gmail.com") }} />
                </div>
            </div>
        </div>
    )
}

export default ContactText