import { Icon } from 'Icons';
import Navigation from 'components/Navbar/Navigation'
import Auth from 'components/Navbar/Auth'

function Navbar(){
    return (
        <nav className="h-[3.75rem] flex items-center justify-start px-8">
            <Navigation />
            <Auth />
        </nav>
    )
}

export default Navbar