import Comment from "./Comment";
import Like from "./Like";

const LikeAndCommentSection = () => {
  return (
    <div className="w-full flex flex-col items-center gap-10">
      <Like />
      <Comment />
    </div>
  );
};

export default LikeAndCommentSection;
