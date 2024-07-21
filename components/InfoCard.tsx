import React from "react";

interface InfoCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  icon: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  description,
  buttonText,
  buttonLink,
  icon,
}) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 flex flex-col items-center">
      <div className="text-6xl text-red-500 mb-4">{icon}</div>
      <h3 className="text-xl font-thin mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 text-center">{description}</p>
      <a
        href={buttonLink}
        className="px-4 py-2 w-full text-sm text-center border border-red-500 text-bg-red rounded-xl"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default InfoCard;
