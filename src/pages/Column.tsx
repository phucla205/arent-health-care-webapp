import { IPost } from 'interfaces';
import column1 from 'assets/images/column-1.jpg';
import column2 from 'assets/images/column-2.jpg';
import column3 from 'assets/images/column-3.jpg';
import column4 from 'assets/images/column-4.jpg';
import column5 from 'assets/images/column-5.jpg';
import column6 from 'assets/images/column-6.jpg';
import column7 from 'assets/images/column-7.jpg';
import column8 from 'assets/images/column-8.jpg';

import Recommend from 'components/Column/Recommend';
import Posts from 'components/Column/Posts';

const Column = () => {
  const columns: Array<IPost> = [
    {
      id: 1,
      date: '2021.05.17   23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtags: ['#魚料理', '#和食', '#DHA'],
      image: column1
    },
    {
      id: 2,
      date: '2021.05.17   23:25',
      title:
        '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ… (Clipping group)',
      hashtags: ['#魚料理', '#和食', '#DHA'],
      image: column2
    },
    {
      id: 3,
      date: '2021.05.17   23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtags: ['#魚料理', '#和食', '#DHA'],
      image: column3
    },
    {
      id: 4,
      date: '2021.05.17   23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtags: ['#魚料理', '#和食', '#DHA'],
      image: column4
    },
    {
      id: 5,
      date: '2021.05.17   23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtags: ['#魚料理', '#和食', '#DHA'],
      image: column5
    },
    {
      id: 6,
      date: '2021.05.17   23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtags: ['#魚料理', '#和食', '#DHA'],
      image: column6
    },
    {
      id: 7,
      date: '2021.05.17   23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtags: ['#魚料理', '#和食', '#DHA'],
      image: column7
    },
    {
      id: 8,
      date: '2021.05.17   23:25',
      title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
      hashtags: ['#魚料理', '#和食', '#DHA'],
      image: column8
    }
  ];

  return (
    <div className="flex justify-center items-center py-14 gap-y-14">
      <div className="container">
        <Recommend />
        <Posts posts={columns} />
      </div>
    </div>
  );
};

export default Column;
