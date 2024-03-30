import BannerImg from "./../assets/pp.png";
import Banner2Img from "./../assets/Screenshot (447).png";
import ProfileImg from "./../assets/batman.jpg";
import { Link } from "react-router-dom";

const WebsiteCard = ({ idx }: { idx: number }) => {
  return (
    <div className="flex flex-col rounded-md gap-2 md:mb-4">
      <div className="w-full h-[12rem] border hover:shadow-lg transition-shadow duration-300 overflow-hidden rounded-md cursor-pointer">
        <Link to={"/website/:id"}>
          <img
            src={idx % 2 == 0 ? Banner2Img : BannerImg}
            alt=""
            className="rounded-md w-full h-full object-cover transition-all duration-300 hover:scale-110"
          />
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-12 h-10">
          <Link to={"/user/:username"}>
            <img src={ProfileImg} className="w-full h-full rounded-full" />
          </Link>
        </div>
        <p className="w-full overflow-clip items-center gap-1 bg-gray-200 px-2 rounded-2xl  text-[1rem] h-8 sm:flex truncate line-clamp-1">
          Feedback Lorem ipsum Lorem ipsum......
        </p>
      </div>
    </div>
  );
};

export default WebsiteCard;
