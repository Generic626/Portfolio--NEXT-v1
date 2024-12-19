import { Badge, CareerCard } from "@/exports/ui";
import { careerList } from "@/exports/data";

const Experience = () => {
  return (
    <section id="experience" className="bg-primary text-white w-full p-8">
      {/* Career Summary Title */}
      <div className="text-xl font-bold flex mb-4">
        <div className="bg-highlight w-[4px] mr-2" />
        <span>My Career</span>
      </div>

      {/* Career List */}
      <div className="flex flex-col justify-center items-center">
        <table className="w-full md:w-[70%] lg:w-[40%]">
          {/* Table headers for sizing */}
          <thead>
            <tr>
              <th className="w-[20%]"></th>
              <th></th>
            </tr>
          </thead>
          {/* Generate Table rows */}
          <tbody>
            {careerList.map((career, index) => {
              const badges = career.badges.map(({ text, img }, index) => (
                <Badge key={index} text={text} img={img} />
              ));
              return (
                <CareerCard
                  key={index}
                  timeframe={career.timeframe}
                  jobTitle={career.jobTitle}
                  jobDesc={career.jobDesc}
                >
                  <div className="flex gap-2">{badges}</div>
                </CareerCard>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Experience;
