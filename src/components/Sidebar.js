import logo from 'img/logo.svg';
import Menu from 'components/Sidebar/Menu';

function Sidebar() {
    return (
        <aside className="w-60 pt-6 flex flex-shrink-0 flex-col bg-black">
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                <a href="#" className="mb-7 px-6">
                <img src={logo} alt="logo" className="h-10"/>
            </a>
            <Menu />
        </aside>
    )
}
export default Sidebar