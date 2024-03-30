import SearchBar from "@/components/SearchBar";
import SearchResult from "@/components/SearchResult";
import { useState } from "react";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  //! Setting the title of search page
  window.document.title = "W | Sitezz | Search";

  const handleSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  return (
    <div className="mt-12 w-full h-fit flex justify-center items-center px-2 flex-col">
      <SearchBar
        handleSearch={handleSearch}
        loading={loading}
        search={search}
        setSearch={setSearch}
      />
      <SearchResult />
    </div>
  );
};

export default SearchPage;
