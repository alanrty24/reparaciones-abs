import React from "react";
import { IconType } from "react-icons";
import { spaceGrotesk } from "@/app/fonts";
interface TechnologyCardProps {
  name: string;
  description: string;
  Icon: IconType;
  nroItem ?: number | string;
  onDetailClick?: () => void;
}

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  name,
  description,
  Icon,
  nroItem,
}) => {
  
  return (
    <div className="group bg-[#1B1B1B] relative px-6 py-8 flex flex-col items-start transition-all duration-500 ease-in-out overflow-hidden shadow-lg hover:shadow-xl min-h-64 border-l-2 border-[#1B1B1B] hover:border-l-red-500/30 ">
        {
        nroItem && (
          <div className="absolute -right-4 -top-6 w-24 h-24 text-white flex items-center justify-center font-bold rounded-tr-lg">
            <h3
            className="text-8xl text-red-800 opacity-20"
            >
            {nroItem}
            </h3>
          </div>
        )}
      <div className="text-red-600 text-2xl mb-4">
        <Icon />
      </div>
      <h4 className={`${spaceGrotesk.className} font-bold text-xl uppercase mb-2 text-white tracking-wide`}>
        {name}
      </h4>
      <p className="text-gray-300 text-base flex-1 mb-6">{description}</p>
      </div>
  );
};

export default TechnologyCard;
