import ExperienceCard from './ExperienceCard';
import ProjectCard from "./ProjectCard.jsx";

function Experience(){
    return(
        <section id="experience" className="scroll-mt-15 static flex flex-1 flex-col items-center justify-center">
            <div className="max-w-4xl w-full max-auto">
                <div className="text-left mt-20 mb-15">
                    <h2 className="text-black text-6xl font-mono font-bold tracking-tight text-left">Experience</h2>
                </div>

                <div className="pb-20">
                    <ExperienceCard
                        organization={"Krembil Research Institute"}
                        title={"Student Researcher"}
                        description={"Testing and Implementation of mobile electroencephalography (EEG) Systems for studies and data collection."}
                        location={"Toronto, Ontario"}
                        date={"Sept 2025 - Present"}
                    />
                    <ExperienceCard
                        organization={"First Robotics Competition Team Audeamus 8574"}
                        title={"Co-Captain"}
                        description={"Custom flight STM32H743 flight controller on a 4-layer PCB. " +
                            "Future testbed for Control Algorithms. " +
                            "Has BMI270, BMP388, CAN bus, 8x3 2.54mm headers for PWM/D-Shot."}
                        location={"Toronto, Ontario"}
                        date={"Sept 2021 - June 2025"}
                    />
                    <ExperienceCard
                        organization={"First Tech Challenge Team Delta Robotics 27115"}
                        title={"Founding Captain"}
                        description={"Custom flight STM32H743 flight controller on a 4-layer PCB. " +
                            "Future testbed for Control Algorithms. " +
                            "Has BMI270, BMP388, CAN bus, 8x3 2.54mm headers for PWM/D-Shot."}
                        location={"Toronto, Ontario"}
                        date={"Sept 2024 - June 2025"}
                    />
                </div>
            </div>
        </section>
    );
}

export default Experience;