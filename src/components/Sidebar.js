import logo from "img/logo.svg";
import { Icon } from "Icons";
import Menu from "components/Sidebar/Menu";
import Playlists from "components/Sidebar/Playlists";
import SidebarCover from 'components/Sidebar/SidebarCover'
import { useSelector } from 'react-redux'
import DownloadApp from "components/Sidebar/DownloadApp";


function Sidebar() {
  const sidebar = useSelector(state => state.player.sidebar);

  return (
    <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
      <a href="#" className="mb-7 px-6">
        <img src={logo} alt="logo" className="h-10" />
      </a>
      <Menu />
      <nav className="mt-6">
        <ul>
          <li>
              <a href="" className="py-2 px-6 flex items-center group font-semibold text-sm text-link hover:text-white">
                <span className="w-6 h-6 flex items-center justify-center mr-4 bg-opacity-60 group-hover:bg-opacity-100 bg-white rounded-sm text-black">
                    <Icon name="plus" size={12}/>
                </span>
                    Create Playlist
              </a>
          </li>
          <li>
              <a href="" className="py-2 px-6 flex items-center group font-semibold text-sm text-link hover:text-white">
                <span className="w-6 h-6 flex items-center justify-center mr-4 opacity-60 group-hover:opacity-100 bg-gradient-to-br from-purple-700 to-blue-300 text-white bg-white rounded-sm">
                    <Icon name="heartFilled" size={12}/>
                </span>
                    Liked Songs
              </a> {/* end of a */}
          </li> {/* end of li */}
          <li>
              <a href="" className="py-2 px-6 flex items-center group font-semibold text-sm text-link hover:text-white">
                <span className="w-6 h-6 flex items-center justify-center mr-4 opacity-60 group-hover:opacity-100 bg-podcast text-podcastIcon rounded-sm">
                    <Icon name="podcast" size={12}/>
                </span>
                    Your Episodes
              </a> {/* end of a */}
          </li> {/* end of li */}
        </ul> {/* end of ul */}
      </nav> {/* end of nav */}

      <Playlists /> {/* end of Playlists */}
      <DownloadApp />
      {sidebar && (
        <SidebarCover />
      )}
    </aside>
  );
}
export default Sidebar;
