import React from 'react';

const ExperienceCard = ({organization, title, general, description = [], location, date,}) => {
    return (
        <div className={`flex flex-col bg-white rounded-4xl shadow-sm hover:shadow-2xl duration-500 border-6 border-gray-500 p-7 my-7 gap-2`}>
            <h2 className="text-3xl font-bold text-left">{organization}</h2>
            <h2 className="text-xl text-left font-bold text-gray-600">{title}</h2>
            <p className="text-gray-500 text-gray-600 text-left max-w-200">{general}</p>
            <ul className="list-disc list-inside ml-1 text-gray-600">
                {description.map((text, index) => (
                    <li key={index}>{text}</li>
                ))}
            </ul>
            <div className="flex flex-row mt-2 font text-sm">
                <div className="mr-3 py-1 px-2 bg-gray-200 rounded-md">{location}</div>
                <div className="mr-3 py-1 px-2 bg-gray-200 rounded-md">{date}</div>
            </div>
        </div>
    );
};

export default ExperienceCard;