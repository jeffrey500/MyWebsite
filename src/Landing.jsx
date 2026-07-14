import videoSource from './assets/jzhu.mp4';

function Landing(){
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
                <div className="relative z-10 flex h-full items-center justify-center">
                    <p className="-translate-x-5 z-10 text-5xl text-[#5e73a0] font-sans font-bold ml-15 mt-50">Work In Progress</p>
                </div>
            </div>
        </section>
    );
}

export default Landing;