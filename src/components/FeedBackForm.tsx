import { X } from "lucide-react";

interface FeedBackFormProps {
  setIsFeedBackFormOpen: (isOpen: boolean) => void;
}

const FeedBackForm = ({ setIsFeedBackFormOpen }: FeedBackFormProps) => {
  return (
    <div className="w-full top-0 left-0 h-screen absolute flex justify-center items-center">
      <div className="bg-white opacity-100! py-6 z-10 w-[450px] rounded-xl h-[40%] relative flex flex-col items-center gap-4 px-6">
        <X
          className="absolute right-3 top-3 size-4 cursor-pointer"
          onClick={() => setIsFeedBackFormOpen(false)}
        />
        <h1 className="capitalize text-center text-3xl text-black font-medium">
          leave feedback
        </h1>
        <p className="text-base text-center leading-4  font-medium text-muted-foreground">
          We'd love to hear what went well or how we can improve the product
          experience.
        </p>
        <textarea
          cols={30}
          className="w-full p-2 rounded-md border"
          placeholder="what if..."
          rows={4}
        ></textarea>
        <button
          className="w-full py-2 flex bg-[#0f0f0f] items-center justify-center rounded-md text-white hover:opacity-90 text-base mt-7 transition-opacity"
          type="submit"
        >
          Submit
        </button>
      </div>
      <div
        className="w-full h-full bg-black absolute opacity-70"
        onClick={() => setIsFeedBackFormOpen(false)}
      ></div>
    </div>
  );
};

export default FeedBackForm;
