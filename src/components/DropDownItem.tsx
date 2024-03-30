import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface DropDownItemProps {
  link: string;
  title: string;
  Icon: LucideIcon;
  extraClass?: string;
}

const DropDownItem = ({ Icon, link, title, extraClass }: DropDownItemProps) => {
  return (
    <Link
      to={link}
      className={`w-full flex transition-colors duration-300 items-center text-[1rem] cursor-pointer hover:text-muted-foreground gap-2 px-2 font-medium rounded-md hover:bg-gray-100 py-2 ${extraClass}`}
    >
      <Icon className="size-[1.2rem]" /> {title}
    </Link>
  );
};

export default DropDownItem;
