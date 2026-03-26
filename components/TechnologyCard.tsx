import React from "react";
import { IconType } from "react-icons";

interface TechnologyCardProps {
  name: string;
  description: string;
  Icon: IconType;
}


const TechnologyCard: React.FC<TechnologyCardProps> = ({ name, description, Icon }) => (
  <div className="bg-neutral-900 rounded-xl p-6 flex flex-col items-start transition-color duration-500 shadow-lg hover:shadow-xl min-h-56 border-l-4 border-l-red-300/30 hover:border-l-red-500">
    <div className="text-red-600 text-3xl mb-4">
      <Icon />
    </div>
    <h4 className="font-bold text-xl mb-2 text-white tracking-wide">{name}</h4>
    <p className="text-gray-300 text-base flex-1 mb-6">{description}</p>
    <a
      href="#"
      className="mt-auto text-red-500 font-bold text-sm flex items-center gap-2 hover:underline tracking-wide group-hover:text-white transition-colors"
      tabIndex={0}
    >
      VER DETALLES <span aria-hidden="true">→</span>
    </a>
  </div>
);

export default TechnologyCard;
