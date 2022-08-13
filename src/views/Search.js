import categories from 'data/categories'
import favCategories from 'data/favCategories'
import ScrollContainer from 'react-indiana-drag-scroll'
import {Icon} from 'Icons'
import { useRef, useState, useEffect } from 'react'
import Title from 'components/Title'
function Category({ category }) {
    return (
        <div style={{ 'background': category.color }}
            className="before:pt-[100%] before:block relative rounded-md">
            <div className='absolute inset-0 overflow-hidden'>
                <h3 className='p-4 text-2xl tracking-tighter font-semibold'>
                    {category.title}
                </h3>
                <img src={category.cover} className="shadow-spotify w-[6.25rem] h-[6.25rem] rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0" />
            </div>
        </div>
    )
}

function FavCategory({ favCategory }) {
    return (
        <div style={{ 'background': favCategory.color }}
            className="w-[27.375rem] flex-shrink-0 h-[13.75rem] relative rounded-lg">
            <div className='absolute inset-0 overflow-hidden'>
                <h3 className='p-4 text-[2.5rem] tracking-tighter font-semibold'>
                    {favCategory.title}
                </h3>
                <img src={favCategory.cover} className="shadow-spotify w-32 h-32 rotate-[25deg] translate-x-[18%] translate-y-[5%] absolute bottom-0 right-0" alt="mus" />
            </div>
        </div>
    )
}

function Search() {
    const favouritesRef = useRef()
    const [prev, setPrev] = useState(false)
    const [next, setNext] = useState(false)

    useEffect(() => {
        if (favouritesRef.current) {

            const scrollHandle = () => {
                const isEnd = favouritesRef.current.scrollLeft + favouritesRef.current.offsetWidth === favouritesRef.current.scrollWidth
				const isBegin = favouritesRef.current.scrollLeft === 0
				setPrev(!isBegin)
				setNext(!isEnd)
            }
            scrollHandle()
            favouritesRef.current.addEventListener('scroll', scrollHandle)

            return () => {
                favouritesRef?.current?.removeEventListener('scroll', scrollHandle)
            }
        }
    }, [favouritesRef])

    const slidesFavPrev = () => {
        favouritesRef.current.scrollLeft -= favouritesRef.current.offsetWidth - 200
    }
    const slidesFavNext = () => {
        favouritesRef.current.scrollLeft += favouritesRef.current.offsetWidth - 200
    }

    return (
        <>
            <section className='mb-4 relative'>
                <Title title={'Your Top Genres'} />
                {prev && 
                    <button onClick={slidesFavPrev} className='text-black z-10 bg-white w-10 h-10 absolute top-1/2 rounded-full justify-center items-center flex -left-6'>
                        <Icon size={24} name="previous"/>
                    </button>}
                {next && 
                    <button onClick={slidesFavNext} className='text-white'>
                        <Icon size={24} name="forward"/>
                    </button>}
                <ScrollContainer
                    innerRef={favouritesRef}
                    className='flex overflow-x-auto gap-x-6 scroll-smooth '>
                    {favCategories.map((category, index) => <FavCategory key={index} favCategory={category} />)}
                </ScrollContainer>
            </section>
            <section>
                <Title title={'Browse All'} />
                <div className="grid grid-cols-5 gap-6">
                    {categories.map((category, index) => <Category key={index} category={category} />)}
                </div>
            </section>
        </>
    )
}

export default Search