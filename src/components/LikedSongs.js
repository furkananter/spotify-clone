import likedSongs from 'data/likedSongs'
import { Icon } from 'Icons'
import Title from 'components/Title'
function LikedSongs() {

    return (

        <div className='p-8 flex flex-col justify-between col-span-2 bg-gradient-to-br from-firstGradient to-secondGradient rounded-md'>
            <div className="line-clamp-3">
                {likedSongs.map(item => (
                    <span key={item.id}>
                        <span className=" align-baseline font-semibold mr-1">{item.artist}</span>
                        <span className="text-white opacity-70">{item.name} • </span>
                    </span>
                ))}
            </div>
            <div className='items-start justify-end flex flex-col'>
                <Title size={"text-3xl font-bold"} className={"text-2xl"} title={"Liked Songs"} />
                <div>
                    <p>349 Liked Songs</p>
                </div>
            </div>
            <div className='relative group'>
                <button
                    className={`w-12 h-12 rounded-full hover:scale-105 bg-primary text-black absolute bottom-0 right-0 flex items-center justify-center shadow-xl }`}>
                    <Icon name={'play'} size={24} />
                </button>
            </div>

        </div>


    )
}

export default LikedSongs;