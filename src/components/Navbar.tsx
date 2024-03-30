/* eslint-disable @typescript-eslint/no-unused-vars */
import { LogOut, MessageSquareText, Rocket, Search } from "lucide-react";

import profileImg from "./../assets/batman.jpg";

import { Link } from "react-router-dom";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useState } from "react";
import DropDownItem from "./DropDownItem";
import { DropDownData } from "@/utils/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex w-full justify-between px-4 sm:px-6 md:px-8 py-2 glassMorphisom fixed top-0 left-0 z-10">
      <Link to={"/"}>
        <h1 className="text-5xl font-zyada font-extrabold overflow-y-hidden">
          W.
        </h1>
      </Link>
      <div className="flex items-center gap-2 sm:gap-4">
        {/* feedback */}
        <p className="hidden items-center text-[1.1rem] gap-1 bg-gray-200 px-2 rounded-xl cursor-pointer sm:flex">
          Feedback <MessageSquareText className="size-5 mt-1" />
        </p>

        {/* Submit Website */}
        <TooltipProvider>
          <Tooltip delayDuration={1}>
            <TooltipTrigger>
              <Link to={"/submit-website"}>
                <p className="hover:bg-gray-200 cursor-pointer py-2 px-2 rounded-full transition-colors duration-300">
                  <Rocket />
                </p>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Submit Website</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Search */}
        <TooltipProvider>
          <Tooltip delayDuration={1}>
            <TooltipTrigger>
              <Link to={"/search"}>
                <p className="hover:bg-gray-200 cursor-pointer py-2 px-2 rounded-full transition-colors duration-300">
                  <Search />
                </p>
              </Link>
            </TooltipTrigger>
            <TooltipContent>Search</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Profile */}
        <div
          className="w-10 h-10 hover:shadow-lg rounded-full transition-all duration-300 cursor-pointer"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <img
            src={profileImg}
            alt=""
            className="rounded-full hover:shadow-lg"
          />
        </div>

        {/* DropDown */}
        {isOpen && (
          <div className="w-[16rem] rounded-md flex flex-col shadow-lg h-fit bg-white absolute top-[3.2rem] right-6 sm:right-8 md:right-10 border py-1 px-2">
            {DropDownData.map((item) => (
              <DropDownItem
                Icon={item.Icon}
                link={item.link}
                title={item.title}
                extraClass={item.extraClass}
                key={item.title}
              />
            ))}

            <p
              onClick={() => {}}
              className="w-full flex transition-colors duration-300 items-center text-[1rem]  cursor-pointer hover:text-muted-foreground font-medium gap-2 px-2 hover:bg-gray-100 py-2"
            >
              <LogOut className="size-[1.2rem]" /> Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
