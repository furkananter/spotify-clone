import { Icon } from 'Icons';
import { NavLink } from 'react-router-dom';

function Menu() {
    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink
                        to={"/"}
                        className={({ isActive }) => "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4" + (isActive ? ' active' : '')}>
                        <span>
                            <Icon name="home" />
                        </span>
                        Anasayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/search"}
                        className={({ isActive }) => "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4" + (isActive ? ' active' : '')}>
                        <span>
                            <Icon name="search" />
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                {/*
                 If you don't even think about using "isActive", you should think!
                 Because you can't do this without "isActive". And if you don't use "isActive",
                 you can't give an active class to your NavLink.

                 TODO: Go to the tailwind.css file and add the following line:
                    .active {
                        @apply bg-active text-white;
                    }
                 TODO 2: Go back to the Menu.js and add the following line:
                    {({ isActive }) =>
                     "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
                     + (isActive ? ' active' : '')}
                */}
                    <NavLink 
                        to={"/collection"}
                        
                        className={({ isActive }) => "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4" + (isActive ? ' active' : '')}>
                        <span>
                            <Icon name="collection" />
                        </span>
                        Kitaplığın
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default Menu