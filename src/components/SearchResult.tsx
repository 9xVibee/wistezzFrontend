import WebsiteCard from "./WebsiteCard";

const SearchResult = () => {
  return (
    <div className="sm:mt-15 mt-10 md:mt-24 w-full md:px-4 lg:px-20 px-2 flex flex-col gap-4">
      <h1 className="text-xl">
        Search Result for <span className="font-bold">"W sites"</span>
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

export default SearchResult;
