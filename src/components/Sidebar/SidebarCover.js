import { useSelector, useDispatch } from 'react-redux'
import { setSidebar } from 'stores/player'
import { Icon } from 'Icons'

function SidebarCover() {
    const current = useSelector(state => state.player.current);
    const dispatch = useDispatch()
    return (
        <div className="pt-[100%] relative bg-white group">
            <img src={current.image} className="w-full h-full  absolute object-cover top-0 left-0 items-center" />
            <button
                onClick={() => dispatch(setSidebar(false))}
                className="w-6 h-6 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] rounded-full absolute top-1 right-1 flex items-center justify-center -rotate-180">
                <Icon name="arrowLeft" size={16} />
            </button>
        </div>
    )
}
export default SidebarCover