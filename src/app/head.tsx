"use client";

import { usePathname } from "next/navigation";
import React from "react";

const Head = () => {
  const pathname = usePathname();

  const title = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Muhammad Yameen ${
      pathname === "/" ? "" : "• " + title.replace(/[-/]/g, " ")
    }`,
    description:
      "I'm a software engineer and a web developer. I love to build things for the web and mobile devices. I love to learn new things and I'm always looking for new challenges.",
    keywords:
      "Muhammad Yameen, Web Developer, Software Engineer, Full Stack Developer, React, Next.js, Node.js, JavaScript, TypeScript, Tailwind CSS, MongoDB, Express.js, MERN Stack, GraphQL, Prisma, PostgreSQL, MySQL, SQLite, Firebase, AWS, GCP, Web Development, Mobile Development, Android, iOS, C, Python, Figma.",
    type: "website",
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="follow, index" />
      <meta content={meta.description} name="description" />
      <meta name="keywords" content={meta.keywords} />
      <meta
        property="og:url"
        content={`http://muhammad-yameen.vercel.app/${pathname}`}
      />
      <link
        rel="canonical"
        href={`http://muhammad-yameen.vercel.app/${pathname}`}
      />
      <link rel="me" href="mailto:yameenmuhammad960@gmail.com" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Muhammad Yameen" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@Muhamma46095355" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
    </>
  );
};

export default Head;
