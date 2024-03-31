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
    message: "Password should have atleast 8 letters",
  }),
});

const Login = () => {
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
          <h1 className="uppercase font-bold text-6xl">Login!!!</h1>
        </div>

        <form
          className="w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-medium capitalize text-xl">
              email:{" "}
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
            <div className="w-full relative">
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
            New user?{" "}
            <Link to={"/signup"} className=" underline">
              create account!!
            </Link>
          </p>
          <Button label="Log in" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Login;
