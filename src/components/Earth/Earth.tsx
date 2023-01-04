import { useEffect, useState } from "react";
import ReactPlayer from "react-player";


const Earth = () => {
    const [size, setSize] = useState("500px")

    const handleSize = () => {
        if(window.innerWidth < 550){
            setSize("270px")
        } else {
            setSize("500px")
        }
    }

    useEffect(() => {
        handleSize()
        window.addEventListener('resize', handleSize)
    }, [])

    return (
        <div className="videoEarth">
            <ReactPlayer 
                url="./assets/videos/earth.mp4" 
                playing loop={true} muted 
                width={size}
                height={size}
            />
        </div>
    );
};

export default Earth;