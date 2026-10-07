import ProjectCard from "./ProjectCard.jsx";

function Projects(){
    return(
        <section id="projects" className="scroll-mt-15 static flex flex-1 flex-col items-center justify-center bg-gray-100">
            <div className="max-w-4xl w-full max-auto">
                <div className="text-left mt-20 mb-15">
                    <h2 className="text-black text-6xl font-mono font-bold tracking-tight text-left">Featured
                        Projects</h2>
                </div>

                <div className="pb-20">
                    <ProjectCard
                        github_link="https://github.com/jeffrey500/CNC-Whiteboard-Software"
                        title={"CNC-Whiteboard Software"}
                        description={`A full-stack web interface that drives my CNC whiteboard plotter via a headless Raspberry Pi 3B+. 
                        It processes both raw images and SVGs into optimized physical toolpaths using a custom OpenCV computer vision pipeline and a DFS graph-traversal algorithm. 
                        The entire system is supported by a FastAPI and PostgreSQL backend that stores, manages, and returns G-code and plotting renders.`}
                        imageURL={"https://github.com/jeffrey500/CNC-Whiteboard-Software/blob/main/github_media/Screenshot%202026-07-28%20at%2010.36.43%E2%80%AFAM.png?raw=true"}
                        imageFrame={true}
                        color="border-lime-500"
                        tech={["Postgresql", "FastAPI", "ReactJS", "OpenCV"]}
                        date="2025-2026 | 6 months"
                    />
                    <ProjectCard
                        github_link="https://github.com/jeffrey500/Flight-Controller"
                        title={"Flight Controller V1.2 & Firmware"} description={"A custom flight controller with a STM32H743 ARM microcontroller on a 4-layer PCB. " +
                            "Features firmware written in bare-metal C ground up, including peripheral drivers, cascaded PID flight-control\n" +
                            "loops, finite-state machines, and Direct Memory Access based sensor and motor ESC communication. " +
                            "PCB includes an integrated IMU (BMI270), Barometer (BMP388), Micro-SD slot + connectors for CAN, USB, UART, SPI, I2C, DAC."}
                        imageURL={"https://github.com/jeffrey500/Flight-Controller/blob/main/Media/Board_front.png?raw=true"}
                        color="border-sky-500"
                        tech={["Bare-Metal C", "STM32", "Digital Design", "Altium"]}
                        date="2026 | 4 months"
                    />
                    <ProjectCard
                        github_link="https://github.com/jeffrey500/EMG_Board"
                        title={"4-Channel EMG Analog Front End"}
                        description={"A fully custom differential 4-channel Electromyogram (EMG) Analog Front End (AFE) and " +
                            "galvanically isolated push-pull-transformer power design on a 4-layer PCB. Utilizes INA828IDR and OPA189IDR high CMRR and Input Impedance Instrumental " +
                            "and Operational Amplifiers, two stage adjustable gain of 306+, and first-order 10 Hz high-pass and 400 Hz low-pass filtering. " +
                            "LTspice was utilized to verify the frequency and transient response of the AFE. Designed for Dr. Robert Chen's Lab @ Krembil Brain Institute."}
                        imageURL={"https://github.com/jeffrey500/EMG_Board/blob/main/media/Board_3D.png?raw=true"}
                        color="border-pink-500"
                        tech={["Analog Design","LTspice", "Altium"]}
                        date="2026 | 2 months"
                    />
                    <ProjectCard
                        github_link="https://github.com/jeffrey500/CNC-Whiteboard"
                        title={"CNC-Whiteboard"}
                        description={"Fully custom wall-mounted, timing belt-driven 1.3m by 2.3m CNC whiteboard plotter. " +
                            "Built with 2040 aluminum extrusions, NEMA 17 steppers, and 3D-printed PETG components."}
                        imageURL={"https://github.com/jeffrey500/CNC-Whiteboard/blob/main/media/title_image.png?raw=true"}
                        imageFrame={true}
                        color="border-amber-500"
                        tech={["Fusion360", "Mechatronics", "3D-Printing"]}
                        date="2025-2026 | 6 months"
                    />
                    <ProjectCard
                        github_link="https://github.com/jeffrey500/ServoBoard"
                        title={"ServoBoard V2.1"}
                        description={"A custom 2-layer PCB that drives up to 4 PWM servos. " +
                            "The board uses the atmega328PB and has variable input and variable servo voltage output using the LM2596S buck and AMS1117 LDO. " +
                            "The board also has 3 6n137 optocouplers for digital interfacing."}
                        imageURL={"https://github.com/jeffrey500/ServoBoard/blob/main/media/board.png?raw=true"}
                        color="border-teal-500"
                        tech={["Power Electronics", "ATmega328", "KiCad"]}
                        date="2026 | 2 months"
                    />
                    <ProjectCard
                        github_link="https://github.com/jeffrey500/OpenBCI-Cyton-Board-Safety-and-Verification/blob/main/OpenBCI%20Cyton%20Board%20Safety%20and%20Verification.pdf"
                        title={"OpenBCI Cyton EEG Verification"}
                        description={"Safety and Verification testing for the OpenBCI Cyton Board in relation to usage for EEG studies. " +
                            "Comparison to the SynAmps-RT 64-channel amplifier. Analyzed average power spectral density and eye-blink amplitudes. " +
                            "Prepared @ Krembil Brain Institute."}
                        imageURL={"https://github.com/user-attachments/assets/e03e6e90-469e-4d2a-8ca5-38119946f39d"}
                        imageFrame={true}
                        color="border-violet-500"
                        tech={["MNE Python", "EEG-analysis", "Verification testing"]}
                        date="2025-2026 | 5 months"
                    />
                </div>
            </div>
        </section>
    );
}

export default Projects;