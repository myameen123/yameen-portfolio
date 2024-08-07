"use client";

import { getProjects } from "@/graphql";
import { Project as ProjectProps } from "@/types";
import { useEffect, useState } from "react";
import { Skeleton } from "../ui/Skeleton";
import AnimationContainer from "../utils/AnimationContainer";
import Card from "../utils/Card";
import { PROJECTS } from "../../../constants/constants";

const ProjectCards = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      // const fetchProjects = async () => {
      //     const data = await getProjects();
      //     setProjects(data);
      //     setIsLoading(false);
      // };
      // fetchProjects();

      setProjects(PROJECTS);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, []);

  //   const data = projects?.map((item: any) => item.node);
  const data = projects;

  return (
    <AnimationContainer customClassName="w-full flex flex-col">
      <div className="flex flex-col items-center justify-center w-full mt-8 space-y-5 md:space-y-8">
        {isLoading ? (
          <>
            <Skeleton className="w-full h-40" />
            <Skeleton className="w-full h-40" />
            <Skeleton className="w-full h-40" />
            <Skeleton className="w-full h-40" />
            <Skeleton className="w-full h-40" />
            <Skeleton className="w-full h-40" />
          </>
        ) : (
          <>
            {data &&
              data?.map((project: ProjectProps) => (
                <Card key={project.title} project={project} />
              ))}
          </>
        )}
      </div>
    </AnimationContainer>
  );
};

export default ProjectCards;
