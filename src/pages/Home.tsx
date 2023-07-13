import { IAchievementRate, IBodyWeightFat, IRecord } from 'interfaces';
import AchievementRate from 'components/Home/AchievementRate';
import BodyWeightFatChart from 'components/Home/BodyWeightFatChart';
import Meal from 'components/Home/Meal';
import Record from 'components/Home/Record';
import d01 from 'assets/images/d01.jpg';
import d02 from 'assets/images/d02.jpg';
import l01 from 'assets/images/l01.jpg';
import l02 from 'assets/images/l02.jpg';
import l03 from 'assets/images/l03.jpg';
import m01 from 'assets/images/m01.jpg';
import s01 from 'assets/images/s01.jpg';

const ACHIEVEMENT_RATE: IAchievementRate = {
  percent: 75,
  date: '05/21'
};

const BODY_WEIGHT_FAT: Array<IBodyWeightFat> = [
  {
    month: '6月',
    weight: 94.2,
    fat: 94.2
  },
  {
    month: '7月',
    weight: 86.4,
    fat: 90.8
  },
  {
    month: '8月',
    weight: 69.2,
    fat: 62.4
  },
  {
    month: '9月',
    weight: 66,
    fat: 73.2
  },
  {
    month: '10月',
    weight: 49.2,
    fat: 67.6
  },
  {
    month: '11月',
    weight: 47.6,
    fat: 55.6
  },
  {
    month: '12月',
    weight: 37.2,
    fat: 67.6
  },
  {
    month: '1月',
    weight: 34.4,
    fat: 52
  },
  {
    month: '2月',
    weight: 28.8,
    fat: 44
  },
  {
    month: '3月',
    weight: 14.8,
    fat: 40.4
  },
  {
    month: '4月',
    weight: 10.4,
    fat: 35.6
  },
  {
    month: '5月',
    weight: 6,
    fat: 40.4
  }
];

const RECORDS: Array<IRecord> = [
  { id: 1, image: m01, time: '05.21.Morning' },
  { id: 2, image: l03, time: '05.21.Lunch' },
  { id: 3, image: d01, time: '05.21.Dinner' },
  { id: 4, image: l01, time: '05.21.Snack' },
  { id: 5, image: m01, time: '05.20.Morning' },
  { id: 6, image: l02, time: '05.20.Lunch' },
  { id: 7, image: d02, time: '05.20.Dinner' },
  { id: 8, image: s01, time: '05.21.Snack' }
];

const Home = () => {
  return (
    <div>
      <div className="w-full md:flex">
        <div className="md:w-[40%] w-full">
          <AchievementRate
            percent={ACHIEVEMENT_RATE?.percent || 0}
            date={ACHIEVEMENT_RATE?.date || ''}
          />
        </div>
        <div className="md:w-[60%] w-full">
          <BodyWeightFatChart data={BODY_WEIGHT_FAT} />
        </div>
      </div>
      <Meal />
      <Record records={RECORDS} />
    </div>
  );
};

export default Home;
