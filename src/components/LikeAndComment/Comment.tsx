import { SendHorizontal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Comment = () => {
  const [comment, setComment] = useState("");

  const handleCommentSubmit = () => {
    if (comment.length === 0) {
      toast.error("Enter something in comment before submitting!", {
        duration: 2000,
      });
      return;
    }

    toast.success("Comment done!", {
      duration: 2000,
    });
    setComment("");
  };

  return (
    <div className="flex flex-col w-full">
      <h1 className="text-3xl font-semibold font-zyada">Leave a comment!!!</h1>
      <div className="flex w-full relative">
        <input
          type="text"
          className="w-full border-b-2 p-2 outline-none border-b-black"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              handleCommentSubmit();
            }
          }}
        />
        <SendHorizontal
          className="absolute right-0 top-2 cursor-pointer"
          onClick={handleCommentSubmit}
        />
      </div>
    </div>
  );
};

export default Comment;
