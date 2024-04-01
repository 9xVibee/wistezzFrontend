import { ThumbsDown, ThumbsUp } from "lucide-react";
import ToolTip from "../reusable-comp/ToolTip";

const Like = () => {
  return (
    <div className="flex items-center flex-col-reverse justify-center gap-2 w-full md:w-[80%]">
      <div className="flex items-center">
        <div className="flex flex-col justify-center items-center">
          <ToolTip label="Like">
            <ThumbsUp />
          </ToolTip>
          <p>123</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <ToolTip label="Dis-Like">
            <ThumbsDown />
          </ToolTip>
          <p>10</p>
        </div>
      </div>
    </div>
  );
};

export default Like;
