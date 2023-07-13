import Entry from 'components/MyRecord/Entry';
import Record from 'components/MyRecord/Record';
import Exercise from 'components/MyRecord/Exercise';
import Diary from 'components/MyRecord/Diary';

const MyRecord = () => {
  return (
    <div className="flex justify-center">
      <div className="container py-16">
        <Entry />
        <Record />
        <Exercise />
        <Diary />
      </div>
    </div>
  );
};

export default MyRecord;
