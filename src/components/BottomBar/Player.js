import { Icon } from 'Icons'
import CustomRange from '../CustomRange'
import { useEffect, useMemo, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setControls, setSidebar , setPlaying} from 'stores/player'
import Notification from 'components/Notification'
import { useAudio, useFullscreen, useToggle } from 'react-use'
import FullScreenPlayer from '../FullScreenPlayer'
import { secondsToTime } from 'utils'

function Player() {
    // useRef fonksiyonu, bir componentin bir özelliğini bir değişkene atar.
    // Örneğin, bir componentin bir özelliğini bir değişkene atarsak, componentin özelliğini değiştirmeye izin verir.
    // fsRef, fullScreen Ref demektir, react-use kütüphanesindeki useFullscreen fonksiyonunun özelliğini kullanır.
    // 
    const fsRef = useRef()
    const [show, toggle] = useToggle(false)
    const isFullscreen = useFullscreen(fsRef, show, {onClose: () => toggle(false)})


    const { current, sidebar} = useSelector(state => state.player)
    const dispatch = useDispatch();

    // const [audio, state, controls ] = useAudio  // audio element
    const [audio, state, controls] = useAudio({
        src: current?.src,
    });

    const VolumeIcon = useMemo(() => {
        if (state.volume === 0 || state.muted)
            return 'volumeMuted'
        if (state.volume > 0 && state.volume < 0.33)
            return 'volumeLow'
        if (state.volume >= 0.33 && state.volume < 0.66)
            return 'volumeNormal'
        if (state.volume >= 0.66)
            return 'volumeFull'
    }, [state.volume, state.muted]);

    useEffect(() => {
        controls.play()
    }, [current]);

    useEffect(() => {
        dispatch(setControls(controls))
    }, []);

    useEffect(() => {
        dispatch(setPlaying(state.playing))
    } , [state.playing])



    return (
        <div className="flex items-center justify-between h-full px-4">
            <Notification />
            <div className="min-w-[11.25rem] w-[30%]">
                {current && (
                    <div className="flex items-center ">
                        <div className="flex items-center mr-3">
                            {!sidebar && (
                                <div className="w-14 h-14 mr-3 relative group flex-shrink-0">
                                    <img className="object-cover w-full h-full" src={current.image} alt="bottom" />
                                    <button
                                        onClick={() => {
                                            dispatch(setSidebar(true))
                                        }}
                                        className="w-6 h-6 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] rounded-full absolute top-1 right-1 flex items-center justify-center">
                                        <Icon name="arrowLeft" size={16} />
                                    </button>
                                </div>
                            )}
                            <div>
                                <h6 className="text-sm font-semibold line-clamp-1 ">{current.title}</h6>
                                <p className="text-[0.688rem] text-white text-opacity-70">{current.artist}</p>
                            </div>
                        </div>
                        <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                            <Icon name="heart" size={16} />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                            <Icon name="pictureInPicture" size={16} />
                        </button>
                    </div>
                )}
            </div>
            <div className="max-w-[45.125rem] w-[40%] pt-2 px-4 flex flex-col items-center">
                <div className="flex items-center gap-x-3">
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
                    {audio}
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
            <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
                <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                    <Icon name="lyrics" size={16} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                    <Icon name="queue" size={16} />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                    <Icon name="device" size={16} />
                </button>
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
                    <Icon name="fullscreen" size={16} />
                </button>
            </div>
            <div ref={fsRef}>
                {isFullscreen &&
                    (<FullScreenPlayer
                        toggle = {toggle}
                        state = { state }
                        controls = { controls }
                        VolumeIcon = { VolumeIcon }
                />)}
            </div>
        </div>
    )
}

export default Player