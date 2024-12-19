import { Badge, ProjectCard } from "@/exports/ui";
import { projectList } from "@/exports/data";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col justify-center items-center w-full p-8 bg-primary-light"
    >
      {/* Title */}
      <span className="text-xl my-2 font-bold">Projects</span>

      {/* My Project flex flex-col lg:flex-row items-center gap-4*/}
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        {/* Render Projects */}
        {projectList.map((project, index) => {
          const badges = project.badges.map(({ text, img }, index) => (
            <Badge key={index} text={text} img={img} />
          ));
          return (
            <ProjectCard
              key={index}
              projectImg={project.projectImg}
              title={project.title}
              description={project.description}
              projectUrl={project.projectUrl}
              reversed={false}
            >
              {badges}
            </ProjectCard>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
