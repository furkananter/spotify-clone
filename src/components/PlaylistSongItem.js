
import {Icon} from "Icons";
import {NavLink} from "react-router-dom";


function PlaylistSongItem({item}){
    const imageStyle = item => {
        switch (item.type) {
            case 'artist':
                return 'rounded-full'

            case 'podcast':
                return 'rounded-xl'

            default:
                return 'rounded'
            }}


    return (
        <NavLink
        key={item.id}
        to="/"
        className={"bg-footer p-4 rounded hover:bg-active group [<button>] hover:transition-opacity duration-500"}
    >
        <div className="pt-[100%] relative mb-4 duration-700">
            <img src={item.image} className={`absolute inset-0 object-cover w-full h-full ${imageStyle(item)}`} alt="Songitem" />
            <button
                onClick={''}
                className={`w-12 h-12 rounded-full shadow-md hover:scale-105 bg-primary text-black absolute group-hover:flex group-focus:flex bottom-2 right-2 items-center justify-center  hidden hover:flex}`}>
                <Icon name={'play'} size={24} />
            </button>
        </div>
        <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
            {item.title}
        </h6>
        <p className="line-clamp-2 text-link text-sm mt-1">
            {item.description}
        </p>
    </NavLink>

    )
}
export default PlaylistSongItem