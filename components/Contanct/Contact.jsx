"use client"
//functions
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

const Contact = ({ icon, action, enableAnimation = false }) => {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsEnabled(false)
        }, 1500)
        return () => clearTimeout(timer)
    }, [copied])

    return (
        <div className="relative grid place-items-center">
            <IoIosMail size={35} onClick={() => { action(); setCopied(true) }} className="cursor-pointer" />
            <AnimatePresence>
                {copied && enableAnimation &&
                    (<motion.p
                        className=" absolute -bottom-5"
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

    )
}

export default Contact