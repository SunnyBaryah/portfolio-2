import pic from "/Calci.JPG?url";
export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="w-60 h-60 lg:w-80 lg:h-80 xl:w-96 xl:h-96 relative border-white border-2 overflow-hidden group">
        <div className="absolute inset-0 transition-transform duration-500 transform group-hover:translate-y-80  z-20 text-black bg-white h-full w-full flex justify-center items-center">
          <h1 className="text-center text-2xl xl:text-4xl font-semibold">
            {project.title}
          </h1>
        </div>
        <img
          className="w-full h-full absolute inset-0 z-10"
          src={project.pic}
        />
        <a
          className="absolute top-[16rem] xl:top-[21rem] right-0 bg-black text-blue-400 hover:text-white duration-150 inset-auto z-30 mx-4 px-3 py-1"
          href={project.link}
        >
          Link
        </a>
      </div>
      <div className="w-60">
        <p className="text-center">{project.descp}</p>
      </div>
    </div>
  );
}
