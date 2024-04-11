import ProfileImg from "./../assets/batman.jpg";
import { Link } from "react-router-dom";
import gif from "./../assets/pp.png";

const WebsiteCard = () => {
  return (
    <div className="flex flex-col rounded-md gap-2 md:mb-4">
      <div className="group w-full h-[12rem] border hover:shadow-lg transition-all duration-300 overflow-hidden rounded-md cursor-pointer relative">
        <Link to={"/website/:id"}>
          <img
            src={gif}
            alt="image"
            loading="lazy"
            className="md:group-hover:scale-110 transition rounded-md w-full h-full object-cover"
          />
        </Link>
        <div className="w-full h-full absolute bg-gradient-to-t from-neutral-900 to-transparent top-0 left-0 flex justify-center items-center rounded-md"></div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-12 h-10">
          <Link to={"/user/:username"}>
            <img
              src={ProfileImg}
              loading="lazy"
              className="w-full h-full rounded-full"
            />
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
