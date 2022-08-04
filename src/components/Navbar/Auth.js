import { Menu } from '@headlessui/react';
import { Icon } from 'Icons';


function Auth() {
    const user = {
        name: "Furkan's",
        avatar: "https://i.scdn.co/image/ab6775700000ee851ce86b4c586578e67b807ebc"
    }

    return (
        <Menu>
            <Menu.Button className={"flex items-center h-8 rounded-3xl pr-2 bg-black hover:bg-active"}>
                <img className={"w-8 h-8 rounded-full p-0.5 mr-2"} src={user.avatar} alt={"furkan's"} />
                <span className={"text-sm font-semibold mr-2"}>{user.name}</span>
                <Icon name="downDir" size={16} />
            </Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                        >
                            Account settings
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                        >
                            Documentation
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item disabled>
                    <span className="opacity-75">Invite a friend (coming soon!)</span>
                </Menu.Item>
            </Menu.Items>
        </Menu>

    )
}

export default Auth;