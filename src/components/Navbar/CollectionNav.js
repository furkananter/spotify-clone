import { Link } from 'react-router-dom';
//Collection Sayfasında Tepede bulunan Linkler için kullanılır.


function CollectionNav() {
    return (
        <nav className="mr-auto pl-6 ml-4 font-bold text-sm">
            <ul className='flex '>
                <li className="mr-2 px-4 py-2 rounded bg-active">
                    <Link to={'/collection/playlists'}  >Playlists</Link>
                </li>

                <li className="mr-2 px-4 py-2 rounded ">
                    <Link  to={"/collection/podcasts"}>Podcasts</Link>
                </li>

                <li className="mr-2 px-4 py-2 rounded">
                    <Link to={"/collection/artists"} >Artists</Link>
                </li>

                <li className="mr-2 px-4 py-2 rounded">
                    <Link to={"/collection/albums"}>Albums</Link>
                </li>

            </ul>
        </nav>
    )
}

{/* 
<ul className='flex'>
                <li className='text-white bg-[#333] mr-2 px-4 py-2 rounded '>
                    <NavLink className={({ isActive }) => "" + (isActive ? 'hover:bg-[#333]' : '')} to="/collection/playlists">Playlists</NavLink>
                </li>
                <li className='text-white active:bg-[#333] hover:bg-[#333]  mr-2 px-4 py-2 rounded '>
                    <NavLink to="/collection/podcasts">Podcasts</NavLink>
                </li>
                <li className='text-white active:bg-[#333] hover:bg-[#333]  mr-2 px-4 py-2 rounded '>
                    <NavLink to="/collection/artists">Artists</NavLink>
                </li>
                <li className='text-white active:bg-[#333] hover:bg-[#333]  mr-2 px-4 py-2 rounded '>
                    <NavLink to="/collection/albums">Albums</NavLink>
                </li>
            </ul>


*/}


export default CollectionNav