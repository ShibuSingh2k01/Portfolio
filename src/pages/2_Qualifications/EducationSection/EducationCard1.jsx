const EducationCard1 = () => {
  return (
    <>
      <div className="rounded-lg bg-secondary text-primary shadow-xl">
        <div className="flex flex-col">
          <div className="flex flex-col items-baseline justify-between px-4 pb-2 pt-4 lg:flex-row">
            <div className="text-xl font-semibold">
              Army Public School, S.P Marg, Lucknow
            </div>
            <div className="pt-2 font-semibold lg:pt-0">2014 - 2021</div>
          </div>
          <div className="flex flex-col px-4">
            <div className="mb-2">
              <h2 className="text-md mb-1 text-primary">Class X (93%)</h2>
              <p className="hidden text-gray-700 lg:block">
                Scored 9.8 CGPA in Class 10th
              </p>
            </div>
            <div className="mb-2">
              <h2 className="text-md mb-1 text-primary">Class XII (90%)</h2>
              <p className="hidden text-gray-700 lg:block">
                Scored 90% in Class 12th
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationCard1;
