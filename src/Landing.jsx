import videoSource from './assets/jzhu.mp4';
import arrow from './assets/down_arrow.svg?url';
import { useEffect, useRef } from 'react';

function Landing(){
    const viewRef = useRef(null);

    useEffect(() => {
        if (viewRef.current) {
            viewRef.current.playbackRate = 1.5
        }
    })

    return(
        <section className="h-screen items-center justify-center">
            <div className="relative h-full overflow-hidden">
                <video
                    autoPlay
                    muted
                    playsInline
                    className="absolute w-full h-full object-cover"
                >
                    <source src={videoSource} type="video/mp4"/>
                </video>

                <div className="relative z-10 flex flex-col h-full items-center justify-center translate-x-10 translate-y-5">
                    <div className="relative bg-gray-300 rounded-xl p-4 text-5xl shadow-xl">
                        <p className="text-[#7e8ea7] font-sans font-bold">Engineering Science @ UofT</p>
                    </div>

                    <div className="flex flex-row items-center justify-center translate-y-10 text-4xl text-[#7e8ea7] font-bold">
                        <a href={"#projects"}>
                            <div className="relative bg-blue-200 rounded-xl p-3 -translate-x-15 shadow-xl hover:bg-blue-300 duration-500">Projects</div>
                        </a>

                        <a href={"#contact"}>
                            <div className="relative bg-blue-200 rounded-xl p-3 translate-x-15 shadow-xl hover:bg-blue-300 duration-500">Contact</div>
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