
import { Skill_data } from "../data/skills";

const SkillItem = () => {
  return (
    <div className="skills mx-auto px-20 bg-slate-300 w-full h-screen relative ">
      <div className="p-4 flex items-center gap-2">
        {Skill_data.map(
          (item, index: any) =>
           

            index < 10 && (
              <div key={index}>
                {/* <img src={next} className="border bg-gray-600 rounded-full" alt="" /> */}
                <span className=" flex rounded-full overflow-hidden p-6 border-blue-700 border-2  w-40 h-40 bg-blue-700 items-center ">
                  <img src={item.Image} alt="" />
                </span>
              </div>
            )
        )}

        {/* <img src={next} alt="img" className='h-30 w-30 rounded-full ' /> */}
      </div>
    </div>
  );
};

export default SkillItem;
