import { NavLink } from 'react-router-dom'
import SongItem from './SongItem'


function Section({ title, more = false,items }) {
    return (
        <section>
            <header className="flex items-center justify-between mb-4">
                <h3 className="text-2xl text-white font-semibold tracking-tight">{title}</h3>
                {more && (
                    <NavLink className="text-xs font-semibold text-link uppercase hover:underline" to={more}>
                        see all
                    </NavLink>
                )
            }
            </header>
            <div className="grid grid-cols-5 gap-x-6">
                {items.map(item => (
                    <SongItem key={item.id} item={item} />
                    
                ))}
            </div>
        </section>
    )
}

export default Section