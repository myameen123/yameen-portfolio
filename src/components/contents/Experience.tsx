import React from "react";
import { TimeLine, TimeLineItem } from "../utils/ExpTimeLine";

const Experience = () => {
  return (
    <TimeLine>
      <TimeLineItem active>
        <TimeLineItem.Title>
          <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
            Full Stack developer at radwi
          </span>{" "}
          • <span className="text-neutral-200">July 2023 - Present</span>
        </TimeLineItem.Title>
        <TimeLineItem.Description>
          As a Full Stack Developer at Radwi, I am building and managing their
          portfolio and product shop website using Next.js and Express.js. My
          role involves developing a seamless user experience, integrating
          e-commerce functionalities, and ensuring the site is responsive and
          efficien
        </TimeLineItem.Description>
      </TimeLineItem>

      <TimeLineItem last>
        <TimeLineItem.Title>
          <span className="font-medium transition-all hover:text-white hover:underline hover:underline-offset-2">
            FULL STACK DEVELOPER (INTERN)
          </span>{" "}
          • <span className="text-neutral-200">Jun 2023 - Sept 2023</span>
        </TimeLineItem.Title>
        <TimeLineItem.Description>
          Developed and maintained MERN stack applications to meet diverse
          client requirements. Implemented Facebook Pixel for website tracking,
          providing data-driven insights for marketing. Utilized Tailwind CSS to
          create modern and visually appealing user interfaces.
        </TimeLineItem.Description>
      </TimeLineItem>
    </TimeLine>
  );
};

export default Experience;
