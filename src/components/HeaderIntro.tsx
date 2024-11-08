import React from "react";
import Button from "./Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { useLanguage } from "../context/language-context";
import { BsMouse } from "react-icons/bs";

// Add this style once at the root of your component file, outside the main function
const gradientAnimationStyles = `
@keyframes moveGradient {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}`;

const HeaderIntro: React.FC = () => {
  const { language } = useLanguage();
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="hero flex flex-col justify-center items-center gap-10 h-full max-lg:gap-4 p-4"
      ref={ref}
      id="home"
    >
      {/* Add the gradient animation styles */}
      <style>
        {gradientAnimationStyles}
      </style>

      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      {/* Profile Image */}
      <img
        src={headerIntroData.profilepicture}
        alt={headerIntroData.profilepicture}
        className="w-1/6 drop-shadow-2xl rounded-full shadow-2xl avatar-img max-lg:w-1/2"
      />

      {/* Name and Wave Icon */}
      <h1 className="text-center">
        {language === "DE"
          ? headerIntroData.title.de
          : headerIntroData.title.en}
        <span className="wave text-7xl ml-2">&#128075;&#127997;</span>
      </h1>

      {/* Subtitle with animated gradient */}
      <h2
        style={{
          background: "linear-gradient(270deg, #CC6600, #DDA0DD, #FF7F00)",
          backgroundSize: "400% 400%",
          backgroundClip: "text",
          color: "transparent",
          animation: "moveGradient 8s ease infinite",
          display: "inline-block",
          fontWeight: "bold",
        }}
        className="text-center"
      >
        {language === "DE"
          ? headerIntroData.subtitle.de
          : headerIntroData.subtitle.en}
      </h2>

      {/* Description - Displayed only on desktop */}
      <p className="w-1/2 text-center max-lg:hidden">
        {language === "DE"
          ? headerIntroData.description.de
          : headerIntroData.description.en}
      </p>

      {/* Button and Scroll Icon - Visible on both desktop and mobile */}
      <div className="button-container flex items-center justify-center mr-8 gap-10 mb-12 max-lg:flex-col max-lg:items-center">
        {headerIntroData.buttons.map((button, index) => (
          <Button
            key={index}
            label={language === "DE" ? button.label.de : button.label.en}
            iconSVG={button.icon}
            link={`#${button.name.toLocaleLowerCase()}`}
            buttoncolor={button.color}
            onClick={() => {
              setActiveSection(button.name);
              setTimeOfLastClick(Date.now());
            }}
          />
        ))}
      </div>

      {/* Scroll down icon */}
      <div className="scroll-down-container animate-bounce flex gap-6 max-lg:block">
        <BsMouse className="text-[2.6rem]" />
      </div>
    </section>
  );
};

export default HeaderIntro;