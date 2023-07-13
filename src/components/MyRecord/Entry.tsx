import bgBodyRecord from 'assets/images/MyRecommend-1.jpg';
import bgExercise from 'assets/images/MyRecommend-2.jpg';
import bgDiary from 'assets/images/MyRecommend-3.jpg';

const CATEGORIES: Array<{
  id: number;
  name: string;
  description: string;
  background: any;
}> = [
  {
    id: 1,
    name: 'BODY RECORD',
    description: '自分のカラダの記録',
    background: bgBodyRecord
  },
  {
    id: 2,
    name: 'MY EXERCISE',
    description: '自分の運動の記録',
    background: bgExercise
  },
  {
    id: 3,
    name: 'MY DIARY',
    description: '自分の日記',
    background: bgDiary
  }
];

const Entry = () => {
  return (
    <div className="grid grid-cols-3 gap-12">
      {CATEGORIES?.map((category) => (
        <div className="relative" key={category.id}>
          <div
            className="bg-dark-500 bg-no-repeat bg-cover after:block after:pb-[100%]"
            style={{
              backgroundImage: `url(${category.background})`,
              backgroundBlendMode: 'luminosity',
              filter: 'brightness(60%)'
            }}
          />
          <div className="absolute top-0 left-0 bottom-0 right-0 text-center flex justify-center items-center flex-col border-solid border-primary-300 border-[24px]">
            <p className="text-primary-300 font-inter text-2xl font-normal">
              {category.name}
            </p>
            <p className="mt-3 text-light text-sm bg-primary-400 px-3 py-[0.5px] w-[160px]">
              {category.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Entry;
