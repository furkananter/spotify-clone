import { Icon } from 'Icons';
import { NavLink, useMatch } from 'react-router-dom';

function Menu() {
    const homeButton = useMatch("/")
    const searchButton = useMatch("/search")
    const libraryButton = useMatch("/collection/playlists")

    return (
        <nav className="px-2">
            <ul className="flex flex-col">
                <li>
                    <NavLink
                        to={"/"}
                        className={({ isActive }) => "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4" + (isActive ? ' active' : '')}>
                        <span>
                            {
                                homeButton ? <Icon name="activeHome" /> : <Icon name="home" />
                            }
                            {/* <Icon name="home" /> */}
                        </span>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={"/search"}
                        className={({ isActive }) => "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4" + (isActive ? ' active' : '')}>
                        <span>
                            {
                                searchButton ? <Icon name="activeSearch" /> : <Icon name="search" />
                            }
                        </span>
                        Search
                    </NavLink>
                </li>
                <li>
                    {/*
                 //! If you don't even think about using "isActive", you should think!
                 Because you can't do this without "isActive". And if you don't use "isActive",
                 you can't give an active class to your NavLink.

                 //TODO: Go to the tailwind.css file and add the following line:
                    .active {
                        @apply bg-active !text-white;
                    }
        
                 //TODO 2: Go back to the Menu.js and add the following line:
                    {({ isActive }) =>
                     "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4"
                     + (isActive ? ' active' : '')}
                */}
                    <NavLink
                        to={"/collection/playlists"}

                        className={({ isActive }) => "h-10 flex gap-x-4 items-center text-sm font-semibold text-link rounded hover:text-white px-4" + (isActive ? ' active' : ' ')}>
                        <span>
                            {
                                libraryButton ? <Icon name="collectionActive" /> : <Icon name="collection" />
                            }
                        </span>
                        Your Library
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
export default Menu