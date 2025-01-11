import { Badge, Paragraph } from "@/exports/ui";
import { aboutMe } from "@/exports/data";

const About = () => {
  return (
    <section
      id="about"
      className="bg-primary-light text-white h-fit lg:h-[80%] w-full flex flex-col lg:flex-row relative"
    >
      {/* Right side section */}
      <div className="w-full h-full lg:w-1/2 flex justify-center items-center order-2 lg:order-1">
        <div className="flex flex-col h-auto w-full lg:w-[80%] rounded-lg p-8">
          <div className="text-2xl font-bold flex mb-4">
            <div className="bg-highlight w-[4px] mr-2" />
            <span>About Me</span>
          </div>

          {/* About me Body */}
          {aboutMe.map((json, index) => (
            <Paragraph key={index} text={json.text} />
          ))}

          {/* Badges */}
          {/* <div className="flex items-center gap-2 bg-white rounded-full w-fit py-2 px-4 shadow-sm">
            <span>❤️</span>
            <Badge text="React" img="/tech/react.png" />
            <Badge text="Tailwind" img="/tech/tailwind.png" />
            <span>⭐</span>
          </div> */}
        </div>
      </div>

      {/* Left side image */}
      <div className="bg-white w-full lg:w-1/2 flex justify-center items-center order-1 lg:order-2 p-4 lg:p-0">
        <img
          className="object-cover size-full md:size-[90%] lg:size-[80%] rounded-2xl "
          src="/assets/profile.png"
        />
      </div>
    </section>
  );
};

export default About;
