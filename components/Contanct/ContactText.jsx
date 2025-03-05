"use client"
import Button from '../Button/Button'


const ContactText = ({ contact, contactButtonText }) => {
    return (
        <div className='grid place-content-center gap-8 h-full text-center px-5'>
            <p className='text-5xl font-mono'>{contact}</p>
            <div className='grid grid-cols-2 lg:flex  gap-8 w-full place-content-center place-items-center'>
                <div className='col-span-2 w-full lg:w-96 order-1'>
                    <Button text={contactButtonText} />
                </div>
            </div>
        </div>
    )
}

export default ContactText