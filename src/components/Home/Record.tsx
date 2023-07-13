import { IRecord } from 'interfaces';
import MoreButton from 'components/MoreButton';

type Props = {
  records: Array<IRecord>;
};

const Record = ({ records }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="container">
        <div className="grid md:grid-cols-4 grid-cols-3 gap-2">
          {records?.map((record) => (
            <div
              key={record.id}
              style={{ backgroundImage: `url(${record.image})` }}
              className="bg-no-repeat bg-cover relative w-full pt-[100%]"
            >
              <div className="absolute bottom-0 left-0 bg-primary-300 text-light font-inter">
                <span className="p-2 md:text-lg font-inter">{record.time}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex mt-8 mb-16 justify-center w-full">
          <MoreButton>記録をもっと見る</MoreButton>
        </div>
      </div>
    </div>
  );
};

export default Record;
