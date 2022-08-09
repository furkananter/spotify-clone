import { Icon } from 'Icons'
import CustomRange from '../CustomRange'
import { useMemo } from 'react'
import { useAudio } from 'react-use'
import { secondsToTime } from 'utils'

function Player() {
  // const [audio, state, controls ] = useAudio  // audio element
    const [audio, state, controls] = useAudio({
        src: 'https://www.mboxdrive.com/Crazy%20-%20Patrick%20Patrikios.mp3',
      });
      const VolumeIcon = useMemo(() => {
        if(state.volume === 0 || state.muted)
            return 'volumeMuted'
        if(state.volume > 0 && state.volume < 0.33)
            return 'volumeLow'
        if(state.volume >= 0.33 && state.volume < 0.66)
            return 'volumeNormal'
        if(state.volume >= 0.66)
            return 'volumeFull'
        } , [state.volume, state.muted]);

    return (
        <div className="flex items-center justify-between h-full px-4">
            <div className="min-w-[11.25rem] w-[30%]">
                Sol
            </div>
            <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center">
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
                        onClick={controls[state?.playing ? 'pause': 'play']}
                        className="w-8 h-8 flex bg-white rounded-full items-center justify-center text-black hover:scale-[1.06] ">
                        <Icon name={state?.playing ? 'pause' :"play"} size={16} />
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
                    onClick={controls[state?.muted ? 'unmute': 'mute']}
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
                <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                    <Icon name="fullscreen" size={16} />
                </button>
            </div>
        </div>
    )
}

export default Player