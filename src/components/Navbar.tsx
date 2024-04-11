/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { LogIn, LogOut, MessageSquareText, Rocket, Search } from "lucide-react";

import profileImg from "./../assets/batman.jpg";

import { Link, useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";
import DropDownItem from "./DropDownItem";
import { DropDownData } from "@/utils/data";
import FeedBackForm from "./FeedBackForm";
import ToolTip from "./reusable-comp/ToolTip";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFeedBackFormOpen, setIsFeedBackFormOpen] = useState(false);
  const [user] = useState(true);

  useEffect(() => {
    const handleCloseDropDownMenu = (e: any) => {
      if (e.target?.classList.contains("profile")) return;

      setIsOpen(false);
    };

    window.addEventListener("mousedown", handleCloseDropDownMenu);

    return () => {
      window.removeEventListener("mousedown", handleCloseDropDownMenu);
    };
  }, []);

  return (
    <div className="flex w-full justify-between px-4 sm:px-6 md:px-8 py-2 glassMorphisom fixed top-0 left-0 z-10">
      <Link to={"/"}>
        <h1 className="text-5xl font-zyada font-extrabold overflow-y-hidden">
          W.
        </h1>
      </Link>
      <div className="flex items-center gap-2 sm:gap-4">
        {/* feedback */}
        <p
          className="hidden items-center text-[1.1rem] gap-1 bg-gray-200 px-2 rounded-xl cursor-pointer sm:flex"
          onClick={() => setIsFeedBackFormOpen(true)}
        >
          Feedback <MessageSquareText className="size-5 mt-1" />
        </p>

        {/* Submit Website */}
        <Link to={"/submit-website"}>
          <ToolTip label="Submit Website">
            <Rocket />
          </ToolTip>
        </Link>

        {/* Search */}
        <Link to={"/search"}>
          <ToolTip label="Search">
            <Search />
          </ToolTip>
        </Link>

        {/* Profile */}
        {user ? (
          <div
            className="w-10 h-10 hover:shadow-lg rounded-full transition-all duration-300 cursor-pointer"
            onClick={() => {
              setIsOpen((prev) => !prev);
            }}
          >
            <img
              src={profileImg}
              alt=""
              loading="lazy"
              className="profile rounded-full hover:shadow-lg"
            />
          </div>
        ) : (
          <Link to={"/login"}>
            <ToolTip label="Login">
              <LogIn />
            </ToolTip>
          </Link>
        )}

        {/* DropDown */}
        <div
          className={`w-[16rem] rounded-md flex flex-col shadow-lg h-fit bg-white absolute top-[3.2rem] right-6 sm:right-8 md:right-10 transition border py-1 px-2 
            ${!isOpen ? "translate-x-[120%]" : "translate-x-0"}`}
        >
          {/* Iterating over the Dropdown data */}
          {DropDownData.map((item) => (
            <DropDownItem
              Icon={item.Icon}
              link={item.link}
              title={item.title}
              extraClass={item.extraClass}
              key={item.title}
            />
          ))}

          {/* Todo: Add logout function */}
          <p
            onClick={() => {}}
            className="w-full flex transition-colors duration-300 items-center text-[1rem]  cursor-pointer hover:text-muted-foreground font-medium gap-2 px-2 hover:bg-gray-100 py-2"
          >
            <LogOut className="size-[1.2rem]" /> Logout
          </p>
        </div>

        {/* Feedback popup */}
        {isFeedBackFormOpen && (
          <FeedBackForm setIsFeedBackFormOpen={setIsFeedBackFormOpen} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
