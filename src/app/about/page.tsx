import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us information",
  description: "All information",
};

const About = () => {
  return (
    <>
      <h1>About</h1>
      <img src="https://picsum.photos/200" alt="foto random" />
    </>
  );
};

export default About;
