import MostLikedSites from "@/components/MostLikedSites";
import WebsiteOfTheDay from "@/components/WebsiteOfTheDay";

const Home = () => {
  window.document.title = "W | Sitezz | Home";
  return (
    <div className="w-full flex flex-col gap-20 h-fit py-10">
      <WebsiteOfTheDay />
      <MostLikedSites />
    </div>
  );
};

export default Home;
