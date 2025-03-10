import ButtonVote from "./ButtonVote";

const CardPost = ({ post, isExample = false }) => {
  return (
    <li
      className="bg-base-100 p-6 rounded-3xl flex justify-between items-start"
      key={isExample ? post.id : post._id}
    >
      <div>
        <div className="font-bold mb-1 text-lg">
          {isExample ? post.title : post.title}
        </div>
        <div className="opacity-60 leading-relaxed max-h-32 overflow-scroll">
          {isExample ? post.description : post.description}
        </div>
      </div>
      {!isExample ? (
        <ButtonVote
          postId={post._id.toString()}
          initialVotesCounter={post.votesCounter}
        />
      ) : (
        <button className="group border px-4 py-2 rounded-xl text-lg duration-200 bg-primary text-primary-content border-transparent pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 15.75 7.5-7.5 7.5 7.5"
            />
          </svg>

          <div>5</div>
        </button>
      )}
    </li>
  );
};

export default CardPost;
