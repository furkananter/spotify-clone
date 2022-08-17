import { NavLink } from 'react-router-dom'

function Title({size,title, more = false}){
    return (
        <section>
            <header className="flex items-center justify-between mb-4">
                <h3 className={`${size} text-white font-semibold tracking-tight`}>{title}</h3>
                {more && (
                    <NavLink className="text-xs font-semibold text-link uppercase hover:underline" to={more}>
                        see all
                    </NavLink>
                )
            }
            </header>
        </section>
    )
}

export default Title