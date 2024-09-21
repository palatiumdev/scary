"use client"
//functions
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from 'react-responsive'

//components
import Link from 'next/link'

//icons
import { FaTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaDiscord } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import { GiPumpkin } from "react-icons/gi";


const Header = () => {
    const [copied, setCopied] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    if (isTabletOrMobile) {

        //Mobile
        return (
            <div className="h-full w-full rounded-3xl bg-black text-white  z-50">
                <div className="overflow-y-clip flex h-24 px-10" >
                    <div className="grid place-content-center h-full pb-2">
                        <GiPumpkin size={40} />
                    </div>

                    <button className="relative grid justify-end items-center place-self-end w-full h-full">
                        <FaBars size={35} onClick={() => setIsOpen(!isOpen)} />
                    </button>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: { opacity: 1, height: "auto" },
                                collapsed: { opacity: 1, height: 0 }
                            }}
                            className="h-96 overflow-clip grid px-10 rounded-3xl text-white place-content-center"
                        >
                            <div>
                                <ul className="grid gap-5 py-6 place-items-center">
                                    <li className="flex font-mono items-center gap-5 text-xl">
                                        <Link href="/" >Home</Link>
                                    </li>
                                    <li className="flex font-mono items-center gap-5 text-xl">
                                        <Link href="/resume" >Resume</Link>
                                    </li>
                                    <li className="flex font-mono items-center gap-5 text-xl">
                                        <Link href="/services" >Services</Link>
                                    </li>
                                    <hr className="w-full" />
                                    <li className="flex font-mono items-center gap-3 text-xl cursor-pointer" onClick={() => { window.open("https://x.com/ScaryAM__", "_blank") }}>
                                        Twitter
                                    </li>
                                    <li className="flex font-mono items-center gap-3 text-xl cursor-pointer" onClick={() => { window.open("mailto:scaryfatgaming@gmail.com") }}>
                                        Mail
                                    </li>
                                    <li className="flex font-mono items-center gap-3 text-xl cursor-pointer" onClick={() => { window.open("https://discordid.netlify.app/?id=705577855672909865", "_blank") }}>
                                        Discord
                                    </li>
                                </ul>
                            </div>
                        </motion.div>)
                    }
                </AnimatePresence>
            </div>
        )
    } else {

        //Desktop
        return (
            <div className="grid h-24 px-10 z-50 rounded-3xl bg-BGaccent text-white">
                <div className="flex w-full justify-between text-2xl font-bold">
                    <div className="w-full flex gap-8">
                        <div className="grid place-content-center h-full pb-2">
                            <GiPumpkin size={40} />
                        </div>

                        <div className="flex gap-8 items-center content-center">
                            <Link href="/" className="hover:text-primary">Home</Link>
                            <Link href="/resume" className="hover:text-primary">Resume</Link>
                            <Link href="/services" className="hover:text-primary">Services</Link>
                        </div>
                    </div>
                    <div className="flex items-center content-center gap-8">
                        <FaTwitter size={35} onClick={() => { window.open("https://x.com/ScaryAM__", "_blank") }} className="hover:fill-primary cursor-pointer" />

                        <div className="relative grid place-items-center">
                            <IoIosMail size={35} onClick={() => { navigator.clipboard.writeText("scaryfatgaming@gmail.com"); setCopied(true); setTimeout(() => setCopied(false), 3000) }} className="hover:fill-primary cursor-pointer" />
                            <AnimatePresence>
                                {copied &&
                                    (<motion.p
                                        className=" absolute -bottom-5 font-mono bg-motion.primary text-sm py-1 px-2 rounded-md bg-primary"
                                        initial={{
                                            opacity: 0,
                                        }}
                                        animate={{
                                            y: 20,
                                            opacity: 1,
                                        }}
                                        exit={{
                                            y: 1,
                                            opacity: 0,
                                        }}
                                    >
                                        Copied
                                    </motion.p>)}
                            </AnimatePresence>

                        </div>

                        <FaDiscord size={35} onClick={() => { window.open("https://discordid.netlify.app/?id=705577855672909865", "_blank") }} className="hover:fill-primary cursor-pointer" />
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header



