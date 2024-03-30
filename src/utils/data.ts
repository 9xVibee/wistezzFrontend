import { DropDownType } from "./types";
import {
  Handshake,
  HelpCircle,
  MessageSquareMore,
  MessageSquareText,
  User,
} from "lucide-react";

export const DropDownData: DropDownType[] = [
  {
    link: "/profile/:username",
    title: "Profile",
    Icon: User,
  },
  {
    link: "/feedback",
    title: "Feedback",
    Icon: MessageSquareText,
    extraClass: "sm:hidden",
  },
  {
    link: "/faq",
    title: "FAQs",
    Icon: HelpCircle,
  },
  {
    link: "/bussiness",
    title: "Bussiness Enquiry",
    Icon: Handshake,
  },
  {
    link: "/discord",
    title: "Discord",
    Icon: MessageSquareMore,
  },
];
