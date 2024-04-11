import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputLabel from "./InputLabel";
import Button from "./reusable-comp/Button";

const schema = z.object({
  title: z.string().min(5, {
    message: "Atleast 5 character",
  }),
  description: z.string().min(20, {
    message: "Atleast 20 characters",
  }),
  link: z.string().min(1, {
    message: "Enter the link",
  }),
});

const arrOfTitle = ["title", "description", "link"];

const SubmitWebsiteForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onWebsiteSubmit = (data: any) => {};

  return (
    <form className="mt-10 w-[400px]" onSubmit={handleSubmit(onWebsiteSubmit)}>
      {arrOfTitle.map((title) => {
        return <InputLabel title={title} register={register} errors={errors} />;
      })}
      <Button label="Submit website" type="submit" />
    </form>
  );
};

export default SubmitWebsiteForm;
