import SongItem from './SongItem'
import Title from 'components/Title'


function Section({ title, more = false,items }) {
    return (
        <section>
            <Title size={"text-2xl"} title={title} more={more} />
            <div className="grid grid-cols-5 gap-x-6">
                {items.map(item => (
                    <SongItem key={item.id} item={item} />
                ))}
            </div>
        </section>
    )
}

export default Section