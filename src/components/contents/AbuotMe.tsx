import React from "react";
import AnimationContainer from "../utils/AnimationContainer";

const AbuotMe = () => {
  return (
    <AnimationContainer customClassName="w-full py-12 lg:py-16">
      <h2 className="mb-8 text-2xl font-bold tracking-tight text-center text-white lg:text-start">
        About me
      </h2>

      <p className="w-full text-base font-normal leading-7 text-justify text-neutral-200">
        👋Hi, everyone! I&apos;m a Full Stack Developer with over 4 years of
        experience, ready to help bring your ideas to life with clean, efficient
        code. I&apos;ve worked with clients globally, ensuring top-notch results
        and 100% satisfaction. My skills include React, Node.js, JavaScript, and
        Next.js. I&apos;m dedicated, reliable, and available 16 hours a day to
        support your project. Let&apos;s collaborate to make your vision a
        reality
      </p>
    </AnimationContainer>
  );
};

export default AbuotMe;
