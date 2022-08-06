import { NavLink } from 'react-router-dom'

function Section({ title, more = false,items }) {
    return (
        <section>
            <header className="flex items-center justify-between">
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
                    <NavLink
                    className="bg-footer p-4 rounded"
                    key={item.id}
                    to={"/"}>

                    <div className="pt-[100%] relative mb-4">
                        <img className="absolute inset-0 w-full h-full rounded" src={item.image} alt={item.title} />
                    </div>
                    {item.title}
                    </NavLink>
                    
                ))}
            </div>
        </section>
    )
}

export default Section