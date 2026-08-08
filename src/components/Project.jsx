const Project = () => {
  return (
    <div>
      <div className="space-y-5">
        <h2 className="text-md font-work text-yellow-500 space-x-4">
          Own Projects
        </h2>
        <h2 className="uppercase font-playfair flex gap-[10px] text-2xl">
          Have <span>Some</span> Projects
        </h2>
      </div>

      <div id="projects" className="mt-10">
        <div className="flex justify-center items-center">
          <h2 className="text-2xl text-yellow-400 font-bold">
            Project are going on ...........
          </h2>
        </div>

        {/*
        <div className="mt-8">
          <ProjectGrid projects={projects} limit={2} showHint showMoreLink />
        </div>
        */}
      </div>
    </div>
  );
};

export default Project;