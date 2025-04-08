import { FaFolderOpen } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";

const Project = ({
  projectName,
  projectDescription,
  projectURL,
  githubRepository,
  tags,
  date,
}) => {
  return (
    <div className="flex flex-col bg-mainColor text-white p-5 bedar-sc2:p-8 rounded-md border shadow w-full h-full">
      <FaFolderOpen className="w-6 h-6" />
      <strong className="mt-5 mb-2 text-2xl text-[#fedf89]">
        {projectName}
      </strong>
      <div className="mb-2">{projectDescription}</div>
      <div className="text-sm text-gray-300 mb-2">{tags}</div>
      <div className="flex items-center justify-between mt-auto pt-4">
        <div className="text-sm text-gray-400">{date}</div>
        <div className="flex gap-2">
          {projectURL && (
            <a
              href={projectURL}
              target="_blank"
              rel="noopener noreferrer"
              title="Live Demo"
            >
              <IoEyeSharp className="w-6 h-6 hover:text-yellow-400 transition" />
            </a>
          )}
          {githubRepository && (
            <a
              href={githubRepository}
              target="_blank"
              rel="noopener noreferrer"
              title="Source Code"
            >
              <IoLogoGithub className="w-6 h-6 hover:text-yellow-400 transition" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
