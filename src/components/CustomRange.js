import { Range, getTrackBackground } from 'react-range'

function CustomRange({ min, max, step, value, onChange }) {
    return (
        <Range
                        values={[value]}
                        step={step}
                        min={min}
                        max={max}
                        onChange={values => onChange(values[0])}
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
                                            values: [value],
                                            colors: ["#1db954", "#535353"],
                                            min,
                                            max
                                        })
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
    )
}

export default CustomRange;