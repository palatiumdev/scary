import React from 'react'
import Button from '../Button/Button'

const ContactText = () => {
    return (
        <div className='grid place-items-center gap-8 text-center'>
            <h1 className='text-5xl font-extrabold'>Contact</h1>
            <p className='text-5xl font-mono'>Let's work together! Here's how you can contact me. </p>
            <Button text={"Send me a DM"} />
        </div>
    )
}

export default ContactText