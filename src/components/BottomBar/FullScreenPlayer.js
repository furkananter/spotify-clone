import { useSelector } from 'react-redux'
import { Icon } from 'Icons'
import { secondsToTime } from 'utils'
import CustomRange from '../CustomRange'

function FullScreenPlayer({ toggle, state, controls}) {
    const { current } = useSelector(state => state.player)


    return (
        <div className='bg-primary h-full'>
            <div className="w-full absolute bottom-4 pt-2 px-4 flex flex-col items-center">
                <div className="flex items-center gap-x-2">
                    {/* Play, Pause , Next, Repeat , Shuffle Buttons */}
                    <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="shuffle" size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="playerPrev" size={16} />
                    </button>
                    <button
                        //? inside the onClick , if music is playing , pause it , else play it
                        //? TR: Eğer müzik çalıyorsa, durdur, aksi takdirde çal
                        //? DE: Wenn Musik läuft, dann pausieren, ansonsten abspielen
                        onClick={controls[state?.playing ? 'pause' : 'play']}
                        className="w-8 h-8 flex bg-white rounded-full items-center justify-center text-black hover:scale-[1.06] ">
                        <Icon name={state?.playing ? 'pause' : "play"} size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="playerNext" size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="repeat" size={16} />
                    </button>

                </div>
                <div className="w-full flex gap-x-2 mt-1.5 items-center">
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
            </div>
        </div>
    )
}

export default FullScreenPlayer;