import { Link } from "react-router-dom";
import tempBannerImg from "./../assets/pp.png";
import { ArrowUpRightFromCircle } from "lucide-react";

const WebsiteOfTheDay = () => {
  return (
    <div className="w-full mt-12 h-[100vh] gap-1 flex flex-col justify-center items-center">
      <div className="w-[95%] px-2 flex justify-between">
        <h1 className="font-semibold uppercase">Abhay Panchal</h1>
        <Link to={"/website/:id"}>
          <ArrowUpRightFromCircle className="size-5" strokeWidth={2.2} />
        </Link>
      </div>
      <div className="w-[95%] h-[95%] rounded-2xl border relative overflow-hidden">
        <img
          src={tempBannerImg}
          alt=""
          loading="lazy"
          className="w-full h-full rounded-2xl object-cover transition-all duration-300"
        />
        <div className="w-full h-full rounded-2xl absolute bg-gradient-to-t from-neutral-900 to-transparent top-0 left-0 flex justify-center items-center"></div>
      </div>
    </div>
  );
};

export default WebsiteOfTheDay;
