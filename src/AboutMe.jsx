import pictureSource from './assets/jeffrey.png';

function AboutMe(){
    return(
        <section id="about" className="flex flex-1 flex-col scroll-mt-30 static items-center justify-center w-full my-18">
            <div className={"max-w-4xl grid grid-cols-[3fr_1fr]"}>
                <div className="w-full max-auto flex flex-col mt-4">
                    <h2 className="text-black text-6xl font-mono font-bold tracking-tight mb-10">About Me</h2>
                    <p className="text-black text-xl font-mono font-bold tracking-tight max-w-160">Hi, I'm Jeffrey. I'm a second year
                        Engineering Science Student at the University of Toronto who has a passion for hardware, software and
                        robotics.
                        <br/> <br/>
                        I'm currently interested in Computer Architecture, Inference Acceleration, ASICs, and Computer Algorithms.
                        <br/> <br/>

                        Before university, I enjoyed competitive programming and have spent a combined 8+ years competing within the robotics competitions of FRC, FTC, and FLL.
                    </p>
                </div>

                <div className="flex justify-center ml-15">
                    <img
                        src={pictureSource}
                        alt={"Picture of Jeffrey"}
                        className="max-h-[500px] object-contain"
                    />
                </div>
            </div>
        </section>
    );
}

export default AboutMe;