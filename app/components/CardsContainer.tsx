import { Card } from "./Card";
import { Projects } from "@/constants";

import React from "react";

const CardsContainer = () => {
  return (
    <div className="flex items-center justify-center bg-transparent bg-center bg-cover pl-3 pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3  gap-5 max-w-[80%] xl:max-w-[70%] max-h-[90%] shadow-2xl ">
        {Projects.map((project, index) => (
          <Card
            key={index}
            header={project.header}
            title={project.title}
            text={project.text}
            image={project.src}
            demo={project.demo}
            github={project.github}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
