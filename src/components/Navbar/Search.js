import { Icon } from 'Icons';

function Search(){
    return (
        <div className="mr-auto ml-4 relative">
            <label htmlFor='search-input' className='absolute flex items-center top-0 left-0 text-black w-12 h-10 justify-center'>
                <Icon size={24} name="search" />
            </label>
            <input autoFocus={true} type="text" className="h-10 pl-12 bg-white placeholder-gray-500 font-semibold outline-none text-black text-sm max-w-full w-[22.75rem] rounded-3xl " placeholder="Artists, Songs or Podcasts" />
        </div>
    )
}

export default Search