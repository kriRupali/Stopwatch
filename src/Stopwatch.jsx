import React, { useEffect, useState } from 'react'


const Stopwatch = () => {
    const [hour, setHour] = useState(0)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    const [stop, setStop] = useState(false)
    const [id, setId] = useState(false)
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        if (stop) {
            setId(setInterval(() => {
                setSec((sec) => sec + 1)
            }, 1000))
            console.log(id);
        }

        else {
            clearInterval(id)
        }
    }, [stop])

    useEffect(() => {
        if (sec >= 60) {
            setMin(min + 1)

            setSec(0)
        }
    }, [sec])

    useEffect(() => {
        if (min == 59 && sec == 60) {
            setMin(0)
            setSec(0)
            setHour(hour + 1)
        }
    }, [min, sec])



    const handleStart = () => {
        setStop(true)
        alert("clicked")
        console.log(time.getTime());
    }
    const handleStop = () => {
        setStop(false)
        alert("clicked")
    }

    const handleReset = () => {
        setSec(0);
        setMin(0);
        setHour(0);
        setStop(false);
        alert("Reseting")

    }


    return (
        <>
            <div style={{ backgroundColor: "pink", paddingBottom: "4vw", width: "100%", textAlign: "center", height:"50%" }}>
                <div style={{ display: "flex", gap: "1vw", fontSize: "5vw", justifyContent: "center" }}>
                    <h2>{hour}:</h2>
                    <h2>{min}:</h2>
                    <h2>{sec}</h2>
                </div>

                <button onClick={handleStart} style={{ padding: "1vw 2vw", fontWeight: "bold", backgroundColor: "blue", borderRadius: "10px", border: "none" }}>Start</button>
                <button onClick={handleStop} style={{ padding: "1vw 2vw", fontWeight: "bold", backgroundColor: "yellow", borderRadius: "10px", border: "none" }}>Stop</button>
                <button onClick={handleReset} style={{ padding: "1vw 2vw", fontWeight: "bold", backgroundColor: "green", borderRadius: "10px", border: "none" }}>Reset</button>

            </div>
        </>
    )
}

export default Stopwatch