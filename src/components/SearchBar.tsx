import { Search } from "lucide-react";
import Loader from "./Loader";

const SearchBar = ({
  loading,
  handleSearch,
  setSearch,
  search,
}: {
  loading: boolean;
  handleSearch: () => void;
  search: string;
  setSearch: (search: string) => void;
}) => {
  return (
    <div className="w-full h-fit flex justify-center mt-10 sm:mt-20 md:mt-36">
      {/* Search Bar */}
      <div className="flex shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] border gap-2 bg-[#18181B] rounded-full justify-between items-centers w-[35rem] py-3 px-5">
        <input
          type="text"
          className="flex items-center outline-none bg-[#18181B] text-white border-none w-full"
          placeholder="Search for websites..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {!loading ? (
          <Search
            className="size-6 text-white cursor-pointer"
            onClick={handleSearch}
          />
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
