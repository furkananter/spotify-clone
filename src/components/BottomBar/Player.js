import { Icon } from 'Icons'
import { Range, getTrackBackground } from 'react-range'
import { useState } from 'react'
import { useAudio } from 'react-use'
import { secondsToTime } from 'utils'

function Player() {
    const STEP = 0.1;
    const MIN = 0;
   

    const [audio, state, controls, ref] = useAudio({
        src: 'https://www.mboxdrive.com/Warriyo%20-%20Mortals%20(feat.%20Laura%20Brehm)%20[NCS%20Release].mp3',
      });

    return (
        <div className="flex items-center justify-between h-full px-4">
            <div className="min-w-[11.25rem] w-[30%]">
                Sol
            </div>
            <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center">
                <div className="flex items-center gap-x-2">
                    <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="shuffle" size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="playerPrev" size={16} />
                    </button>
                    <button
                        onClick={controls.play} 
                        className="w-8 h-8 flex bg-white rounded-full items-center justify-center text-black hover:scale-[1.06] ">
                        <Icon name="play" size={16} />
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
                    <Range
                        values={[state?.time]}
                        step={STEP}
                        min={MIN}
                        max={state?.duration || 1}
                        onChange={(values) => controls.seek(values[0])}
                        renderTrack={({ props, children }) => (
                            <div
                                onMouseDown={props.onMouseDown}
                                onTouchStart={props.onTouchStart}
                                className="w-full h-7 flex"
                                style={props.style}
                            >
                                <div
                                    ref={props.ref}
                                    className="h-1 w-full rounded-md self-center group"
                                    style={{
                                    
                                        background: getTrackBackground({
                                            values: [state?.time],
                                            colors: ["#1db954", "#535353"],
                                            min: MIN,
                                            max: [state?.duration] || 1,
                                        }),
                                    }}
                                >
                                    {children}
                                </div>
                            </div>
                        )}
                        renderThumb={({ props, isDragged }) => (
                            <div
                                {...props}
                                className={`h-3 w-3 rounded-full bg-white ${!isDragged ? 'opacity-0' : ''} group-hover:opacity-100 `}
                                style={{
                                    ...props.style,
                                    boxShadow: "0px 2px 4px 0px rgb(0 0 0 / 50%)",
                                }}
                            />
                        )}
                    />
                    <div className="text-[0.688rem] text-white text-opacity-70">
                        {secondsToTime(state?.duration)}
                    </div>
                </div>  
            </div>
            <div className="min-w-[11.25rem] w-[30%] flex justify-end">Sağ</div>
        </div>
    )
}

export default Player