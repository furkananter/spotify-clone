import categories from 'data/categories'
import favCategories from 'data/favCategories'
import ScrollContainer from 'react-indiana-drag-scroll'
import {Icon} from 'Icons'
import { useRef, useState, useEffect } from 'react'
import Title from 'components/Title'
import Category from 'components/CategoryItem'
import FavCategory from 'components/FavCategoryItem'



/* Search Fonksiyonu ve useEffect */
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
    
//* TR:slidesFavPrev fonksiyonu, kullanıcı scroll ettikten sonra, kullanıcının scroll ettiği yerin önündeki kategori bilgisini alır.
    
    const slidesFavPrev = () => {
        favouritesRef.current.scrollLeft -= favouritesRef.current.offsetWidth - 300
    }

//* TR:slidesFavNext fonksiyonu, kullanıcı scroll ettikten sonra, kullanıcının scroll ettiği yerin sonundaki kategori bilgisini alır.
    
    const slidesFavNext = () => {
        favouritesRef.current.scrollLeft += favouritesRef.current.offsetWidth - 300
    }

    return (
        <>
            <section className='mb-8'>
                <Title size={"text-2xl"} title={'Your Top Genres'} />
                <div className='relative'>
                {prev && 
                    <button onClick={slidesFavPrev} className='text-black w-12 h-12 rounded-full bg-white hover:scale-[1.06] flex items-center justify-center absolute -left-6 z-10 top-1/2 -translate-y-1/2'>
                        <Icon size={24} name="previous"/>
                    </button>}
                {next && 
                    <button onClick={slidesFavNext} className='text-black w-12 h-12 rounded-full bg-white hover:scale-[1.06] flex items-center justify-center absolute -right-6 z-10 top-1/2 -translate-y-1/2 '>
                        <Icon size={24} name="forward"/>
                    </button>}
                <ScrollContainer
                    innerRef={favouritesRef}
                    className='flex overflow-x-auto gap-x-6 scroll-smooth '>
                    {favCategories.map((category, index) => <FavCategory key={index} favCategory={category} />)}
                </ScrollContainer>
                </div>
            </section>
            <section>
                <Title size={"text-2xl"} title={'Browse All'} />
                <div className="grid grid-cols-5 gap-6">
                    {categories.map((category, index) => <Category key={index} category={category} />)}
                </div>
            </section>
        </>
    )
}

export default Search