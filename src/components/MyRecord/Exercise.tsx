const data = Array.from({ length: 30 }, (_, i) => i);

const Detail = () => {
  return (
    <div className="flex justify-between border-b border-solid border-gray-400 mt-2">
      <div className="flex">
        <span className="w-[5px] h-[5px] rounded-full bg-light mt-2 mr-3" />
        <div>
          <p className="text-light">家事全般（立位・軽い）</p>
          <p className="text-primary-300 font-inter font-normal">26kcal</p>
        </div>
      </div>
      <div className="font-inter font-normal text-lg text-primary-300">
        10 min
      </div>
    </div>
  );
};

const Exercise = () => {
  return (
    <div className="bg-dark-500 mt-14 p-4 pb-6">
      <div className="font-inter text-light font-normal flex flex-row items-center">
        <span className="text-sm">
          MY <br />
          EXERCISE
        </span>
        <span className="text-[22px] pl-4">2021.05.21</span>
      </div>
      <div className="grid grid-cols-2 gap-x-10 mt-1 h-[200px] overflow-y-auto pr-8">
        {data?.map(() => (
          <Detail />
        ))}
      </div>
    </div>
  );
};

export default Exercise;
