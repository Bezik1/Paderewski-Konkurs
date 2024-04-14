import { useEffect, useRef } from 'react';

const Music = ({ path } : { path: string}) =>{
    const musicRef = useRef<HTMLAudioElement>(null!)

    useEffect(() =>{
        musicRef.current.play()
    }, [])

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (musicRef.current) {
                console.log('Current time:', musicRef.current.currentTime);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <audio ref={musicRef} src={path} controls={true} autoPlay={true} />
    )
}

export default Music