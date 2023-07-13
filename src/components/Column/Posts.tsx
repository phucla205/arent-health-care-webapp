import { IPost } from 'interfaces';
import MoreButton from 'components/MoreButton';
import Post from './Post';

type Props = {
  posts: Array<IPost>;
};

const Posts = ({ posts }: Props) => {
  return (
    <>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-x-2 gap-y-4 mt-14">
        {posts?.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
      <div className="flex justify-center w-full mt-8">
        <MoreButton>コラムをもっと見る</MoreButton>
      </div>
    </>
  );
};

export default Posts;
