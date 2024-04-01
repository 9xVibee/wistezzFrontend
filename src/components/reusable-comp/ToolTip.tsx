import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface ToolTipProps {
  children: React.ReactNode;
  label: string;
}

const ToolTip = ({ children, label }: ToolTipProps) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={1}>
        <TooltipTrigger>
          <p className="hover:bg-gray-200 cursor-pointer py-2 px-2 rounded-full transition-colors duration-300 mt-1">
            {children}
          </p>
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ToolTip;
