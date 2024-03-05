import Image from "next/image";
import React from "react";

const HeroComponent = () => {
  return (
    <div className="bg-gray-900 text-white ">
      <div className="container mx-auto flex items-center justify-center h-screen">
        <div className="flex flex-col md:flex-row items-center md:space-x-8">
          <div className="relative rounded-full overflow-hidden w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/images/userImg.png"
              className="profile-img"
              layout="fill"
              objectFit="cover"
              alt="Joe's personal headshot"
            />
          </div>
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hey, I&apos;m Mehrab Hossain 👋
            </h1>
            <p className="text-lg mb-6">
              I&apos;m a software developer based in Lagos, Nigeria. I
              specialize in building (and occasionally designing) exceptional
              websites, applications, and everything in between.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/olawanle_joel"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="https://github.com/olawanlejoel"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/olawanlejoel/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
