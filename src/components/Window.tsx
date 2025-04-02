import About from "./Content/About";
import Projects from "./Content/Projects";
import { useState } from "react";

const Window = () => {
  const [activeSection, setActiveSection] = useState("about");

  const renderContent = () => {
    switch (activeSection) {
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      case "resume":
        return (
          <a href="../../../Timothy_Dacalos_Resume.pdf" target="_blank">
            Resume
          </a>
        );
      default:
        return <About />;
    }
  };

  return (
    <div className="mockup-window bg-base-100 border border-base-300">
      <div className="flex flex-col w-full">
        <div className="bg-base-200 p-2">
          <ul className="flex space-x-4">
            <li>
              <button
                className={`px-4 py-2 rounded ${
                  activeSection === "about" ? "bg-base-300 text-primary" : ""
                }`}
                onClick={() => setActiveSection("about")}
              >
                About
              </button>
            </li>
            <li>
              <button
                className={`px-4 py-2 rounded ${
                  activeSection === "projects" ? "bg-base-300 text-primary" : ""
                }`}
                onClick={() => setActiveSection("projects")}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                className={`px-4 py-2 rounded ${
                  activeSection === "resume" ? "bg-base-300 text-primary" : ""
                }`}
                onClick={() => setActiveSection("resume")}
              >
                Resume
              </button>
            </li>
          </ul>
        </div>

        <div className="p-6">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Window;
