import Typewriter from "typewriter-effect";
import { ChevronDown, Contact, Laptop, SquareChartGantt } from "lucide-react";

export default function Home({ activeSection, scrollToSection }) {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <div className="mb-8">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1">
          <img
            className="w-full h-full rounded-full bg-white flex items-center justify-center"
            src="/images/menhera.png"
            alt="menhera"
          />
        </div>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
        LUTFI{" "}
        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          ROBBANI
        </span>
      </h1>

      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        IT Student focused on Software Development & Machine Learning |
        Passionate about building impactful tech solutions | Lifelong learner
      </p>

      <div className="flex justify-center space-x-6 md:hidden mb-6 md:mb-0">
        <button
          onClick={() => scrollToSection("projects")}
          className="text-gray-400 hover:text-purple-400 transition-colors flex flex-col items-center gap-1"
        >
          <SquareChartGantt size={24} />
          <span>Project</span>
        </button>

        <button
          onClick={() => scrollToSection("skills")}
          className="text-gray-400 hover:text-purple-400 transition-colors flex flex-col items-center gap-1"
        >
          <Laptop size={24} />
          <span>Skill</span>
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-gray-400 hover:text-purple-400 transition-colors flex flex-col items-center gap-1"
        >
          <Contact size={24} />
          <span>Contact</span>
        </button>
      </div>

      <div className="text-gray-400 text-xl font-dancing hidden md:block">
        {activeSection === "home" ? (
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Code All Night, Bugs Take Flight.")
                .start(); // mulai ketik
            }}
            options={{
              loop: false,
              delay: 50,
              cursor: "|",
            }}
          />
        ) : (
          ""
        )}
      </div>

      <button onClick={() => scrollToSection("about")}>
        <div className=" transform animate-bounce md:absolute md:bottom-10 md:left-1/2 md:-translate-x-1/2 ">
          <ChevronDown className="text-gray-400" size={32} />
        </div>
      </button>
    </div>
  );
}
