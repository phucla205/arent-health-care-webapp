import BodyChart from 'components/Home/BodyChart';
import { IBodyWeightFat } from 'interfaces';

const BodyWeightFatChart = ({ data }: { data: Array<IBodyWeightFat> }) => {
  return (
    <div className="flex w-full h-full bg-dark-600">
      <BodyChart data={data} />
    </div>
  );
};

export default BodyWeightFatChart;
