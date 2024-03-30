import { Heart } from "lucide-react";
import WebsiteCard from "./WebsiteCard";

const MostLikedSites = () => {
  return (
    <div className="w-full px-3 md:px-10 h-fit flex flex-col gap-2 items-start justify-center">
      <h1 className="font-semibold flex items-center gap-1 text-xl">
        Most Liked Sitezz <Heart className="size-4 mt-1" strokeWidth={2.2} />
      </h1>
      <div className="w-full grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-rows-2 gap-5 mb-4">
        {Array(8)
          .fill("")
          .map((_, idx) => {
            return <WebsiteCard key={idx} idx={idx} />;
          })}
      </div>
    </div>
  );
};

export default MostLikedSites;
