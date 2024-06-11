import EducationCard1 from "./EducationCard1";
import EducationCard2 from "./EducationCard2";

const Education = () => {
  return (
    <>
      <div className="flex flex-col gap-4 divide-y-2">
        <div className="pt-0">
          <EducationCard1 />
        </div>
        <div className="pt-4">
          <EducationCard2 />
        </div>
      </div>
    </>
  );
};

export default Education;
