import { NavLink } from 'react-router-dom'
import {Icon} from 'Icons'

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
                    <NavLink
                    className="bg-footer p-4 rounded group hover:bg-active"
                    key={item.id}
                    to={"/"}>

                    <div className="pt-[100%] relative mb-4 ">
                        <img className="absolute inset-0 object-cover w-full h-full" src={item.image} alt={item.title} />
                        <button className="transition-button bg-primary w-10 h-10 rounded-full absolute bottom-2 group-hover:flex group-focus:flex right-2 items-center justify-center hidden">
                            <Icon  name="play" size={16}/>
                        </button>
                    </div>
                    <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
                        {item.title}
                    </h6>
                    <p className="text-link text-sm line-clamp-2 mt-1">
                        {item.description}
                    </p>
                    </NavLink>
                    
                ))}
            </div>
        </section>
    )
}

export default Section