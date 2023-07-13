import KnifeIcon from 'assets/images/icon_knife.png';
import CupIcon from 'assets/images/icon_cup.png';

const MEAL_LIST: Array<{ id: number; name: string; icon: any }> = [
  {
    id: 1,
    name: 'Morning',
    icon: KnifeIcon
  },
  {
    id: 2,
    name: 'Lunch',
    icon: KnifeIcon
  },
  {
    id: 3,
    name: 'Dinner',
    icon: KnifeIcon
  },
  {
    id: 4,
    name: 'Snack',
    icon: CupIcon
  }
];

const Meal = () => {
  return (
    <div className="flex my-6 justify-center">
      <div className="container">
        <div className="flex justify-center md:gap-20 gap-4">
          {MEAL_LIST?.map((meal) => (
            <div className="hexagon" key={meal.id}>
              <img src={meal.icon} alt="" className="w-10 md:w-auto" />
              <p className="text-light font-inter text-sm md:text-xl font-normal">
                {meal.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Meal;
