import LikedSongs from 'components/LikedSongs'
import SongItem from './SongItem'
import Title from './Title'

//* TR: Playlist Fonksiyonuna bu komponent içerisinden ulaşabilirsiniz.
//* DE: Sie können diese Komponente in diesem Verzeichnis finden. (Playlist)
//* ENG: You can find this component (Playlist) in this directory.

function Playlist({ items }) {
    return (
        <div>
            <Title size={"text-2xl font-bold"} title={"Playlists"} />
            <div className="grid grid-cols-5 gap-8 mb-4">
                <LikedSongs />
                    {items.map(item => (
                        <SongItem key={item.id} item={item} />
                    ))}
                    
            </div>
        </div>
    )
}
export default Playlist