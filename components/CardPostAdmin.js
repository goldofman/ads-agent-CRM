import ButtonDeletePost from "./ButtonDeletePost";

const CardPostAdmin = ({ post, isExample = false }) => {
  return (
    <li
      className="bg-base-100 p-6 rounded-3xl flex justify-between items-start"
      key={isExample ? "example-1" : post._id}
    >
      <div>
        <div className="font-bold mb-1 text-lg">
          {isExample ? "Example - New best feature ever 😉" : post.title}
        </div>
        <div className="opacity-60 leading-relaxed max-h-32 overflow-scroll">
          {isExample
            ? "Example - You should do your best to improve UX ☺️ and make your users happy 🎉"
            : post.description}
        </div>
      </div>
      {!isExample ? (
        <ButtonDeletePost postId={post._id.toString()} />
      ) : (
        <button className="btn btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
              clipRule="evenodd"
            />
          </svg>
          Delete
        </button>
      )}
    </li>
  );
};

export default CardPostAdmin;
