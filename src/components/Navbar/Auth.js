import { Menu } from '@headlessui/react';
import { Icon } from 'Icons';


function Auth() {
    const user = {
        name: "Furkan's",
        avatar: "https://i.scdn.co/image/ab6775700000ee851ce86b4c586578e67b807ebc"
    }

    return (

        <Menu as="nav" className={"relative"}>
            {({ open }) => (
                <>
                    <Menu.Button className={`flex items-center h-8 rounded-3xl pr-2 ${open ? 'bg-active' : 'bg-black'}`}>
                        <img className={"w-8 h-8 rounded-full p-0.5 mr-2"} src={user.avatar} alt={"furkan's"} />
                        <span className={"text-sm font-semibold mr-2"}>{user.name}</span>
                        <span className={`${open && 'rotate-180'}`}>
                            <Icon name="downDir" size={16} />
                        </span>
                    </Menu.Button>
                    <Menu.Items className="w-48 rounded absolute top-full right-0 bg-active translate-y-2 z-10">
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 text-sm items-center justify-between px-2 rounded flex ${active && 'bg-white bg-opacity-10'}`}
                                    href="/account-settings"
                                >
                                    Account
                                    <Icon size={16} name="external" />
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 text-sm items-center justify-between px-2 rounded flex ${active && 'bg-white bg-opacity-10'}`}
                                    href="/profile"
                                >
                                    Profile
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={`h-10 text-sm items-center justify-between px-2 rounded flex ${active && 'bg-white bg-opacity-10'}`}
                                    href="/logout"
                                >
                                    Logout
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu>

    )
}

export default Auth;