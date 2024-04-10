/* eslint-disable @typescript-eslint/no-unused-vars */
import { Skeleton } from "primereact/skeleton";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

export const WebsiteCardSkeleton = () => {
  return (
    <div className="flex flex-col rounded-md gap-2 md:mb-4">
      <div className="w-full h-[12rem] hover:shadow-lg transition-all duration-300 overflow-hidden rounded-md cursor-pointer relative">
        <Skeleton width="100%" height="100%" />
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-12 h-10">
          <Skeleton width="100%" height="100%" className="rounded-full" />
        </div>
        <p className="w-full overflow-clip items-center gap-1 px-2 rounded-2xl  text-[1rem] h-8 sm:flex truncate line-clamp-1">
          <Skeleton width="100%" height="100%" className="rounded-2xl" />
        </p>
      </div>
    </div>
  );
};

/*  <div className="flex flex-col rounded-md gap-2 md:mb-4">
      <div className="w-full h-[12rem] border hover:shadow-lg transition-all duration-300 overflow-hidden rounded-md cursor-pointer relative">
        <Link to={"/website/:id"}>
          <LazyLoadImage
            alt={"image"}
            threshold={1000}
            effect="blur"
            placeholderSrc={gif}
            wrapperClassName="rounded-md w-full h-full object-cover"
            src={"https://picsum.photos/200"}
          />
        </Link>
        <div className="w-full h-full absolute bg-gradient-to-t from-neutral-900 to-transparent top-0 left-0 flex justify-center items-center rounded-md"></div>
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
    </div> */
