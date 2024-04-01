import LikeAndCommentSection from "@/components/LikeAndComment/LikeAndCommentSection";
import ToolTip from "@/components/reusable-comp/ToolTip";
import { ArrowUpRightFromCircle, Bookmark, MoveLeft } from "lucide-react";
import { Link } from "react-router-dom";

const WebsiteDetails = () => {
  return (
    <div className="w-full relative px-5 md:px-10 py-10 flex flex-col gap-10">
      <div className="absolute md:left-7 left-3 top-1 md:top-5">
        <Link to={"/"}>
          <ToolTip label="Home">
            <MoveLeft />
          </ToolTip>
        </Link>
      </div>
      <div className="text-center">
        <h1 className="font-bona max-md:mt-5 text-5xl md:text-[5rem] font-semibold">
          Salt Wagnar
        </h1>
      </div>
      <div className="w-full items-center flex flex-col justify-center">
        <div className="w-full md:w-[80%] flex justify-between px-2">
          <h1 className="font-semibold uppercase">Abhay Panchal</h1>
          <div className="flex items-center gap-1">
            <Link to={"/website/:id"}>
              <ToolTip label="Visit">
                <ArrowUpRightFromCircle className="size-5" strokeWidth={2.2} />
              </ToolTip>
            </Link>

            <ToolTip label="Save">
              <Bookmark className="size-6 mb-1" strokeWidth={2.2} />
            </ToolTip>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://media.graphassets.com/0QyfP9o2QpSWHDBoySET"
          className="w-full md:w-[80%] rounded-2xl shadow-2xl"
        />
      </div>
      <LikeAndCommentSection />
    </div>
  );
};

export default WebsiteDetails;
