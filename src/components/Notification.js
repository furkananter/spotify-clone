import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from 'Icons'
import { Dialog } from '@headlessui/react'

export default function MyDialog() {
    let [isOpen, setIsOpen] = useState(true)

    // create  link for Link react router dom
    const Links = () => {
        <NavLink to="/hasdasd" />
    }


    return (
        <Dialog
            className="w-full h-full"
            open={isOpen} onClose={() => setIsOpen(false)}>
            <Dialog.Panel className={` absolute bottom-32 bg-black bg-opacity-50 p-6 right-10 backdrop-blur-md text-white drop-shadow-lg flex flex-col rounded-md `}>
                <Dialog.Title className="font-semibold text-2xl mb-4">Give me a Star on Github!</Dialog.Title>
                <div className='flex justify-between'>
                <button className="self-start bg-primary rounded-md p-2 text-sm border-none outline-none" onClick={() => setIsOpen(false)}>Got it, Thanks</button>
                <button className=" bg-primary rounded-md p-2 text-sm border-none outline-none">
                    <a href="https://github.com/furkananter/spotify-clone" target="_blank">
                        <Icon name="github" size={18} />
                    </a>
                </button>
                </div>
            </Dialog.Panel>
        </Dialog>
    )
}