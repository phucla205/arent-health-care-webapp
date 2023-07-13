import { IPost } from 'interfaces';

type Props = {
  post: IPost;
};

const Post = ({ post }: Props) => {
  const { image, date, title, hashtags } = post;
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="relative bg-cover pt-[140px]"
      >
        <div className="absolute w-36 h-6 bottom-0 left-0 bg-primary-300 text-light font-inter">
          <span className="text-[15px] px-3 py-1">{date}</span>
        </div>
      </div>
      <div className="text-[15px] text-dark-500 line-clamp-2">{title}</div>
      <div>
        {hashtags?.map((tag) => (
          <span key={tag} className="text-xs text-primary-400 pr-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Post;
