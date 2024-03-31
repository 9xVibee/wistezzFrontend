/* eslint-disable @typescript-eslint/no-explicit-any */
import Button from "@/components/reusable-comp/Button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password should contain 8 letters",
  }),
  name: z.string().min(1, {
    message: "Enter name",
  }),
  username: z.string().min(1, {
    message: "Enter username",
  }),
});

const SignUp = () => {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-start gap-8 w-[400px] ">
        <div>
          <p className="text-muted-foreground text-sm">Welcome to WSitezz</p>
          <h1 className="uppercase font-bold text-6xl">SignUp!!!</h1>
        </div>

        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="font-medium capitalize text-xl">
              name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Abhay Panchal"
              {...register("name")}
              className="py-2 px-1 bg-gray-100 w-full rounded-md outline-none"
            />
            {errors.name && (
              <p className="text-red-500">{errors?.name?.message + ""}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="username"
              className="font-medium capitalize text-xl"
            >
              username:
            </label>
            <input
              type="text"
              id="username"
              placeholder="Abhay Panchal"
              {...register("username")}
              className="py-2 px-1 bg-gray-100 w-full rounded-md outline-none"
            />
            {errors.username && (
              <p className="text-red-500">{errors?.username?.message + ""}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium capitalize text-xl">
              email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="abhxyyy@gmail.com"
              {...register("email")}
              className="py-2 px-1 bg-gray-100 w-full rounded-md outline-none"
            />
            {errors.email && (
              <p className="text-red-500">{errors?.email?.message + ""}</p>
            )}
          </div>

          <div className="flex flex-col gap-1 relative">
            <label
              htmlFor="password"
              className="font-medium capitalize text-xl"
            >
              password:
            </label>
            <div className="relative w-full">
              <input
                type={show ? "text" : "password"}
                id="password"
                placeholder="xyz"
                {...register("password")}
                className="py-2 px-1 bg-gray-100 w-full rounded-md outline-none"
              />
              {show ? (
                <Eye
                  className="absolute right-4 size-[1.2rem] bottom-2"
                  onClick={() => {
                    setShow(false);
                  }}
                />
              ) : (
                <EyeOff
                  className="absolute right-4 size-[1.2rem] bottom-2"
                  onClick={() => {
                    setShow(true);
                  }}
                />
              )}
            </div>

            {errors.password && (
              <p className="text-red-500">{errors.password.message + ""}</p>
            )}
          </div>

          <p>
            Already a user?{" "}
            <Link to={"/login"} className=" underline">
              Login!!
            </Link>
          </p>
          <Button label="Sign up" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
