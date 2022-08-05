import { NavLink } from 'react-router-dom'

function Section({ title, more = false }) {
    return (
        <section>
            <header className="flex items-center justify-between">
                <h3 className="text-2xl text-white font-semibold tracking-tight">{title}</h3>
                {more && (
                    <NavLink className="text-sm font-semibold text-link uppercase hover:underline" to={more}>
                        see all
                    </NavLink>
                )
            }
            </header>
            <div className="grid grid-cols-5">
                <NavLink
                 // key={"1"}
                 to={"/"}>
                </NavLink>
            </div>
        </section>
    )
}

export default Section