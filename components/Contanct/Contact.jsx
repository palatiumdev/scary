"use client"
//functions
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"

const Contact = ({ icon, action, enableAnimation = false }) => {
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setCopied(false)
        }, 1500)
        return () => clearTimeout(timer)
    }, [copied])

    return (
        <button className="relative grid place-items-center" onClick={() => { action(); setCopied(true) }}>
            {icon}
            <AnimatePresence>
                {copied && enableAnimation &&
                    (<motion.p
                        className=" absolute -bottom-5 bg-primary p-1 px-2 rounded-3xl"
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

        </button>

    )
}

export default Contact