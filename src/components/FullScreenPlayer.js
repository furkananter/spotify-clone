import { useSelector } from 'react-redux'
import { Icon } from 'Icons'
import { secondsToTime } from 'utils'
import CustomRange from './CustomRange'

function FullScreenPlayer({ toggle, state, controls, VolumeIcon }) {
    // Aşağıdaki kod ile useSelector fonksiyonunu kullanarak, redux store'daki player state'ini kullanabiliriz.
    // ENG: useSelector function is used to get the player state from redux store.
    // DE: useSelector Funktion wird verwendet um den Player Status aus dem Redux Store zu bekommen.
    const { current } = useSelector(state => state.player)
    return (
        <div className='h-full relative'>
            {/* Background Image Styling */}
            <div className='absolute inset-0 bg-cover object-cover bg-center blur-md opacity-40 ' style={{ backgroundImage: `url(${current.image})` }} />
            {/* ENG: This is the upper section of the audio range bar.*/}
            <div className='absolute top-14 left-16 flex gap-x-2'>
                    <Icon name='spotifyLogo' size={34}/>
                <div className='flex flex-col text-xs opacity-70'>
                    <div>
                        <p className=''>PLAYING FROM PLAYLIST</p>
                        <h6 className=''>{current.title}</h6>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-36 left-8 flex items-center gap-x-4 '>
                <img className='w-24 h-24 object-cover' src={current.image} alt='Fullsize Bottom' />
                <div className='self-end'>
                    {/* ENG: This is the song Title & Artist .*/}
                    <h3 className="text-3xl font-bold">{current.title}</h3>
                    <p className="text-sm font-medium opacity-50">{current.artist}</p>
                </div>
            </div>
            {/* ENG: This is the lower section of the audio range bar.*/}
            <div onClick={e => e.stopPropagation()}
                className="w-full absolute bottom-4 pt-2 px-8 flex flex-col items-center">
                {/* Bottom Audio Range DIV */}
                <div className="w-full flex gap-x-2 mb-1.5 items-center">
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.time)}
                    </div>
                    <CustomRange
                        step={0.1}
                        min={0}
                        max={state?.duration || 1}
                        value={state?.time}
                        onChange={value => controls.seek(value)}
                    />
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.duration)}
                    </div>
                </div>
                {/* Bottom Buttons DIV */}
                <div className="flex items-center gap-x-5">
                    {/* Play, Pause , Next, Repeat , Shuffle Buttons */}
                    <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="shuffle" size={24} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="playerPrev" size={24} />
                    </button>
                    <button
                        //? inside the onClick , if music is playing , pause it , else play it
                        //? TR: Eğer müzik çalıyorsa, durdur, aksi takdirde çal
                        //? DE: Wenn Musik läuft, dann pausieren, ansonsten abspielen
                        onClick={controls[state?.playing ? 'pause' : 'play']}
                        className="w-16 h-16 flex bg-white rounded-full items-center justify-center text-black hover:scale-[1.06] ">
                        <Icon name={state?.playing ? 'pause' : "play"} size={24} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="playerNext" size={24} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="repeat" size={24} />
                    </button>
                </div>
                {/* Bottom Right Volume DIV */}
                <div className='flex items-center absolute gap-x-3 bottom-3 right-6'>
                    <button
                        onClick={controls[state?.muted ? 'unmute' : 'mute']}
                        className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name={VolumeIcon} size={16} />
                    </button>
                    <div className="w-[5.813rem] max-w-full">
                        <CustomRange
                            step={0.01}
                            min={0}
                            max={1}
                            value={state?.muted ? 0 : state?.volume}
                            onChange={value => {
                                controls.unmute()
                                controls.volume(value)
                            }}
                        />
                    </div>
                    <button onClick={toggle} className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="fullScreenOff" size={24} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default FullScreenPlayer;