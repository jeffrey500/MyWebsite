import ProjectCard from "./ProjectCard.jsx";

function Projects(){
    return(
        <section id="projects" className="scroll-mt-20 static flex flex-1 flex-col items-center justify-center bg-white">
            <div className="max-w-4xl w-full max-auto">
                <div className="text-left mt-20 mb-15">
                    <h2 className="text-black text-6xl font-mono font-bold tracking-tight text-left">Featured
                        Projects</h2>
                </div>

                <div className="pb-20">
                    <ProjectCard
                        github_link="https://github.com/jeffrey500/Flight-Controller"
                        title={"Flight Controller V1.0"}
                        description={"Custom flight STM32H743 flight controller on a 4-layer PCB. " +
                            "Future testbed for Control Algorithms. " +
                            "Has BMI270, BMP388, CAN bus, 8x3 2.54mm headers for PWM/D-Shot."}
                        imageURL={"https://github.com/jeffrey500/Flight-Controller/blob/main/media/Layer1_pour.png?raw=true"}
                        color="border-sky-500"
                        tech1="Altium"
                        tech2="STM32"
                        tech3="Hardware"
                        date="2026 | 2 months"
                    />
                    <ProjectCard
                        github_link="https://github.com/jeffrey500/CNC-Whiteboard"
                        title={"CNC-Whiteboard"}
                        description={"Physical design considerations for my 1.2m by 2m CNC whiteboard. " +
                            "Runs on my custom ServoBoard and Ardunio CNC Shield. Runs grbl firmware."}
                        imageURL={"https://github.com/jeffrey500/CNC-Whiteboard/blob/main/media/title_image.png?raw=true"}
                        color="border-orange-500"
                        tech1="Fusion360"
                        tech2="GRBL"
                        tech3="3D-Printing"
                        date="2025-2026 | 6 months"
                    />
                    <ProjectCard
                        github_link="https://github.com/jeffrey500/ServoBoard"
                        title={"ServoBoard V2.1"}
                        description={"A custom PCB that drives up to 4 PWM servos. " +
                            "The board uses the atmega328PB and has variable input and variable servo voltage using the LM2596S buck and AMS1117 LDO. " +
                            "The board also has 3 6n137 optocouplers."}
                        imageURL={"https://github.com/jeffrey500/ServoBoard/blob/main/media/board.png?raw=true"}
                        color="border-green-500"
                        tech1="KiCad"
                        tech2="ATmega328"
                        tech3="Power Electronics"
                        date="2026 | 2 months"
                    />
                    <ProjectCard
                        github_link="https://github.com/jeffrey500/OpenBCI-Cyton-Board-Safety-and-Verification/blob/main/OpenBCI%20Cyton%20Board%20Safety%20and%20Verification.pdf"
                        title={"OpenBCI Cyton EEG Verification"}
                        description={"Safety and Verification testing for the OpenBCI Cyton Board in relation to usage for EEG studies. " +
                            "Comparison to the SynAmps-RT 64-channel amplifier. Analyzed eye blink amplitude and average PSD."}
                        imageURL={"https://github.com/user-attachments/assets/e03e6e90-469e-4d2a-8ca5-38119946f39d"}
                        color="border-yellow-500"
                        tech1="MNE Python"
                        tech2="EEG"
                        tech3="Hardware Verification"
                        date="2025-2026 | 5 months"
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;