import link from "./assets/link.svg";

const ProjectCard = ({github_link, color, title, description, imageURL, tech1, tech2, tech3, date}) => {
    return (
        <a
            href={github_link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-white rounded-4xl shadow-sm hover:shadow-2xl duration-500 border-6 ${color} p-7 my-7 grid grid-cols-[2fr_1fr] gap-2`}>
            <div className="flex flex-col">
                <div className="flex flex-row">
                    <h2 className="text-3xl font-bold text-left pb-5">{title}</h2>
                    <img src={link} className="h-7 w-7 translate-x-3 translate-y-1" alt="link-out"/>
                </div>
                <p className="text-gray-500 text-gray-600 text-left max-w-130">{description}</p>
                <div className="flex flex-row mt-7 font text-sm">
                    <div className="mr-3 py-1 px-2 bg-gray-200 rounded-md">{tech1}</div>
                    <div className="mr-3 py-1 px-2 bg-gray-200 rounded-md">{tech2}</div>
                    <div className="mr-3 py-1 px-2 bg-gray-200 rounded-md">{tech3}</div>
                    <div className="mr-3 py-1 px-2 bg-gray-200 rounded-md">{date}</div>
                </div>
            </div>

            <div
                className="h-50 w-65 overflow-hidden justify-self-end flex items-center justify-center">
                <img
                    src={imageURL}
                    alt={title}
                    className="w-full h-full object-contain"
                />
            </div>
        </a>
    );
};

export default ProjectCard;