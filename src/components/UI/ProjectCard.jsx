const ProjectCard = (props) => {
  return (
    <NormalOrientationCard
      projectUrl={props.projectUrl}
      projectImg={props.projectImg}
      title={props.title}
      description={props.description}
      badges={props.children}
    />
  );
};

// Normal Stacking
const NormalOrientationCard = (props) => {
  return (
    <div className="flex justify-center">
      {/* Card */}
      <div className="flex flex-col items-center w-[80%] gap-4 ease-linear duration-150  hover:bg-backdrop-white-transparent border border-transparent hover:border-zinc-500 rounded-lg p-4">
        {/* Image*/}
        <div className="w-full h-full flex flex-col justify-end">
          <a href={props.projectUrl}>
            <img
              src={props.projectImg}
              className="cursor-pointer h-[200px] object-fit shadow-xl  border-[0.5px] border-black"
            />
          </a>
        </div>

        {/* Project Content */}
        <div className="h-full flex flex-col justify-between">
          {/* Title + Description Content */}
          <div className="size-full">
            <span className="font-semibold text-lg ">{props.title}</span>
            <p className="text-zinc-300 font-thin mt-2 text-sm text-justify">
              {props.description}
            </p>
          </div>
          {/* Badges */}
          <div className="flex mt-4 gap-2">{props.badges}</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
