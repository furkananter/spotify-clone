import { Icon } from 'Icons'
import { Range, getTrackBackground } from 'react-range'
import { useState } from 'react'
import { useAudio } from 'react-use'

function Player() {
    const STEP = 0.1;
    const MIN = 0;
    const MAX = 100;
    const [values, setValues] = useState([50]);

    const [audio, state, controls, ref] = useAudio({
        src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      });

    return (
        <div className="flex items-center justify-between h-full px-4">
            <div className="min-w-[11.25rem] w-[30%]">Sol
                {JSON.stringify(state)}
            
            </div>
            <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center">
                <div className="flex items-center gap-x-2">
                    <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="shuffle" size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="playerPrev" size={16} />
                    </button>
                    <button className="w-8 h-8 flex bg-white rounded-full items-center justify-center text-black hover:scale-[1.06] ">
                        <Icon name="play" size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="playerNext" size={16} />
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center text-opacity-70 hover:text-opacity-100 text-white ">
                        <Icon name="repeat" size={16} />
                    </button>

                </div>
                <div className="w-full">
                    {audio}
                    <Range
                        values={values}
                        step={STEP}
                        min={MIN}
                        max={MAX}
                        onChange={(values) => setValues(values)}
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
                                            values: values,
                                            colors: ["#1db954", "#535353"],
                                            min: MIN,
                                            max: MAX
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
                </div>
            </div>
            <div className="min-w-[11.25rem] w-[30%] flex justify-end">Sağ</div>
        </div>
    )
}

export default Player