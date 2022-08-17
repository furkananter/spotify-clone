import playlists from 'data/playlists'
import Playlist from 'components/PlaylistItems'




function Collection(){
    return (
        <section>
            <Playlist items={playlists} />
        </section>
    )
}


export default Collection;