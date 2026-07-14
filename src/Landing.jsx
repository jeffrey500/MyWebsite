import videoSource from './assets/jzhu.mp4';
import arrow from './assets/down_arrow.svg?url';
import { useEffect, useRef, useState } from 'react'; // Added useState

function Landing(){
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleVideoLoad = () => {
            setIsVideoLoaded(true);
        };

        if (video.readyState >= 3) {
            handleVideoLoad();
        } else {
            video.addEventListener('canplay', handleVideoLoad);
        }

        return () => {
            video.removeEventListener('canplay', handleVideoLoad);
        };

        },[]);


    return(
        <section className="h-screen items-center justify-center">
            <div className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-gray-300 text-white transition-opacity duration-500 ease-in-out ${isVideoLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <div
                    className="w-20 h-20 border-4 border-gray-600 border-t-blue-400 rounded-full animate-spin mb-4"></div>
                <p className="mt-5 text-5xl text-[#7e8ea7] font-sans tracking-widest animate-pulse">LOADING</p>
            </div>

            <div className="relative h-full overflow-hidden">
                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                    className="absolute w-full h-full object-cover"
                >
                    <source src={videoSource} type="video/mp4"/>
                </video>

                <div
                    className="relative z-10 flex flex-col h-full items-center justify-center translate-x-10 translate-y-5">
                    <div className="relative bg-gray-300 rounded-xl p-4 text-5xl shadow-xl">
                        <p className="text-[#7e8ea7] font-sans font-bold">Engineering Science @ UofT</p>
                    </div>

                    <div
                        className="flex flex-row items-center justify-center translate-y-10 text-4xl text-[#7e8ea7] font-bold">
                        <a href={"#projects"}>
                            <div
                                className="relative bg-blue-200 rounded-xl p-3 -translate-x-15 shadow-xl hover:bg-blue-300 duration-500">Projects
                            </div>
                        </a>

                        <a href={"#contact"}>
                            <div
                                className="relative bg-blue-200 rounded-xl p-3 translate-x-15 shadow-xl hover:bg-blue-300 duration-500">Contact
                            </div>
                        </a>
                    </div>

                    <a href={"#about"} className="animate-bounce translate-y-40">
                        <img src={arrow} className="h-20 w-20" alt="Scroll down"/>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Landing;